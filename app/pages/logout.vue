<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Logging out...</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  // Add actual logout logic here later
  setTimeout(() => {
    router.push('/')
  }, 1000)
})
</script>
