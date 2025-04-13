<script lang="ts" setup></script>

<template>
  <div class="loader animBase"></div>
</template>

<style scoped>
.animBase {
  animation: spin 3s infinite;
}

.loader {
  width: calc(5vh + 3vw);
  height: calc(5vh + 3vw);
  background: var(--gradient-img);
  z-index: 1;
}

.loader::before {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: var(--gradient-img);
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
}

@keyframes spin {
  0% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(-360deg);
    border-radius: 50%;
  }
  100% {
    transform: rotate(-45deg);
  }
}
</style>
