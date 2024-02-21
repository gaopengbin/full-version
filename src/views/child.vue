<template>
  <Box :size="size" :position="position">
    <button @click="openPop">test</button>
  </Box>
  <Pop :title="'test'" ref="myPop">
    <h2>我是弹出框</h2>
  </Pop>
</template>

<script setup lang="ts">
import Box from "@/components/box.vue";
import Pop from "@/components/pop.vue";
import { inject, ref } from "vue";
import type { Viewer } from "cesium";
import { CESIUM_VIEWER } from "@/symbol";

const size = { width: "300px", height: "300px" };
const position = { top: "110px", left: 0 };

const viewer = inject<Viewer>(CESIUM_VIEWER);
console.log(viewer);

const myPop = ref<InstanceType<typeof Pop> | null>(null);
const openPop = () => {
  myPop.value?.open();
};
</script>

<style scoped></style>
