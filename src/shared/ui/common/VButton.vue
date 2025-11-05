<script lang="ts" setup>

const props = defineProps<{
  text?: string;
  disabled?: boolean;
  icon?: "left" | "right";
  negative?: boolean;
}>();
</script>

<template>
  <button
    class="flex items-center gap-2 px-4 py-2
     rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
  >
    <slot
      v-if="props.icon !== 'right'"
      name="icon-left"
    />

    <slot>{{ props.text }}</slot>

    <slot
      v-if="props.icon === 'right'"
      name="icon-right"
    />


  </button>
</template>


<style scoped>
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
