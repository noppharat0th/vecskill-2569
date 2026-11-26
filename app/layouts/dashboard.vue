<script setup lang="ts">
import Sidebar from './sidebar.vue'
</script>

<template>
  <div class="flex min-h-screen w-full bg-[#f7f8fa]">
    <Sidebar />
    <div class="min-w-0 flex-1">
      <!-- <header class="flex h-11 items-center gap-2 border-b border-gray-100 bg-white px-5">
        <UIcon name="i-lucide-users-round" class="size-4 text-gray-500" />
        <span class="text-xs font-medium text-gray-600">User management</span>
      </header> -->
      <slot />
    </div>
  </div>
</template>
