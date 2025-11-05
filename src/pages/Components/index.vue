<script setup lang="ts">
import { ref } from "vue";

import VButton from "@/shared/ui/common/VButton.vue";
import VCard from "@/shared/ui/common/VCard.vue";
import VInput from "@/shared/ui/common/VInput.vue";
import VLoader from "@/shared/ui/common/VLoader.vue";

const username = ref("");
</script>

<template>
  <div class="flex flex-col gap-8 p-4 max-w-md mx-auto">
    <VInput
      v-model="username"
      placeholder="Enter username"
    >
      <template #label>
        Username
      </template>
      <template
        v-if="!username"
        #error
      >
        Field is required
      </template>
    </VInput>

    <VLoader>
      <template>Loading profile...</template>
    </VLoader>

    <VCard>
      <template #header>
        Profile
      </template>

      <p>Name: Petro</p>
      <p>Age: 20</p>

      <template #footer>
        <VButton icon="right">
          <template #icon-right>
            🛠
          </template>
          Edit
        </VButton>
      </template>
    </VCard>

    <VButton icon="left">
      <template #icon-left>
        ✅
      </template>
      Add Task
    </VButton>
  </div>
</template>
