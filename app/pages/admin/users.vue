<script setup>
import { useUserService } from '~/composables/service/users'

definePageMeta({ layout: 'dashboard' })
useHead({ title: 'Manage users · PersonSystem' })

const { users, loadUsers, saveUser, deleteUser, form, error: formError, loading, saving } = useUserService()

const roleColor = {
  evaluator: 'bg-blue-50 text-blue-700',
  evaluatee: 'bg-violet-50 text-violet-700',
  admin: 'bg-gray-100 text-gray-700',
}
const cap = s => s[0].toUpperCase() + s.slice(1)
const createRoleOptions = ['evaluatee', 'evaluator'].map(role => ({ label: cap(role), value: role }))

const fields = [
  { key: 'fname', label: 'First name', auto: 'given-name' },
  { key: 'lname', label: 'Last name', auto: 'family-name' },
  { key: 'username', label: 'Username', auto: 'username', full: true },
  { key: 'role', label: 'Role', full: true },
  { key: 'password', label: 'Password', auto: 'new-password', type: 'password' },
  { key: 'confirm_password', label: 'Confirm password', auto: 'new-password', type: 'password' },
]

const mode = ref('create')
const createModalOpen = ref(false)
const formFields = computed(() => mode.value === 'edit' ? fields.map(field =>
  field.key === 'password' ? { ...field, label: 'New password' } : field,
) : fields)

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name', value: u => [u.fname, u.lname].filter(Boolean).join(' ') },
  { key: 'username', label: 'Username' },
  { key: 'role', label: 'Role' },
  { key: 'action', label: 'Actions' },
]

const { search, filteredRows } = useTableData(users, { columns })

function openModal(user) {
  mode.value = user ? 'edit' : 'create'
  form.value = user
    ? {
        id: user.id, fname: user.fname, lname: user.lname, username: user.username,
        password: '', confirm_password: '', role: user.role,
      }
    : { id: null, fname: '', lname: '', username: '', password: '', confirm_password: '', role: 'evaluatee' }
  formError.value = ''
  createModalOpen.value = true
}

async function submitUser() {
  if (await saveUser(mode.value)) createModalOpen.value = false
}

function actionItems(user) {
  return [
    { label: 'Edit', icon: 'i-lucide-pencil', onSelect: () => openModal(user) },
    { type: 'separator' },
    { label: 'Delete', icon: 'i-lucide-trash-2', color: 'error', onSelect: () => deleteUser(user.id) },
  ]
}

onMounted(loadUsers)
</script>

<template>
  <main class="min-w-0 flex-1 px-5 py-5 sm:px-7">
    <div class="w-full space-y-4">
      <PageHeader section="Workspace" title="Manage users" description="View and manage the people in your workspace.">
        <template #actions>
          <UButton label="Create user" icon="i-lucide-user-plus" color="neutral" @click="openModal()" />
          <UButton label="Refresh" icon="i-lucide-refresh-cw" color="neutral" variant="outline"
            :loading="loading" @click="loadUsers" />
        </template>
      </PageHeader>

      <UAlert v-if="formError && !createModalOpen" color="error" variant="soft"
        title="Could not load users" :description="formError" />

      <section class="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 px-3 py-2">
          <div class="flex min-w-0 flex-1 flex-wrap items-center gap-2">
            <BaseInput v-model="search" icon="i-lucide-search" placeholder="Search users…"
              aria-label="Search users" width="search" />
          </div>

        </div>

        <Table :rows="filteredRows" :columns="columns" :loading="loading" empty-text="No users match your search.">
          <template #role="{ value }">
            <span class="inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium capitalize"
              :class="roleColor[value]">{{ value }}</span>
          </template>

          <template #action="{ row }">
            <div>
              <UDropdownMenu :items="actionItems(row)">
                <UButton icon="i-lucide-ellipsis" color="neutral" variant="ghost" aria-label="User actions" />
              </UDropdownMenu>
            </div>
          </template>
        </Table>
      </section>
    </div>

    <UModal v-model:open="createModalOpen">
      <template #content>
        <div class="space-y-5 p-5 sm:p-6">
          <header class="space-y-1">
            <h2 class="text-lg font-semibold text-gray-900">{{ mode === 'edit' ? 'Edit user' : 'Create user' }}</h2>
            <p class="text-sm text-gray-500">
              {{ mode === 'edit' ? 'Update details and set a new password.' : 'Add a user to your workspace.' }}
            </p>
          </header>

          <UAlert v-if="formError" color="error" variant="soft"
            :title="mode === 'edit' ? 'Could not update user' : 'Could not create user'" :description="formError" />

          <form class="grid gap-x-3 gap-y-4 sm:grid-cols-2" @submit.prevent="submitUser">
            <label v-for="f in formFields" :key="f.key" class="block space-y-1.5"
              :class="{ 'sm:col-span-2': f.full }">
              <span class="text-sm font-medium text-gray-700">{{ f.label }}</span>
              <USelect v-if="f.key === 'role'" v-model="form.role" :items="createRoleOptions"
                :disabled="mode === 'edit'" required class="w-full" />
              <UInput v-else v-model="form[f.key]" :type="f.type" :autocomplete="f.auto" required class="w-full" />
            </label>

            <footer class="flex justify-end gap-2 border-t border-gray-100 pt-4 sm:col-span-2">
              <UButton label="Cancel" color="neutral" variant="ghost" type="button"
                :disabled="saving" @click="createModalOpen = false" />
              <UButton :label="mode === 'edit' ? 'Save changes' : 'Create user'" color="neutral"
                type="submit" :loading="saving" />
            </footer>
          </form>
        </div>
      </template>
    </UModal>
  </main>
</template>