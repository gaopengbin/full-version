<template>
  <div class="common-layout">
    <el-container>
      <el-header><Header @change="changBtn"/></el-header>
      <el-container>
        <el-aside width="200px"><Side :current="currentId" /></el-aside>
        <el-main> <div id="cesium-viewer" ref="viewerDivRef"></div></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, provide, ref } from "vue";
import { TileMapServiceImageryProvider, Viewer, buildModuleUrl, Ion } from "cesium";
import { CESIUM_VIEWER } from "../symbol";
import Header from "./header.vue";
import Side from "./core/side.vue";

import "cesium/Build/CesiumUnminified/Widgets/widgets.css";

Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1OGU2Njk2YS02MzYwLTQwM2YtYTU2ZS1iZGU1YjYzZGMzYzQiLCJpZCI6NDQ0NDAsImlhdCI6MTY3Nzg2MDQyNH0.5HG0SGypQn3kABP4-b_q5X7An087tOOSJvvEFE4ERQs";
const viewerDivRef = ref<HTMLDivElement>();
let viewer: Viewer | null = null;
const sysBaseUrl = import.meta.env.BASE_URL;
const mode = import.meta.env.MODE;
const sourceCesiumBaseUrl = import.meta.env.VITE_CESIUM_BASE_URL;

// 在不同的 base 路径下（vite.config.ts 中的 base 配置
// 尤其是开发模式用的是拷贝来的 CesiumJS 库文件，最好拼接上 base 路径
// 生产模式使用 CDN 则不用拼接 base 路径
const cesiumBaseUrl = mode === "development" ? `${sysBaseUrl}${sourceCesiumBaseUrl}` : sourceCesiumBaseUrl;
window.CESIUM_BASE_URL = cesiumBaseUrl;

console.log(`模式: ${mode}, CESIUM_BASE_URL: ${cesiumBaseUrl}`);
const ready = ref(false);
onMounted(() => {
  viewer = new Viewer(viewerDivRef.value as HTMLElement, {
    timeline: false,
    animation: false,
    homeButton: false,
    baseLayerPicker: false,
    fullscreenButton: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    geocoder: false,
    imageryProvider: new TileMapServiceImageryProvider({
      // 对于 CESIUM_BASE_URL 下的静态资源，推荐用 buildModuleUrl 获取
      url: buildModuleUrl("Assets/Textures/NaturalEarthII"),
    }),
  });
  provide(CESIUM_VIEWER, viewer);
  ready.value = true;
  console.log(viewer);
});
const currentId = ref("1");
const changBtn = (btn: { name: string; id: string }) => {
  console.log(btn);
  currentId.value = btn.id;
};
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}
#cesium-viewer {
  width: 100%;
  // height: 100%;
  height: calc(100vh - 100px);
}
</style>
