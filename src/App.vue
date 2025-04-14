<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import type { FormSchema } from "./utils/types";
import FormGenerator from "./components/form-generator.vue";
import Loading from "./components/loading.vue";
import viewResults from "./components/view-results.vue";

const loading = ref(true);
const error = ref("");
const formRef = ref();
const formSchema = ref<FormSchema>({ fields: [] });
const formData = reactive({});
const btnError = ref(false);

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
const hundelSubmit = () => {
  if (formRef.value.isValid()) {
    viewResult.value = true;
  } else {
    btnError.value = true;
    setTimeout(() => (btnError.value = false), 3500);
  }
};
</script>

<template>
  <header>
    <h1 class="large-text">Автоформа</h1>
  </header>
  <main>
    <Loading v-if="loading" class="loading" />
    <p v-else-if="error" class="error-text">{{ error }}</p>
    <template v-else>
      <FormGenerator ref="formRef" :schema="formSchema" v-model="formData" />
      <button
        :class="['btn-send', { error: btnError }]"
        @click="hundelSubmit"
        :disabled="btnError"
      >
        {{ btnError ? "заполните все поля" : "отправить" }}
      </button>
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

.error {
  color: var(--error);
}
</style>
