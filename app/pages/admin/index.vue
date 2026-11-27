<script setup lang="ts">
import type { User } from '~~/shared/types/user'
import type { TableColumn } from '~/types/table'
import { useUserService } from '~/composables/service/users'

definePageMeta({ layout: 'dashboard' })
useHead({ title: 'Manage users · PersonSystem' })

const { users, fetchUser, createUser, deleteUser, form, error: formError } = useUserService()

const roleColor: Record<string, string> = {
  evaluator: 'bg-blue-50 text-blue-700',
  evaluatee: 'bg-violet-50 text-violet-700',
  admin: 'bg-gray-100 text-gray-700',
}
const cap = (s: string) => s[0].toUpperCase() + s.slice(1)
const createRoleOptions = ['evaluatee', 'evaluator'].map(role => ({ label: cap(role), value: role }))

const fields = [
  { key: 'fname', label: 'First name', auto: 'given-name' },
  { key: 'lname', label: 'Last name', auto: 'family-name' },
  { key: 'username', label: 'Username', auto: 'username', full: true },
  { key: 'role', label: 'Role', full: true },
  { key: 'password', label: 'Password', auto: 'new-password', type: 'password' },
  { key: 'confirm_password', label: 'Confirm password', auto: 'new-password', type: 'password' },
]

const loading = ref(false)
const creating = ref(false)
const createModalOpen = ref(false)

const columns: TableColumn<User>[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name', value: u => [u.fname, u.lname].filter(Boolean).join(' ') },
  { key: 'username', label: 'Username' },
  { key: 'role', label: 'Role' },
  { key: 'action', label: "Action"}
]

const { search, filteredRows } = useTableData(users, { columns })

async function loadUsers() {
  loading.value = true
  try {
    await fetchUser()
  } catch (e: any) {
  } finally {
    loading.value = false
  }
}

function openCreateModal() {
  form.value = { id: null, fname: '', lname: '', username: '', password: '', confirm_password: '', role: 'evaluatee' }
  formError.value = ''
  createModalOpen.value = true
}

async function submitCreateUser() {
  formError.value = ''
  creating.value = true
  try {
    if (await createUser()) {
      createModalOpen.value = false
    }
  } catch (e: any) {
    formError.value = e.message || 'Unable to create user.'
  } finally {
    creating.value = false
  }
}

onMounted(loadUsers)
</script>

<template>
  <main class="min-w-0 flex-1 px-5 py-5 sm:px-7">
    <div class="w-full space-y-4">
      <header class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div class="mb-1 flex items-center gap-2 text-[11px] text-gray-400">
            <span>Workspace</span>
            <UIcon name="i-lucide-chevron-right" class="size-3" />
            <span class="text-gray-600">Manage users</span>
          </div>
          <h1 class="text-xl font-semibold tracking-tight text-gray-900">Manage users</h1>
          <p class="mt-0.5 text-xs text-gray-500">View and manage the people in your workspace.</p>
        </div>

        <div class="flex items-center gap-2">
          <UButton label="Create user" icon="i-lucide-user-plus" color="neutral" @click="openCreateModal" />
          <UButton label="Refresh" icon="i-lucide-refresh-cw" color="neutral" variant="outline"
            :loading="loading" @click="loadUsers" />
        </div>
      </header>

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
            <div class="space-x-2">
              <UButton icon="i-lucide-edit" color="warning" variant="soft"/>
              <UButton @click="deleteUser(row.id)" icon="i-lucide-trash" color="error" variant="soft"/>
            </div>
          </template>
        </Table>
      </section>
    </div>

    <UModal v-model:open="createModalOpen">
      <template #content>
        <div class="space-y-5 p-5 sm:p-6">
          <header class="space-y-1">
            <h2 class="text-lg font-semibold text-gray-900">Create user</h2>
            <p class="text-sm text-gray-500">Add a user to your workspace.</p>
          </header>

          <UAlert v-if="formError" color="error" variant="soft" title="Could not create user"
            :description="formError" />

          <form class="grid gap-x-3 gap-y-4 sm:grid-cols-2" @submit.prevent="submitCreateUser">
            <label v-for="f in fields" :key="f.key" class="block space-y-1.5"
              :class="{ 'sm:col-span-2': f.full }">
              <span class="text-sm font-medium text-gray-700">{{ f.label }}</span>
              <USelect v-if="f.key === 'role'" v-model="form.role" :items="createRoleOptions" required class="w-full" />
              <UInput v-else v-model="form[f.key]" :type="f.type" :autocomplete="f.auto" required class="w-full" />
            </label>

            <footer class="flex justify-end gap-2 border-t border-gray-100 pt-4 sm:col-span-2">
              <UButton label="Cancel" color="neutral" variant="ghost" type="button"
                :disabled="creating" @click="createModalOpen = false" />
              <UButton label="Create user" color="neutral" type="submit" :loading="creating" />
            </footer>
          </form>
        </div>
      </template>
    </UModal>
  </main>
</template>