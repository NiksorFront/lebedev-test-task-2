<script setup lang="ts">
import { ref } from "vue";
const { modelValue, label, placeholder, required } = defineProps([
  "modelValue",
  "label",
  "placeholder",
  "required",
]);
const emit = defineEmits(["update:modelValue"]);

const showError = ref(false);
const errorText = ref("");
const input = ref<HTMLInputElement | null>(null);

/**
 * Проверяем, является ли символ недопустимым:
 * - кириллица [\u0400-\u04FF]
 * - пробел / таб
 * - !, #, $, €, £, ¥, ₽, %, &, ~, =, запятая, ', "
 */
function isDisallowedChar(char: string): boolean {
  const disallowedRegex = /[\s\t!#\$/€£¥₽%&~=,'"\u0400-\u04FF]/;
  return disallowedRegex.test(char);
}

function onInput(e: Event) {
  let value = (e.target as HTMLInputElement).value;

  showError.value = false;
  errorText.value = "";

  let filteredValue = "";

  for (const char of value) {
    if (isDisallowedChar(char)) {
      showError.value = true;
      errorText.value = `'${char}' — недопустимо`;
    } else {
      filteredValue += char;
    }
  }

  emit("update:modelValue", filteredValue);
}

function onFocus() {
  if (input.value) {
    input.value.setSelectionRange(modelValue.length, modelValue.length);
  }
}
</script>

<template>
  <div class="label-and-input">
    <label class="small-text">{{ label }}</label>
    <input
      class="small-text"
      ref="input"
      :placeholder="placeholder"
      :required="required"
      :value="modelValue"
      @input="onInput"
      @focus="onFocus"
    />
    <p v-if="showError" class="error-window error-text">
      {{ errorText }}
    </p>
  </div>
</template>

<style>
.error-window {
  padding: 2px 4px;
  border-radius: 3px;
  white-space: nowrap;
  text-align: left;
  margin: 0;
}
</style>
