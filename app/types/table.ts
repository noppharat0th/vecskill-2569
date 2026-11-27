export type TableColumn<Row> = {
  key: string
  label: string
  value?: (row: Row) => string | number | boolean | null | undefined
}
