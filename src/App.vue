<script setup>
import { ref } from 'vue';
import D1_bind from './components/D1_bind.vue';
import D1_if from './components/D1_if.vue';
import D1_show from './components/D1_show.vue'
import D1_for from './components/D1_for.vue';
import D1_viewon from './components/D1_viewon.vue';
import D1_method from './components/D1_method.vue';

const pages = {D1_bind,D1_if,D1_show,D1_for,D1_viewon,D1_method}
const activeComp = ref("D1_bind")

</script>

<template>
  <button @click="activeComp = 'D1_bind'">바인드</button>
  <button @click="activeComp = 'D1_if'">IF</button>
  <button @click="activeComp = 'D1_show'">Show</button>
  <button @click="activeComp = 'D1_for'">For</button>
  <button @click="activeComp = 'D1_viewon'">ViewOn</button>
  <button @click="activeComp = 'D1_method'">Method</button>
  <div id="comp_view">
    <KeepAlive>
    <component :is="pages[activeComp]"></component>
    </KeepAlive>
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
  border-radius: 10px; /* 둥근 모서리 */
  background-color: #f8f9fa; /* 배경색 */
  color: #333; /* 글자색 */
  font-size: 14px; /* 글자 크기 */
  cursor: pointer; /* 마우스 커서 모양 변경 */
  transition: all 0.2s ease; /* 부드러운 전환 효과 */
}

button:hover {
  background-color: #e9ecef; /* 마우스를 올렸을 때 배경색 */
  border-color: #adb5bd;
}
</style>