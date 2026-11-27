import { computed, ref, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { TableColumn } from '~/types/table'

type SearchOptions<Row> = {
  columns?: TableColumn<Row>[]
  searchKeys?: string[]
}

export function useTableData<Row extends object>(
  source: MaybeRefOrGetter<Row[]>,
  options: SearchOptions<Row> = {},
) {
  const search = ref('')
  const rows = computed(() => toValue(source) ?? [])
  const valueOf = (row: Row, key: string) => (row as Record<string, unknown>)[key]

  const filteredRows = computed(() => {
    const query = search.value.trim().toLowerCase()
    if (!query) return rows.value

    return rows.value.filter((row) => {
      const values = options.searchKeys?.map(key => valueOf(row, key))
        ?? options.columns?.map(column => column.value ? column.value(row) : valueOf(row, column.key))
        ?? Object.values(row)
      return values.filter(value => value != null).join(' ').toLowerCase().includes(query)
    })
  })

  return { search, filteredRows }
}
