<template>
  <div class="wrapper">
    <p>내부 블럭 이 움직이는지 확인하시오</p>
    <div class="show" v-show="showDiv">v-show를 사용한 div입니다.</div>
     <div v-if="showDiv">v-if를 사용한 div입니다.</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showDiv = ref(true);
</script>

<style scoped>
.wrapper {
  border: black dashed 1px;
  width: 200px;
  padding: 0 20px 20px 20px;
}
.show {
  padding: 20px;
  background-color: lightgreen;
  font-weight: bold;
}
</style>
