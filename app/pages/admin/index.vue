<script lang="ts" setup>
import { useApi } from '~/composables/useApi';

definePageMeta({
    layout: "dashboard"
})

// Example API fetch or state
// const users = await useApi().get('/users')
</script>

<template>
    <div class="p-4 space-y-6 max-w-lg bg-white rounded-[15px] shadow-sm">
        <!-- Stat Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
</template>

<style lang="css" scoped></style>
