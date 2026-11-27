<script setup lang="ts" generic="T extends object">
import type { TableColumn } from '~/types/table'

const props = defineProps<{
  rows: T[]
  columns: TableColumn<T>[]
  loading?: boolean
  emptyText?: string
}>()

function cellValue(row: T, column: TableColumn<T>) {
  if (column.value) return column.value(row)
  return (row as Record<string, unknown>)[column.key]
}

function rowKey(row: T, index: number) {
  const id = (row as Record<string, unknown>).id
  return typeof id === 'string' || typeof id === 'number' ? id : index
}
</script>

<template>
  <div class="w-full overflow-x-auto border border-gray-200 bg-white">
    <table class="w-full border-collapse text-left text-sm">
      <thead class="bg-gray-50/80">
        <tr class="border-b border-gray-100">
          <th
            v-for="column in props.columns"
            :key="column.key"
            class="h-10 px-4 text-left text-[11px] font-medium text-gray-500"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="props.loading">
          <td :colspan="props.columns.length" class="px-4 py-8 text-center text-sm text-gray-500">
            Loading…
          </td>
        </tr>

        <tr v-else-if="props.rows.length === 0">
          <td :colspan="props.columns.length" class="px-4 py-8 text-center text-sm text-gray-500">
            {{ props.emptyText || 'No data found' }}
          </td>
        </tr>

        <tr
          v-for="(row, index) in props.loading || props.rows.length === 0 ? [] : props.rows"
          :key="rowKey(row, index)"
          class="border-b border-gray-100 last:border-0 hover:bg-gray-50/60"
        >
          <td
            v-for="column in props.columns"
            :key="column.key"
            class="px-4 py-3 align-middle text-gray-700"
          >
            <slot :name="column.key" :row="row" :value="cellValue(row, column)">
              {{ cellValue(row, column) ?? '—' }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
