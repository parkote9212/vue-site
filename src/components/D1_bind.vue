<template>
  <div>
    <div :style="{ backgroundColor: isImportant ? 'yellow' : 'blue' }"></div>
    <br />
    <div :style="{ fontSize: size }">ref 사용 글자 속성</div>
    <br />
    <div :class="className">ClassName 사용</div>
    <br />
  </div>
  <div :class="{ myClass: isImportant }">class If문</div>
  <h2>v if</h2>
</template>

<script setup>
import { ref } from "vue";

const isImportant = ref(true);
const size = ref("20px");
const className = ref("impClass");
</script>

<style scoped>
div {
  width: 200px;
  height: 100px;
}
.impClass {
  background-color: lightcoral;
}
.myClass {
  background-color: grey;
}
</style>
