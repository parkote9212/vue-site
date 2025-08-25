<template>
  <div class="container">
    <div :style="{ backgroundColor: isImportant ? 'yellow' : 'blue' }" class="example-box">
      Style 바인딩 (배경색)
    </div>

    <div :style="{ fontSize: size }" class="example-box">
      ref 사용 글자 속성
    </div>

    <div :class="className" class="example-box">
      ClassName 사용
    </div>
    
    <div :class="{ myClass: isImportant }" class="example-box">
      class If문
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isImportant = ref(true);
const size = ref("20px");
const className = ref("impClass");
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.example-box {
  width: 250px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.impClass {
  background-color: lightcoral;
  color: white;
}

.myClass {
  background-color: grey;
  color: white;
}
</style>