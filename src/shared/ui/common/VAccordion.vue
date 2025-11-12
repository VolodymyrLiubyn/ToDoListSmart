<script setup lang="ts">
type AccordionProps = {
  modelValue?: boolean;
  title?: string;
};

const props = defineProps<AccordionProps>();
const emit = defineEmits(["update:modelValue"]);

</script>

<template>
  <div>
    <div
      class="cursor-pointer select-none bg-gray-100 p-3 rounded-md"
      @click="emit('update:modelValue', !props.modelValue)"
    >
      {{ props.title }}
    </div>
    <div
      v-if="props.modelValue"
      class="mt-2 p-3 border border-gray-200 rounded-md"
    >
      <slot />
    </div>
  </div>
</template>
