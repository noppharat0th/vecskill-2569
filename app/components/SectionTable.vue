<script setup lang="ts" generic="T extends Record<string, any>">
import { h, resolveComponent } from 'vue'

// ─── Public types ─────────────────────────────────────────────────────────────
export type ColDef<T> = {
    key: keyof T & string
    label: string
    type?: 'text' | 'date' | 'status' | 'amount'
    sortable?: boolean
    class?: string
}

export type RowAction<T> = {
    label: string
    icon?: string
    color?: 'primary' | 'neutral' | 'error' | 'warning' | 'success'
    hidden?: (row: T) => boolean
    onClick: (row: T) => void
}

// ─── Props ────────────────────────────────────────────────────────────────────
const props = withDefaults(defineProps<{
    data: T[]
    columns: ColDef<T>[]
    title?: string
    subtitle?: string
    searchable?: boolean
    paginated?: boolean
    pageSize?: number
    selectable?: boolean
    exportable?: boolean
    exportFilename?: string
    actions?: RowAction<T>[]
    emptyText?: string
    loading?: boolean
}>(), {
    pageSize: 10,
    exportFilename: 'export',
    emptyText: 'No results found',
    loading: false,
})

const emit = defineEmits<{ 'row-click': [row: T] }>()

// ─── Search & Pagination ──────────────────────────────────────────────────────
const q = ref('')
const page = ref(1)
watch(q, () => (page.value = 1))

const filtered = computed(() => {
    if (!q.value.trim()) return props.data
    const lq = q.value.toLowerCase()
    return props.data.filter(r =>
        Object.values(r).some(v => String(v).toLowerCase().includes(lq))
    )
})

const paged = computed(() =>
    props.paginated
        ? filtered.value.slice((page.value - 1) * props.pageSize, page.value * props.pageSize)
        : filtered.value
)

// ─── Formatting ───────────────────────────────────────────────────────────────
const fmt = (val: unknown, type?: string): string => {
    if (val == null) return '—'
    if (type === 'date') return new Date(val as string).toLocaleDateString('th-TH', { day: '2-digit', month: 'short', year: 'numeric' })
    if (type === 'amount') return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(val))
    return String(val)
}

const STATUS_COLOR: Record<string, 'success' | 'error' | 'warning' | 'neutral'> = {
    paid: 'success', success: 'success', active: 'success',
    failed: 'error', rejected: 'error',
    refunded: 'warning', pending: 'warning',
    inactive: 'neutral', cancelled: 'neutral',
}
const badgeColor = (v: unknown) => STATUS_COLOR[String(v).toLowerCase()] ?? 'neutral'

// ─── UTable columns with cell render functions ────────────────────────────────
// Dynamic template slots do NOT work inside UTable — use cell() render functions instead
const uColumns = computed(() => [
    ...props.columns.map(c => ({
        id: c.key,
        key: c.key,
        label: c.label,
        sortable: c.sortable ?? false,
        class: c.class,
        cell: ({ row }: any) => {
            const val = (row.original ?? row)[c.key]
            if (c.type === 'status') {
                return h(resolveComponent('UBadge'), {
                    color: badgeColor(val), variant: 'soft', size: 'sm', class: 'capitalize',
                }, () => String(val ?? ''))
            }
            return h('span', { class: 'text-sm text-gray-700' }, fmt(val, c.type))
        },
    })),
    ...(props.actions?.length ? [{
        id: 'actions',
        key: 'actions',
        label: '',
        class: 'text-right',
        cell: ({ row }: any) => {
            const rowData: T = row.original ?? row
            return h('div', { class: 'flex justify-end gap-1' },
                (props.actions ?? [])
                    .filter(a => !a.hidden?.(rowData))
                    .map(a => h(resolveComponent('UButton'), {
                        size: 'xs', icon: a.icon, color: a.color ?? 'neutral', variant: 'ghost', label: a.label,
                        onClick: (e: Event) => { e.stopPropagation(); a.onClick(rowData) },
                    }))
            )
        },
    }] : []),
])

// ─── Export CSV ───────────────────────────────────────────────────────────────
const exportCSV = () => {
    const csv = [
        props.columns.map(c => c.label).join(','),
        ...filtered.value.map(r => props.columns.map(c => `"${String(r[c.key] ?? '')}"`).join(','))
    ].join('\n')
    const a = Object.assign(document.createElement('a'), {
        href: URL.createObjectURL(new Blob([csv], { type: 'text/csv' })),
        download: `${props.exportFilename}.csv`
    })
    a.click()
}

// ─── Selection (only active when selectable=true) ───────────────────────────
const selected = ref<T[]>([])
const selectionBinding = computed(() => props.selectable ? { 'onUpdate:selected': (v: T[]) => { selected.value = v } } : {})
</script>

<template>
    <UCard :ui="{ body: 'p-0 sm:p-0', header: 'px-4 py-3 sm:px-5' }">

        <!-- Header -->
        <template #header>
            <div class="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <p v-if="title" class="text-sm font-semibold text-highlighted">{{ title }}</p>
                    <p v-if="subtitle" class="text-xs text-muted mt-0.5">{{ subtitle }}</p>
                </div>
                <div class="flex items-center gap-2 ml-auto">
                    <Transition name="pop">
                        <UBadge v-if="selectable && selected.length" color="primary" variant="soft">
                            {{ selected.length }} selected
                        </UBadge>
                    </Transition>
                    <UInput
                        v-if="searchable"
                        v-model="q"
                        icon="i-lucide-search"
                        placeholder="Search…"
                        size="sm"
                        class="w-44"
                    />
                    <UButton
                        v-if="exportable"
                        size="sm"
                        color="neutral"
                        variant="outline"
                        icon="i-lucide-download"
                        label="Export"
                        @click="exportCSV"
                    />
                </div>
            </div>
        </template>

        <!-- Table (cell rendering handled by cell() functions in uColumns) -->
        <UTable
            :model-value="selectable ? selected : undefined"
            :data="paged"
            :columns="uColumns"
            :loading="loading"
            :loading-state="{ icon: 'i-lucide-loader-2', label: 'Loading...' }"
            :empty-state="{ icon: 'i-lucide-inbox', label: emptyText }"
            class="w-full"
            @update:model-value="selectable && (selected = $event)"
        />

        <!-- Footer Pagination -->
        <template v-if="paginated && filtered.length > pageSize" #footer>
            <div class="flex items-center justify-between px-1">
                <p class="text-xs text-muted">
                    {{ (page - 1) * pageSize + 1 }}–{{ Math.min(page * pageSize, filtered.length) }}
                    <span class="text-dimmed">of {{ filtered.length }}</span>
                </p>
                <UPagination
                    v-model:page="page"
                    :total="filtered.length"
                    :items-per-page="pageSize"
                    size="xs"
                />
            </div>
        </template>
    </UCard>
</template>

<style scoped>
.pop-enter-active, .pop-leave-active { transition: all 0.15s ease; }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: scale(0.9); }
</style>
