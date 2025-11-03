<template>
  <div class="flex flex-col gap-1">
    <label
      v-if="$slots.label"
      class="font-medium text-gray-700"
    >
      <slot name="label" />
    </label>

    <input
      class="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >

    <p
      v-if="$slots.error"
      class="text-red-600 text-sm"
    >
      <slot name="error" />
    </p>
  </div>
</template>

