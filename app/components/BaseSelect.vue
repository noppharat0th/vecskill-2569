<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const model = defineModel()
withDefaults(defineProps<{
  items: any[]
  placeholder?: string
  required?: boolean
  fit?: boolean
}>(), { fit: false })
</script>

<template>
  <USelect
    v-model="model"
    v-bind="$attrs"
    :items="items"
    :placeholder="placeholder"
    :required="required"
    :class="fit ? 'w-auto' : 'w-full'"
  />
</template>
