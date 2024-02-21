<template>
  <el-dialog class="pop" v-model="show" :title="title" width="500" draggable :fullscreen="false" :modal="false" :close-on-click-modal="false">
    <slot></slot>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    default: "弹出框",
  },
});
const show = ref(false);
const open = () => {
  show.value = true;
};
const close = () => {
  show.value = false;
};
defineExpose({
  open,
  close,
});
</script>

<style lang="scss">
.el-dialog {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0;
  border: 2px solid aqua;
  .el-dialog__header {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    .el-dialog__title {
      display: inline-block;
      margin-top: 8px;
      margin-left: 10px;
      color: white;
    }
  }
  .el-dialog__body {
    color: white;
    padding: 5px;
  }
}
</style>
