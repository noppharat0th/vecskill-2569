<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type { User } from '~~/shared/types/user'
import Table from '~/components/Table.vue'
import { useUserService } from '~/composables/service/users'

definePageMeta({ layout: 'dashboard' })
useHead({ title: 'Manage users · PersonSystem' })

const { users, fetchUser } = useUserService()
const loading = ref(false)
const errorMessage = ref('')
const search = ref('')
const roleFilter = ref('all')
const currentPage = ref(1)
const pageSize = 10

const columns: TableColumn<User>[] = [
  { accessorKey: 'id', header: 'ID' },
  {
    id: 'name',
    header: 'Name',
    accessorFn: (row: User) => `${row.fname ?? ''} ${row.lname ?? ''}`.trim(),
  },
  { accessorKey: 'username', header: 'Username' },
  { accessorKey: 'role', header: 'Role' },
]

const evaluators = computed(() => users.value.filter(user => user.role === 'evaluator').length)
const evaluatees = computed(() => users.value.filter(user => user.role === 'evaluatee').length)

const filteredUsers = computed(() => {
  const query = search.value.trim().toLocaleLowerCase()
  return users.value.filter((user) => {
    const matchesRole = roleFilter.value === 'all' || user.role === roleFilter.value
    const searchable = `${user.fname ?? ''} ${user.lname ?? ''} ${user.username ?? ''} ${user.id}`.toLocaleLowerCase()
    return matchesRole && (!query || searchable.includes(query))
  })
})

const pageCount = computed(() => Math.max(1, Math.ceil(filteredUsers.value.length / pageSize)))
const visibleUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredUsers.value.slice(start, start + pageSize)
})
const firstVisible = computed(() => filteredUsers.value.length ? (currentPage.value - 1) * pageSize + 1 : 0)
const lastVisible = computed(() => Math.min(currentPage.value * pageSize, filteredUsers.value.length))

watch([search, roleFilter], () => { currentPage.value = 1 })
watch(pageCount, value => { if (currentPage.value > value) currentPage.value = value })

async function loadUsers() {
  loading.value = true
  errorMessage.value = ''
  try {
    await fetchUser()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Unable to load users.'
  } finally {
    loading.value = false
  }
}

onMounted(loadUsers)
</script>

<template>
  <main class="min-w-0 flex-1 px-5 py-5 sm:px-7">
    <div class="w-full max-w-none space-y-4">
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
        <UButton
          label="Refresh"
          icon="i-lucide-refresh-cw"
          color="neutral"
          variant="outline"
          :loading="loading"
          class="border-gray-200 bg-white"
          @click="loadUsers"
        />
      </header>

      <UAlert v-if="errorMessage" color="error" variant="soft" title="Could not load users" :description="errorMessage" />

      <section class="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 px-3 py-2">
          <div class="flex min-w-0 flex-1 flex-wrap items-center gap-2">
            <UInput
              v-model="search"
              icon="i-lucide-search"
              placeholder="Search users…"
              aria-label="Search users"
              class="w-full sm:max-w-xs"
              :ui="{ base: 'bg-white ring-1 ring-gray-200 focus:ring-2 focus:ring-gray-300' }"
            />
            <select
              v-model="roleFilter"
              aria-label="Filter by role"
              class="h-8 rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-600 outline-none transition focus:border-gray-400"
            >
              <option value="all">All roles</option>
              <option value="evaluator">Evaluator</option>
              <option value="evaluatee">Evaluatee</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <span class="px-1 text-xs text-gray-500">{{ errorMessage ? '—' : filteredUsers.length }} users</span>
        </div>

        <Table
          :data="visibleUsers"
          :columns="columns"
          :loading="loading"
          :empty-text="errorMessage ? 'User list unavailable. Check access, then refresh.' : 'No users match your search.'"
        >
          <template #role-cell="{ getValue }">
            <span
              class="inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium capitalize"
              :class="{
                'bg-blue-50 text-blue-700': getValue() === 'evaluator',
                'bg-violet-50 text-violet-700': getValue() === 'evaluatee',
                'bg-gray-100 text-gray-700': getValue() === 'admin',
              }"
            >
              {{ getValue() }}
            </span>
          </template>
        </Table>

        <footer class="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 px-4 py-2">
          <p class="text-xs text-gray-500"><template v-if="errorMessage">User data unavailable</template><template v-else>Showing {{ firstVisible }}–{{ lastVisible }} of {{ filteredUsers.length }} users</template></p>
          <div class="flex items-center gap-1">
            <UButton
              icon="i-lucide-chevron-left"
              color="neutral"
              variant="ghost"
              size="xs"
              aria-label="Previous page"
              :disabled="currentPage <= 1"
              @click="currentPage--"
            />
            <span class="min-w-16 text-center text-xs text-gray-600">Page {{ currentPage }} / {{ pageCount }}</span>
            <UButton
              icon="i-lucide-chevron-right"
              color="neutral"
              variant="ghost"
              size="xs"
              aria-label="Next page"
              :disabled="currentPage >= pageCount"
              @click="currentPage++"
            />
          </div>
        </footer>
      </section>
    </div>
  </main>
</template>



