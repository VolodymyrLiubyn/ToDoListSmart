<script lang="ts" setup>

const props = defineProps<{
  text?: string;
  disabled?: boolean;
  icon?: "left" | "right";
  negative?: boolean;
  to?: string;
  href?: string;
}>();
</script>

<template>
  <RouterLink
    v-if="props.to"
    :to="props.to"
    class="flex items-center gap-2 px-4 py-2 rounded-lg transition"
    :class="props.negative ? 'bg-red-600 hover:bg-red-700 text-white'
      : 'bg-blue-600 hover:bg-blue-700 text-white'"
  >
    <slot
      v-if="props.icon !== 'right'"
      name="icon-left"
    />
    <template v-if="props.negative">
      <slot name="negative">
        {{ props.text }}
      </slot>
    </template>
    <template v-else>
      <slot>{{ props.text }}</slot>
    </template>
    <slot
      v-if="props.icon === 'right'"
      name="icon-right"
    />
  </RouterLink>
  <button
    v-else
    class="flex items-center gap-2 px-4 py-2 rounded-lg transition"
    :class="props.negative ? 'bg-red-600 hover:bg-red-700 text-white'
      : 'bg-blue-600 hover:bg-blue-700 text-white'"
  >
    <slot
      v-if="props.icon !== 'right'"
      name="icon-left"
    />

    <template v-if="props.negative">
      <slot name="negative">
        {{ props.text }}
      </slot>
    </template>
    <template v-else>
      <slot>{{ props.text }}</slot>
    </template>
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
