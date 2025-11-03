<script lang="ts" setup>

</script>

<template>
  <button
    class="flex items-center gap-2 px-4 py-2
     rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
  >
    <slot name="icon" />

    <slot>{{ props.text }}</slot>
  </button>
</template>


<style scoped>
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
