<template>
    <input type="text" class="border" placeholder="title" v-model="form.title">
    <input type="date" class="border" v-model="form.start_date">
    <input type="date" class="border" v-model="form.end_date">
    <button @click="createEvaluation()">submit</button>

    {{ evaluations?.data }}
</template>

<script setup lang="ts">
import { useEvaluation } from '~/composables/service/evaluations';

onMounted(() => fetchEvaluation())

const { form, evaluations, fetchEvaluation, createEvaluation, updateEvaluation, deleteEvaluation } = useEvaluation()
</script>