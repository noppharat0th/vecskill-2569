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

// Auto detect direction if auto is set
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
    <div class="relative flex flex-col justify-between p-5 rounded-[22px] transition-all duration-200" :class="[
        variant === 'primary'
            ? 'bg-gradient-to-br from-[#ff6b35] via-[#f95726] to-[#e64a19] text-white shadow-md shadow-orange-500/20'
            : 'bg-[#f6f7f9] text-gray-900 border border-gray-100/80 hover:bg-[#f0f2f5]'
    ]">
        <!-- Top Row: Title & Icon -->
        <div class="flex items-center justify-between gap-2">
            <span class="text-sm font-medium leading-none"
                :class="variant === 'primary' ? 'text-white/90' : 'text-gray-500'">
                {{ title }}
            </span>
            <div class="size-8 rounded-full flex items-center justify-center shrink-0 transition-colors"
                :class="variant === 'primary' ? 'bg-white/20 text-white' : 'bg-gray-200/70 text-gray-600'">
                <UIcon :name="icon" class="size-4" />
            </div>
        </div>

        <!-- Middle: Value -->
        <div class="my-4">
            <h3 class="text-3xl font-bold tracking-tight leading-none"
                :class="variant === 'primary' ? 'text-white' : 'text-gray-900'">
                {{ value }}
            </h3>
        </div>

        <!-- Bottom Row: Trend & Period -->
        <div class="flex items-center gap-2 text-xs">
            <span v-if="trend" class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold leading-tight"
                :class="[
                    variant === 'primary'
                        ? 'bg-white/20 text-white backdrop-blur-sm'
                        : isDown
                            ? 'bg-rose-100/80 text-rose-500'
                            : 'bg-emerald-100/80 text-emerald-600'
                ]">
                {{ formattedTrend }}
            </span>
            <span :class="variant === 'primary' ? 'text-white/80' : 'text-gray-400'">
                {{ period }}
            </span>
        </div>
    </div>
</template>