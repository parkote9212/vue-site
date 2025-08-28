<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app-container">
    <p>경로 : {{ $route.fullPath }}</p>
    <nav>
      <ul>
        <RouterLink to="/"> <li>Go to Home</li></RouterLink>
       <RouterLink to="/about"> <li>Go to About</li></RouterLink>
        <RouterLink to="/exam"><li>W3예제</li></RouterLink>
        <RouterLink to="/web"><li>웹디자인</li></RouterLink>
      </ul>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* 2. Flexbox 레이아웃을 위한 스타일 추가 */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100%; /* 부모(#app) 높이에 맞춤 */
}

main {
  flex-grow: 1; /* 남은 수직 공간을 모두 차지 */
  display: flex; /* 자식 컴포넌트의 세로 정렬을 위해 추가 */
  flex-direction: column;
}

nav ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  gap: 20px;
}

li{
  font-weight: bolder;
  padding: 20px;
  border: 1px solid black;
}

li a {
  text-decoration: none;
}
</style>
