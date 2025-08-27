<script setup>
import { ref } from 'vue';
import D1_bind from './components/D1_bind.vue';
import D1_if from './components/D1_if.vue';
import D1_show from './components/D1_show.vue'
import D1_for from './components/D1_for.vue';
import D1_viewon from './components/D1_viewon.vue';
import D1_method from './components/D1_method.vue';
import D2_model from './components/D2_model.vue';
import D2_css from './components/D2_css.vue';
import D2_computed from './components/D2_computed.vue';
import D2_watchers from './components/D2_watchers.vue';
import D2_radio from './components/D2_radio.vue';

const pages = {D1_bind,D1_if,D1_show,D1_for,D1_viewon,D1_method,D2_model,D2_css,D2_computed,D2_watchers,D2_radio}
const activeComp = ref("D2_radio")

</script>

<template>
  <div class="container">
    <div>
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
/* 버튼을 감싸는 컨테이너 역할을 할 div를 추가하면 좋습니다. */
.button-nav {
  margin-bottom: 20px;
  display: flex; /* 버튼들을 가로로 정렬 */
  gap: 8px; /* 버튼 사이의 간격 */
}

button {
  padding: 8px 16px; /* 버튼 내부 여백 */
  border: 1px solid #ccc; /* 테두리 */
  border-radius: 5px; /* 둥근 모서리 */
  background-color: #f8f9fa; /* 배경색 */
  color: #333; /* 글자색 */
  font-size: 20px; /* 글자 크기 */
  cursor: pointer; /* 마우스 커서 모양 변경 */
  transition: all 0.2s ease; /* 부드러운 전환 효과 */
  margin-right: 5px;
  margin-bottom: 20px;
}

button:hover {
  background-color: #e9ecef; /* 마우스를 올렸을 때 배경색 */
  border-color: #adb5bd;
}
/* ⭐️ 추가할 스타일 */
.container {
  display: flex;
  flex-direction: column; /* 자식 요소들을 세로로 정렬 */
  align-items: center;   /* 자식 요소들을 가로축 기준 중앙으로 정렬 */
}

#comp_view {
  /* 최소 너비를 지정해주면 보기 좋습니다. */
  margin-top: 20px; /* 버튼과의 간격 */
}

/* --- 기존 스타일 ... --- */
</style>