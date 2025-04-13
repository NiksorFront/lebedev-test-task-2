<script lang="ts"></script>

<template>
  <label class="small-text checkbox-label">
    <input type="checkbox" class="border-gradient styled-checkbox" />
    Согласен с условиями
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
