<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    title?: string
    value?: string | number
    icon?: string
    trend?: string | number
    trendDirection?: 'up' | 'down' | 'auto'
    period?: string
    variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Title',
    value: '0',
    icon: 'i-lucide-wallet',
    trend: '',
    trendDirection: 'auto',
    period: 'This month',
    variant: 'secondary'
})

const isDown = computed(() => {
    if (props.trendDirection === 'down') return true
    if (props.trendDirection === 'up') return false
    const trendStr = String(props.trend)
    return trendStr.startsWith('-') || trendStr.includes('↓')
})

const formattedTrend = computed(() => {
    if (!props.trend) return ''
    const str = String(props.trend).replace(/^[↑↓+-]\s*/, '')
    const symbol = isDown.value ? '↓' : '↑'
    return `${symbol} ${str}`
})
</script>

<template>
    <div
        class="relative flex flex-col justify-between p-5 rounded-2xl bg-white border border-gray-100 transition-all duration-200 hover:shadow-sm"
    >
        <!-- Title & Icon -->
        <div class="flex items-center justify-between gap-2 mb-4">
            <span class="text-sm font-medium text-gray-500 leading-none">
                {{ title }}
            </span>
            <div
                class="size-9 rounded-xl flex items-center justify-center shrink-0"
                :class="variant === 'primary'
                    ? 'bg-blue-50 text-blue-500'
                    : 'bg-gray-50 text-gray-500'"
            >
                <UIcon :name="icon" class="size-[18px]" />
            </div>
        </div>

        <!-- Value -->
        <h3 class="text-2xl font-bold tracking-tight text-gray-900 leading-none">
            {{ value }}
        </h3>

        <!-- Bottom Row: Trend & Period -->
        <div class="flex items-center gap-2 mt-3 text-xs">
            <span
                v-if="trend"
                class="inline-flex items-center font-semibold"
                :class="isDown ? 'text-rose-500' : 'text-emerald-500'"
            >
                {{ formattedTrend }}
            </span>
            <span class="text-gray-400">
                {{ period }}
            </span>
        </div>
    </div>
</template>