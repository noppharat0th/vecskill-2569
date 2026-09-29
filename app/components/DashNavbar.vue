<script setup lang="ts">
const { collapsed, toggle } = useSidebar()
const search = ref('')
</script>

<template>
    <header class="flex items-center gap-4 h-14 px-6 bg-white border-b border-gray-100 shrink-0">
        <!-- Mobile toggle  -->
        <UButton
            icon="i-lucide-menu"
            color="neutral" variant="ghost" size="sm"
            class="text-gray-500 lg:hidden"
            @click="toggle"
        />

        <!-- Page Title -->
        <div class="flex flex-col">
            <h1 class="text-lg font-semibold text-gray-900 leading-tight">Dashboard</h1>
            <p class="text-xs text-gray-400 hidden sm:block">Evaluation Overview</p>
        </div>

        <div class="flex-1" />

        <!-- Search -->
        <div class="hidden md:block w-64">
            <UInput
                v-model="search"
                icon="i-lucide-search"
                placeholder="Search here..."
                size="sm"
                class="w-full"
            />
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-1">
            <UButton icon="i-lucide-bell" color="neutral" variant="ghost" size="sm" class="text-gray-500" />
            <UButton icon="i-lucide-settings" color="neutral" variant="ghost" size="sm" class="text-gray-500" />
        </div>
    </header>
</template>
