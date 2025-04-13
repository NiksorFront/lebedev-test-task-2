<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { FormSchema, FormField } from "./utils/types";
import FormGenerator from "./components/form-generator.vue";
import Loading from "./components/Loading.vue";
const loading = ref(true);
const error = ref("");
const formSchema = ref<FormSchema>({ fields: [] });
const formData = ref(); //надо типизировать

import { getData } from "./utils/api";

onMounted(() => {
  const data = getData<string>();
  data
    .then((response) => (formSchema.value = JSON.parse(response)))
    .catch((err) => (error.value = err)) //При использования не fake api заменить на err.message
    .finally(() => (loading.value = false));
});
</script>

<template>
  <header>
    <h1>Автоформа</h1>
  </header>
  <main>
    <Loading v-if="loading" />
    <div v-else>
      <p v-if="error">{{ error }}</p>
      <FormGenerator v-else :schema="formSchema" v-model="formData" />
    </div>

    <button @click="() => console.log(formData.test)">отправить</button>
  </main>
</template>

<style scoped></style>
