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
    <h1 class="large-text">Автоформа</h1>
  </header>
  <main>
    <Loading v-if="loading" class="loading" />
    <p v-else-if="error" class="error-text">{{ error }}</p>
    <template v-else>
      <FormGenerator :schema="formSchema" v-model="formData" />
      <button class="btn-send" @click="() => console.log(formData.test)">
        отправить
      </button>
    </template>
  </main>
</template>

<style scoped>
header {
  width: 100vw;
  height: fit-content;
  text-align: center;
}
main {
  width: 100vw;
  height: fit-content;
  text-align: center;
  justify-content: center;
  margin-bottom: 30vh;
}

h1 {
  text-align: center;
  margin: 10vh 0 5vh;
}

.loading {
  margin: auto;
}

.btn-send {
  margin-top: 10vh;
}

/* button {
  margin: max(6vw - 50px, 0vh) auto 0;
}

button.error {
  color: var(--error);
} */
</style>
