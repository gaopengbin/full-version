<template>
  <div class="box-panel" :style="style">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { PropType, watchEffect } from "vue";

let props = defineProps({
  size: {
    type: Object as PropType<{ width: string; height: string }>,
    default: { width: "auto", height: "auto" },
    required: false,
  },
  position: {
    type: Object as PropType<{ top?: number | string; left?: number | string; bottom?: number | string; right?: number | string }>,
    default: { top: "auto", left: "auto", bottom: "auto", right: "auto" },
    required: false,
  },
});
// console.log(props);
// watchEffect(() => {
//   console.log(props.size.width);
//   console.log(props.position);
// });
const style = {
  width: props.size.width,
  height: props.size.height,
  top: props.position.top,
  left: props.position.left,
  right: props.position.right,
  bottom: props.position.bottom,
};
</script>

<style scoped>
.box-panel {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 100;
  border: 2px solid aqua;
  margin: 5px;
  color: aqua;
}
</style>
