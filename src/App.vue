<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import type { FormSchema } from "./utils/types";
import FormGenerator from "./components/form-generator.vue";
import Loading from "./components/loading.vue";
import viewResults from "./components/view-results.vue";

const loading = ref(true);
const error = ref("");
const formSchema = ref<FormSchema>({ fields: [] });
const formData = reactive({});

import { getData } from "./utils/api";

onMounted(() => {
  const data = getData<string>();
  data
    .then((response) => (formSchema.value = JSON.parse(response)))
    .catch((err) => (error.value = err)) //При использования не fake api заменить на err.message
    .finally(() => (loading.value = false));
});

//будь api, я бы отправлял formData на него.
//Ну а так просто сделал вывод ниже button
const viewResult = ref(false);
const hundelSubmit = () => (viewResult.value = true);
</script>

<template>
  <header>
    <h1 class="large-text">Автоформа</h1>
  </header>
  <main>
    <Loading v-if="loading" class="loading" />
    <p v-else-if="error" class="error-text">{{ error }}</p>
    <template v-else>
      <FormGenerator v-model="formData" :schema="formSchema" />
      <button class="btn-send" @click="hundelSubmit">отправить</button>
      <viewResults v-if="viewResult" :results="formData" />
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
