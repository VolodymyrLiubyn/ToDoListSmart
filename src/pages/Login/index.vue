<script setup lang="ts">

import { useValidation } from "@/shared/composables/useValidation";
import VButton from "@/shared/ui/common/VButton.vue";
import VCard from "@/shared/ui/common/VCard.vue";
import VInput from "@/shared/ui/common/VInput.vue";
import VLoader from "@/shared/ui/common/VLoader.vue";

const {
  email,
  password,
  emailTouched,
  passwordTouched,
  submitted,
  validationEmail,
  validationPassword,
  loading,
  handleSubmit,
} = useValidation();

const onSubmit = () => {
  handleSubmit(() => {
    alert("✅ Form submitted!");
  }, 2000);
};

</script>

<template>
  <div class="flex flex-col gap-8 p-4 max-w-md mx-auto">
    <VLoader v-if="loading" />

    <VCard>
      <template #header>
        <VInput
          v-model="email"
          placeholder="Enter Email"
          @blur="emailTouched = true"
        >
          <template #label>
            Email
          </template>
          <template
            v-if="(emailTouched || submitted) && validationEmail.error"

            #error
          >
            {{ validationEmail.message }}
          </template>
        </VInput>
        <VInput
          v-model="password"
          placeholder="Enter password"
          type="password"
          @blur="passwordTouched = true"
        >
          <template #label>
            Password
          </template>
          <template
            v-if="(passwordTouched || submitted) && validationPassword.error"
            #error
          >
            {{ validationPassword.message }}
          </template>
        </VInput>
      </template>

      <template #footer>
        <div class="flex items-center justify-end gap-4">
          <VButton
            icon="left"
            to="/register"
          >
            <template #icon-left>
              <div class="flex gap-2 items-center">
                <vue-feather type="user-plus" />
              </div>
            </template>
            <template #default>
              Register
            </template>
          </VButton>
          <VButton
            icon="right"
            :disabled="loading"
            @click="onSubmit"
          >
            <template #icon-right>
              <vue-feather type="check" />
            </template>
            Submit
          </VButton>
        </div>
      </template>
    </VCard>
  </div>
</template>
