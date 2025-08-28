<script setup>
import { ref } from "vue";
import D1_bind from "../components/example/D1_bind.vue";
import D1_if from "../components/example/D1_if.vue";
import D1_show from "../components/example/D1_show.vue";
import D1_for from "../components/example/D1_for.vue";
import D1_viewon from "../components/example/D1_viewon.vue";
import D1_method from "../components/example/D1_method.vue";
import D2_model from "../components/example/D2_model.vue";
import D2_css from "../components/example/D2_css.vue";
import D2_computed from "../components/example/D2_computed.vue";
import D2_watchers from "../components/example/D2_watchers.vue";
import D2_radio from "../components/example/D2_radio.vue";
import { RouterView } from "vue-router";

const pages = {
  D1_bind,
  D1_if,
  D1_show,
  D1_for,
  D1_viewon,
  D1_method,
  D2_model,
  D2_css,
  D2_computed,
  D2_watchers,
  D2_radio,
};
const activeComp = ref("D1_bind");
</script>

<template>
  <div class="container">
    <div class="sidebar">
      <button @click="activeComp = 'D1_bind'">바인드</button>
      <button @click="activeComp = 'D1_if'">IF</button>
      <button @click="activeComp = 'D1_show'">Show</button>
      <button @click="activeComp = 'D1_for'">For</button>
      <button @click="activeComp = 'D1_viewon'">ViewOn</button>
      <button @click="activeComp = 'D1_method'">Method</button>
      <button @click="activeComp = 'D2_model'">Model</button>
      <button @click="activeComp = 'D2_css'">Css</button>
      <button @click="activeComp = 'D2_computed'">Computed</button>
      <button @click="activeComp = 'D2_watchers'">Watchers</button>
      <button @click="activeComp = 'D2_radio'">Radio</button>
    </div>

    <div id="comp_view">
      <KeepAlive>
        <component :is="pages[activeComp]"></component>
      </KeepAlive>
    </div>
  </div>
</template>

<style scoped>
/* 1. 컨테이너가 화면 전체 높이를 차지하도록 수정 */
.container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  min-height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
  /* align-items: flex-start; 를 제거하거나 stretch로 변경 */
  /* align-items: stretch; 가 기본값이므로 자식들이 세로로 꽉 참 */
}

/* 사이드바 스타일은 그대로 유지 */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* 버튼 스타일은 그대로 유지 */
button {
  width: 120px;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

button:hover {
  background-color: #e9ecef;
  border-color: #adb5bd;
}

/* 컴포넌트 뷰 스타일은 그대로 유지 */
#comp_view {
  width: 800px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
}
</style>