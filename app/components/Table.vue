<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  emptyText: {
    type: String,
    default: 'No data found',
  },
})
</script>

<template>
  <div class="w-full overflow-x-auto border border-gray-200 bg-white">
    <UTable
      :data="props.data"
      :columns="props.columns"
      :loading="props.loading"
      class="min-w-full"
    >
      <template #empty>
        <div class="py-8 text-center text-sm text-gray-500">
          {{ props.emptyText }}
        </div>
      </template>

      <template #role-cell="scope">
        <slot name="role-cell" v-bind="scope" />
      </template>

      <template #loading>
        <div class="py-8 text-center text-sm text-gray-500">
          Loading
        </div>
      </template>
    </UTable>
  </div>
</template>

