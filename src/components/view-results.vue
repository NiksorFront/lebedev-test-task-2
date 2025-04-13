<script setup lang="ts">
const { results } = defineProps<{
  results: Record<string, any>;
}>();
</script>

<template>
  <p v-for="[key, value] in Object.entries(results)" :key="key">
    {{ key }}: {{ value }}
  </p>
</template>
