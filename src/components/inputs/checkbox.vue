<script setup lang="ts">
const { modelValue, label, required } = defineProps([
  "modelValue",
  "label",
  "required",
]);
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="small-text checkbox-label">
    <input
      type="checkbox"
      class="border-gradient styled-checkbox"
      :checked="modelValue"
      :required="required"
      @change="(e) => emit('update:modelValue', (e.target as HTMLInputElement).checked)"
    />
    {{ label }}
  </label>
</template>

<style scoped>
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.styled-checkbox {
  appearance: none;
  width: 24px;
  height: 24px;
  padding: 0;

  position: relative;
  cursor: pointer;
}

.styled-checkbox:checked::before {
  content: "•";
  color: white;
  position: absolute;
  font-size: 50px;
  left: 1px;
  top: -22px;
}
</style>
