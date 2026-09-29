<script setup lang="ts">
const route = useRoute()
const { logout, user } = useAuth()
const { collapsed, toggle } = useSidebar()

const menus = [
    {
        category: 'Overview',
        items: [
            { label: 'Dashboard', icon: 'i-lucide-layout-dashboard', to: '/admin' },
            { label: 'Result', icon: 'i-lucide-file-check', to: '' },
            { label: 'Track Status', icon: 'i-lucide-activity', to: '' },
            { label: 'Report', icon: 'i-lucide-file-text', to: '' },
        ]
    },
    {
        category: 'Assessment',
        items: [
            { label: 'Add Indicator', icon: 'i-lucide-target', to: '' },
            { label: 'Assignments', icon: 'i-lucide-clipboard-list', to: '' },
        ]
    },
    {
        category: 'Manager',
        items: [
            { label: 'Manager Evaluation', icon: 'i-lucide-clipboard-check', to: '' },
            { label: 'Manager Evaluator', icon: 'i-lucide-users', to: '' },
            { label: 'Manager Evaluatee', icon: 'i-lucide-user-check', to: '' },
        ]
    },
]

const isActive = (to: string) => route.path === to
</script>

<template>
    <aside
        class="flex flex-col min-h-screen bg-white border-r border-gray-100 py-5 shrink-0 transition-all duration-300 ease-in-out overflow-hidden"
        :class="collapsed ? 'w-[68px] px-2' : 'w-[230px] px-3'"
    >
        <!-- Logo & Toggle -->
        <div class="flex items-center gap-2.5 px-2 pb-4 mb-1 border-b border-gray-100"
            :class="collapsed ? 'justify-center' : ''">
            <span v-if="!collapsed" class="text-base font-bold text-blue-950 tracking-tight whitespace-nowrap">
                Mr.Adul
            </span>
            <UButton
                :icon="collapsed ? 'i-lucide-panel-left-open' : 'i-lucide-panel-left-close'"
                color="neutral" variant="ghost" size="xs"
                :class="collapsed ? '' : 'ml-auto'"
                class="text-gray-400 shrink-0"
                @click="toggle"
            />
        </div>

        <!-- Nav -->
        <nav class="flex-1 overflow-y-auto flex flex-col gap-5 mt-2">
            <div v-for="group in menus" :key="group.category">
                <!-- Category label -->
                <p v-if="!collapsed"
                    class="text-[10px] font-semibold tracking-widest text-gray-400 uppercase px-2 mb-1.5 whitespace-nowrap">
                    {{ group.category }}
                </p>
                <!-- Thin divider when collapsed  -->
                <div v-else class="mx-auto mb-2 w-5 border-t border-gray-200" />

                <ul class="flex flex-col gap-0.5">
                    <li v-for="item in group.items" :key="item.label">
                        <UTooltip v-if="collapsed" :text="item.label" :popper="{ placement: 'right' }">
                            <NuxtLink :to="item.to"
                                class="flex items-center justify-center p-2 rounded-xl transition-all duration-150"
                                :class="isActive(item.to) && item.to !== ''
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-blue-500'">
                                <UIcon :name="item.icon" class="size-[18px] shrink-0" />
                            </NuxtLink>
                        </UTooltip>

                        <NuxtLink v-else :to="item.to"
                            class="flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-sm font-medium transition-all duration-150 whitespace-nowrap"
                            :class="isActive(item.to) && item.to !== ''
                                ? 'bg-blue-50 text-blue-600 font-semibold'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-blue-500'">
                            <UIcon :name="item.icon" class="size-4 shrink-0" />
                            {{ item.label }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- User Profile -->
        <div class="flex items-center gap-2.5 px-2 pt-3 mt-1 border-t border-gray-100"
            :class="collapsed ? 'justify-center' : ''">
            <UAvatar src="https://i.pravatar.cc/40?img=12" size="sm" alt="User avatar" class="shrink-0" />
            <div v-if="!collapsed" class="min-w-0 flex-1">
                <p class="text-xs font-semibold text-blue-950 truncate">{{ user?.username }}</p>
                <p class="text-[10px] text-gray-400 truncate">{{ user?.role }}</p>
            </div>
            <div v-if="!collapsed" @click="logout" class="cursor-pointer">
                <UBadge icon="i-lucide-log-out" color="error" variant="subtle" />
            </div>
        </div>
    </aside>
</template>
