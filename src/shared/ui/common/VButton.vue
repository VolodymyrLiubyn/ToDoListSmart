<template>
  <button
    class="flex items-center gap-2 px-4 py-2
     rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
    @click="$emit('click')"
  >
    <slot name="icon" />

    <slot>Button</slot>
  </button>
</template>


<style scoped>
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
