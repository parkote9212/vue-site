<template>
  <div id="wrap">
    <A1Header />
    <main id="main">
      <A1Slider />
      <A1Contents />
    </main>
    <A1Footer />
    <A1Popup/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import A1Header from '../components/weba1/A1Header.vue';
import A1Slider from '../components/weba1/A1Slider.vue';
import A1Contents from '../components/weba1/A1Contents.vue';
import A1Footer from '../components/weba1/A1Footer.vue';
import A1Popup from '../components/weba1/A1Popup.vue';

// 팝업 표시 상태를 관리하는 ref
</script>

<style>
/* 전역 스타일 및 기본 레이아웃 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#wrap {
  width: 100%;
}
#main {
  width: 1200px;
  margin: 0;
}
</style>