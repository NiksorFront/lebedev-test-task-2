<script setup lang="ts">
import { ref, watchEffect, reactive } from "vue";
import type { FormSchema } from "../utils/types";
import Text from "./inputs/text.vue";
import Email from "./inputs/email.vue";
import Password from "./inputs/password.vue";
import Select from "./inputs/select.vue";
import Checkbox from "./inputs/checkbox.vue";

const { schema } = defineProps<{
  schema: FormSchema;
}>();
const model = defineModel<any>();

watchEffect(() => {
  schema.fields.length &&
    schema.fields.forEach((field) => {
      if (!(field.model in model)) {
        //@ts-ignore
        model[field.model] = field.type === "checkbox" ? false : "";
      }
    });
});

const componentMap: Record<string, any> = {
  text: Text,
  email: Email,
  password: Password,
  select: Select,
  checkbox: Checkbox,
};
</script>

<template>
  <form class="form">
    <component
      v-for="(field, index) in schema.fields"
      :key="index"
      :is="componentMap[field.type]"
      v-model="model[field.model]"
      v-bind="field"
    />
  </form>
</template>

<style scoped>
.form {
  width: clamp(100px, 70%, 400px);
  margin: auto;
  padding: 2.5vh 14vw;

  display: flex;
  flex-direction: column;
  gap: 30px;
}

@media (width > 640px) {
  form {
    gap: 25px;
    padding-top: 0;
  }
}
</style>
