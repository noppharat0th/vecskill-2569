<script lang="ts" setup>
import { useApi } from '~/composables/useApi';

definePageMeta({
    layout: "dashboard"
})
</script>

<template>
    <div class="space-y-6">
        <h1 class="text-xl font-bold text-gray-800">Dashboard</h1>

        <!-- Stat Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <DashCard variant="primary" title="Total Earnings" value="$950" icon="i-lucide-wallet" trend="7%"
                trend-direction="up" period="This month" />
            <DashCard variant="secondary" title="Total Spending" value="$700" icon="i-lucide-shopping-bag" trend="5%"
                trend-direction="down" period="This month" />
            <DashCard variant="secondary" title="Total Income" value="$1,050" icon="i-lucide-arrow-left-right"
                trend="8%" trend-direction="up" period="This month" />
            <DashCard variant="secondary" title="Total Revenue" value="$850" icon="i-lucide-piggy-bank" trend="4%"
                trend-direction="up" period="This month" />
        </div>
    </div>

    <UModal title="Modal with title" :ui="{ overlay: 'bg-gray-900/50 backdrop-blur-[2px]' }">
        <UButton label="Open" color="neutral" variant="subtle" />

        <template #body>
            <Placeholder class="h-48" />
        </template>
    </UModal>
</template>

<style lang="css" scoped></style>
