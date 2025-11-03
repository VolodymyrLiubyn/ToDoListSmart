<script setup lang="ts">


</script>

<template>
  <div class="flex flex-col items-center justify-center p-4">
    <div
      class="animate-spin rounded-full h-10 w-10
     border-4 border-blue-500 border-t-transparent mb-2"
    />

    <slot />
  </div>
</template>
