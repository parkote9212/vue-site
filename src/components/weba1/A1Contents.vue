<template>
  <div class="contents-wrapper">
    <section class="content-item tabs-section">
      <A1C1C2Tabs />
    </section>

    <section class="content-item banner-section">
      <a href="#">
        <p>배너 영역</p>
        <span>(Contents 폴더 제공 파일 활용)</span>
      </a>
    </section>

    <section class="content-item shortcuts-section">
       <a href="#">
        <p>바로가기 영역</p>
        <span>(Contents 폴더 제공 파일 활용)</span>
      </a>
    </section>
  </div>
</template>

<script setup>
import A1C1C2Tabs from './A1C1C2Tabs.vue'; // 탭 컴포넌트 import
</script>

<style scoped>
.contents-wrapper {
  display: flex; /* 자식 요소들을 가로로 배치하기 위해 Flexbox 사용 */
  gap: 20px; /* 각 섹션 사이의 간격 */
  width: 1200px;
  margin: 0 auto;
}

/* ▼ 수정된 부분 ▼ */
.content-item {
  /* flex: [grow] [shrink] [basis]; */
  /* grow: 남는 공간을 얼마나 차지할지 (1) */
  /* shrink: 공간이 부족할 때 얼마나 줄어들지 (1) */
  /* basis: 기본 너비 (0으로 설정하면 grow 비율에 따라 너비가 결정됨) */
  flex: 1 1 0;
}

.tabs-section {
  /* 다른 아이템보다 2배 더 많은 공간을 차지하도록 설정 */
  flex: 2 1 0; 
}
/* ▲ 수정된 부분 ▲ */

.banner-section a, .shortcuts-section a {
  display: block;
  height: 200px; /* 와이어프레임의 C영역 높이 */
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  text-decoration: none;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>