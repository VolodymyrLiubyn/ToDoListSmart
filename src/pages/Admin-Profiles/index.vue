<script setup lang="ts">

import { ref } from "vue";

import VMultiSelect from "@/shared/ui/common/VMultiSelect.vue";
import VTable from "@/shared/ui/common/VTable.vue";

const mockProfiles = [
  { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
  { id: 2, name: "Jane Smith", email: "janesmith@yahoo.com" },
  { id: 3, name: "Alice Johnson", email: "alice.johnson@mail.com" },
  { id: 4, name: "Bob Brown", email: "bob.brown@hotmail.com" },
  { id: 5, name: "Charlie Davis", email: "charlie.davis@gmail.com" },
  { id: 6, name: "Diana Evans", email: "diana.evans@outlook.com" },
  { id: 7, name: "Ethan Wilson", email: "ethan.wilson@gmail.com" },
  { id: 8, name: "Fiona Taylor", email: "fiona.taylor@mail.com" },
  { id: 9, name: "George Harris", email: "george.harris@yahoo.com" },
  { id: 10, name: "Hannah Clark", email: "hannah.clark@gmail.com" },
];
const options = [
  { id: 1, name: "Filter by name" },
  { id: 2, name: "Filter by email" },
  { id: 3, name: "Filter by increase" },
  { id: 4, name: "Filter by decrease" },
];
const selectedValues = ref<typeof options>([]);

</script>

<template>
  <div class="mb-6">
    <VMultiSelect
      id="tagging"
      v-model="selectedValues"
      :options="options"
      label-key="name"
      track-key="id"
      placeholder="Виберіть опції"
    />
  </div>

  <VTable
    :columns="[
      { label: 'ID', field: 'id' },
      { label: 'Name', field: 'name' },
      { label: 'Email', field: 'email' },
    ]"
    :data="mockProfiles"
  />
</template>

<style scoped>

</style>
