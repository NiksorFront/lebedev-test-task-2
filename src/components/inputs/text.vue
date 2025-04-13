<script setup lang="ts">
const { modelValue, label, placeholder, required } = defineProps([
  "modelValue",
  "label",
  "placeholder",
  "required",
]);
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="label-and-input">
    <label class="small-text">{{ label }}</label>
    <input
      type="text"
      class="small-text"
      :placeholder="placeholder"
      :required="required"
      :value="modelValue"
      @input="(e) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
    />
  </div>
</template>
