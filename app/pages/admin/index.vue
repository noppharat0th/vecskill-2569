<script lang="ts" setup>
import { useApi } from '~/composables/useApi';

definePageMeta({
    layout: "dashboard"
})

const users = await useApi().get('/users')
console.log(users)
</script>

<template>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat repudiandae sequi dignissimos, rem beatae deleniti
    ducimus nulla. Sequi labore officiis maxime voluptatem maiores dolorem, repudiandae recusandae eaque deserunt
    consequatur molestias.
</template>

<style lang="css" scoped></style>
