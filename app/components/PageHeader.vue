<script setup>
defineProps({
  section: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
})
</script>

<template>
  <header class="flex flex-wrap items-center justify-between gap-4">
    <div>
      <div class="mb-1 flex items-center gap-2 text-[11px] text-gray-400">
        <span>{{ section }}</span>
        <UIcon name="i-lucide-chevron-right" class="size-3" />
        <span class="text-gray-600">{{ title }}</span>
      </div>
      <h1 class="text-xl font-semibold tracking-tight text-gray-900">{{ title }}</h1>
      <p class="mt-0.5 text-xs text-gray-500">{{ description }}</p>
    </div>
    <div class="flex items-center gap-2">
      <slot name="actions" />
    </div>
  </header>
</template>