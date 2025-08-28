<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="app-container">
    <p>경로 : {{ $route.fullPath }}</p>
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/exam">W3예제</RouterLink></li>
        <li><RouterLink to="/web">웹디자인</RouterLink></li>
      </ul>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>
<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

/* --- 수정된 nav 스타일 --- */

nav {
  background-color: #f8f9fa;
  padding: 10px 20px;
  border-bottom: 1px solid #dee2e6;
}

nav ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  /* (변경 없음) */
}

/* 1. li가 사용 가능한 공간을 균등하게 나눠 갖도록 flex-grow 속성 추가 */
li {
  flex-grow: 1; /* 각 메뉴가 동일한 너비를 가지며 확장됩니다. */
}

li a {
  display: block;
  padding: 12px 18px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  color: #343a40;
  transition: background-color 0.2s ease, color 0.2s ease;
  /* 2. 확장된 영역에서 텍스트가 가운데 오도록 text-align 추가 */
  text-align: center; 
}

li a:hover {
  background-color: #e9ecef;
  color: #000;
}

/* 활성 링크 스타일은 그대로 유지합니다. */
li a.router-link-active {
  background-color: #007bff;
  color: white;
}
</style>