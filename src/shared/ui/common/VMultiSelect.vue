<script setup lang="ts">
import { defineProps, ref } from "vue";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";

type TaggingProps = {
  modelValue: Array<any>;
  options: Array<any>;
  labelKey?: string;
  trackKey?: string;
  placeholder?: string;
  tagPlaceholder?: string;
  id: string;
};
const props = defineProps<TaggingProps>();

// реактивні значення
const value = ref(props.modelValue || []);
const options = ref(props.options || []);

// додавання тегу
function addTag(newTag: string) {
  const tag = {
    name: newTag,
    code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
  };

  options.value.push(tag);
  value.value.push(tag);
}
</script>

<template>
  <div>
    <label class="typo__label">Tagging</label>

    <Multiselect
      id="tagging"
      v-model="value"
      :options="options"
      :multiple="true"
      :taggable="true"
      :placeholder="props.placeholder"
      :tag-placeholder="props.tagPlaceholder"
      label="name"
      track-by="code"
      @tag="addTag"
    />
  </div>
</template>
