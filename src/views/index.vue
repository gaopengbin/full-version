<template>
  <Header />
  <Child />
  <Box :size="{ width: '300px', height: '300px' }" :position="{ top: '420px', left: 0 }" />
  <Box :size="{ width: '300px', height: '300px' }" :position="{ top: '110px', right: 0 }" />
  <Box :size="{ width: '300px', height: '300px' }" :position="{ top: '420px', right: 0 }" />
  <Box :size="{ width: '300px', height: '200px' }" :position="{ top: '730px', left: 0 }" />
  <Box :size="{ width: '300px', height: '200px' }" :position="{ top: '730px', right: 0 }" />
</template>

<script setup lang="ts">
import Header from "./header.vue";
import Child from "./child.vue";
</script>

<style scoped></style>
