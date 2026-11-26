<template>
    <UModal>
        <UButton :label="modal_name" color="neutral" variant="subtle" />

        <template #content>
            <slot></slot>
        </template>
    </UModal>
</template>


<script setup lang="ts">
defineProps({
    modal_name: String
})
</script>