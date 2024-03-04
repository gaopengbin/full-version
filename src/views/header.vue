<template>
  <div class="header">
    <span class="title">{{ title }}</span>
    <el-button-group class="btn-group" size="small">
      <el-button :type="btn.id == current ? 'primary' : 'explain'" v-for="btn in btns" @click="change(btn)">{{ btn.name }}</el-button>
    </el-button-group>
    <el-icon :size="20" color="black"><Setting /></el-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    default: "极端环境区域重点传染病病原体分析平台",
  },
});
const emit = defineEmits(["change"]);
const btns = ref([
  {
    name: "专题样本",
    id: "1",
  },
  {
    name: "SIR模型",
    id: "2",
  },
  {
    name: "遗传基因模型",
    id: "3",
  },
  {
    name: "随机森林模型",
    id: "4",
  },
  {
    name: "气溶胶模型",
    id: "5",
  },
  {
    name: "最大熵模型",
    id: "6",
  },
]);

const current = ref("1");

const change = (btn: { name: string; id: string }) => {
  console.log(btn);
  current.value = btn.id;
  emit("change", btn);
};
</script>

<style lang="scss" scoped>
.header {
  /* text-align: center; */
  // background-color: bisque;
  border-bottom: 1px solid #797d86;
  height: 100%;
  .title {
    display: inline-block;
    font-size: 24px;
    color: #000000;
    margin-left: 20px;
    margin-top: 12px;
  }
  .btn-group {
    // float: right;
    margin-right: 30px;
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .el-icon {
    position: absolute;
    right: 20px;
    top: 20px;
  }
}
</style>
