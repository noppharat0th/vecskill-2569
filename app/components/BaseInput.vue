<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const model = defineModel()
withDefaults(defineProps<{
  type?: string
  placeholder?: string
  autocomplete?: string
  icon?: string
  required?: boolean
  width?: 'full' | 'search'
}>(), { width: 'full' })
</script>

<template>
  <UInput
    v-model="model"
    v-bind="$attrs"
    :type="type"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
    :icon="icon"
    :required="required"
    :class="width === 'search' ? 'w-full sm:max-w-xs' : 'w-full'"
  />
</template>
