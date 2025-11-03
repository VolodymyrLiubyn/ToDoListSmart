<template>
  <div class="bg-white rounded-2xl shadow-md p-4">
    <div
      v-if="$slots.header || props.title"
      class="mb-2 border-b pb-2 font-semibold"
    >
      <slot name="header">
        {{ props.title }}
        <slot />
      </slot>
    </div>

    <div class="text-gray-800">
      <slot />
    </div>

    <div
      v-if="$slots.footer"
      class="mt-3 pt-2 border-t text-sm text-gray-500"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

