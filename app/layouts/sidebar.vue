<script setup lang="ts">
const expanded = useState<boolean>('dashboard-sidebar-expanded', () => true)
const { user, logout } = useAuth()

const sections = [
  {
    // title: 'WORKSPACE',
    items: [
      { label: 'Users', icon: 'i-lucide-users-round', to: '/admin' },
      { label: 'Evaluations', icon: 'i-lucide-clipboard-check', to: '/admin/evaluations' },
      { label: 'Indicators', icon: 'i-lucide-chart-no-axes-column-increasing', to: '/admin/indicators' },

    ],
  },
]
</script>

<template>
  <aside
    class="sticky top-0 flex h-screen shrink-0 flex-col border-r border-gray-200 bg-white px-2.5 py-3 transition-[width] duration-300 ease-in-out"
    :class="expanded ? 'w-56' : 'w-[60px]'"
    aria-label="Main navigation"
  >
    <div class="flex h-11 items-center gap-3 px-1">
      <NuxtLink to="/admin" class="flex min-w-0 flex-1 items-center gap-2.5" aria-label="EC Performance home">
        <img src="/logo2.png" class="h-13 w-13 shrink-0 object-contain" alt="">
        <span v-if="expanded" class="min-w-0 leading-tight -ml-2">
          <span class="block text-sm font-bold text-gray-900">MEC</span>
          <span class="block text-[11px] text-gray-500">Mukdahan</span>
        </span>
      </NuxtLink>
      <UTooltip :text="expanded ? 'Collapse sidebar' : 'Expand sidebar'" :content="{ side: 'right' }">
        <button
          type="button"
          class="flex size-8 shrink-0 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
          :aria-label="expanded ? 'Collapse sidebar' : 'Expand sidebar'"
          :aria-expanded="expanded"
          @click="expanded = !expanded"
        >
          <UIcon :name="expanded ? 'i-lucide-panel-left-close' : 'i-lucide-panel-left-open'" class="size-4" />
        </button>
      </UTooltip>
    </div>

    <div class="my-4 border-t border-gray-100" />

    <nav class="flex-1 space-y-6 overflow-y-auto overflow-x-hidden">
      <section v-for="section in sections" :key="section.title">
        <p v-if="expanded" class="mb-2 px-2 text-[10px] font-semibold tracking-[0.12em] text-gray-400">
          {{ section.title }}
        </p>
        <div class="space-y-1">
          <UTooltip
            v-for="item in section.items"
            :key="item.label"
            :text="item.label"
            :content="{ side: 'right' }"
            :disabled="expanded"
          >
            <NuxtLink
              :to="item.to"
              :title="expanded ? undefined : item.label"
              active-class="!bg-gray-100 !font-medium !text-gray-950"
              class="flex h-10 items-center gap-3 rounded-lg px-2.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              <UIcon :name="item.icon" class="size-[18px] shrink-0" />
              <span v-if="expanded" class="truncate">{{ item.label }}</span>
            </NuxtLink>
          </UTooltip>
        </div>
      </section>
    </nav>

    <div class="border-t border-gray-100 pt-3">
      <div class="flex items-center gap-2.5 rounded-lg px-2 py-2" :class="expanded ? '' : 'justify-center'">
        <div v-if="expanded" class="min-w-0 flex-1">
          <p class="truncate text-xs font-medium text-gray-800">{{ user?.username }}</p>
          <p class="truncate text-[11px] text-gray-500">{{ user?.role}}</p>
        </div>
        <UTooltip v-if="!expanded" text="Log out" :content="{ side: 'right' }">
          <button
            type="button"
            class="flex size-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            aria-label="Log out"
            @click="logout"
          >
            <UIcon name="i-lucide-log-out" class="size-4" />
          </button>
        </UTooltip>
        <UButton
          v-else
          icon="i-lucide-log-out"
          color="neutral"
          variant="ghost"
          size="xs"
          aria-label="Log out"
          @click="logout"
        />
      </div>
    </div>
  </aside>
</template>




