<template>
  <div>
    <button @click="goToPage('a1')">A1 웹디자인기능사</button>
    <button @click="goToPage('b2')">B2 웹디자인기능사</button>
    <sub>
      <RouterView />
    </sub>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

// 라우터 객체 (push, replace 등 네비게이션 기능만 제공)
const router = useRouter();
// 라우트 객체 (path, path, query 등...)
const route = useRoute();

const goToPage = (id) => {
  router.push({ path: `/web/${id}` });
};
</script>

<style scoped>

button{
  margin-bottom: 20px;
}

</style>