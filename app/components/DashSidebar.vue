<script setup lang="ts">
const route = useRoute()

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
    <aside class="flex flex-col w-[230px] min-h-screen bg-white border-r border-gray-100 px-3 py-5 gap-1 shrink-0">

        <!-- Logo -->
        <div class="flex items-center gap-2.5 px-2 pb-4 mb-1 border-b border-gray-100">
            <span class="text-base font-bold text-orange-950 tracking-tight">NAVAMIN</span>
            <UButton icon="i-lucide-panel-left-close" color="neutral" variant="ghost" size="xs"
                class="ml-auto text-gray-400" />
        </div>

        <!-- Nav -->
        <nav class="flex-1 overflow-y-auto flex flex-col gap-5 mt-2">
            <!-- Menu Groups -->
            <div v-for="group in menus" :key="group.category">
                <p class="text-[10px] font-semibold tracking-widest text-gray-400 px-2 mb-1.5">{{ group.category }}</p>
                <ul class="flex flex-col gap-0.5">
                    <li v-for="item in group.items" :key="item.label">
                        <NuxtLink :to="item.to"
                            class="flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-sm font-medium transition-all duration-150"
                            :class="isActive(item.to) && item.to !== ''
                                ? 'bg-orange-50 text-orange-600 font-semibold'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-orange-500'">
                            <UIcon :name="item.icon" class="size-4 shrink-0" />
                            {{ item.label }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>



        <!-- User Profile -->
        <div class="flex items-center gap-2.5 px-2 pt-3 mt-1 border-t border-gray-100">
            <UAvatar src="https://i.pravatar.cc/40?img=12" size="sm" alt="User avatar" />
            <div class="min-w-0">
                <p class="text-xs font-semibold text-orange-950 truncate">Lukmon Ilebiyi</p>
                <p class="text-[10px] text-gray-400 truncate">lukmonilebyi@gmail.com</p>
            </div>
        </div>

    </aside>
</template>
