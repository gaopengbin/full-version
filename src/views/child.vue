<template>
  <Box :size="size" :position="position"> <h2>123</h2> </Box>
</template>

<script setup lang="ts">
import Box from "@/components/box.vue";
import { inject } from "vue";
import type { Viewer } from "cesium";
import { CESIUM_VIEWER } from "@/symbol";

const size = { width: "300px", height: "300px" };
const position = { top: '110px', left: 0 };

const viewer = inject<Viewer>(CESIUM_VIEWER);
console.log(viewer);
</script>

<style scoped></style>
