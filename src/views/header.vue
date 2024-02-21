<template>
  <Box class="header" :size="size" :position="position" :test="'dsdsdfffff'">
    <h2>我是头部hhhh33hh</h2>
  </Box>
</template>

<script setup lang="ts">
import { ref } from "vue";

const size = ref({ width: "99%", height: "100px" });
const position = { top: 0, left: 0 };
</script>

<style scoped>
.header{
  text-align: center;
}
</style>
