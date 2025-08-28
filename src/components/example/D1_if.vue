<template>
  <div>
    <h3>V-IF문</h3>
    
    <p v-if="typerwriterInStock">재고있음 재고확인결과 : {{ typerwriterInStock }}</p>
    <p v-else>재고없음</p>
    <h3>V-IF문2</h3>
    <p v-if="typerwriterCount > 3">재고있음 재고 : {{ typerwriterCount }}</p>
    <p v-else-if="typerwriterCount > 0">재고조금남았어 재고 : {{ typerwriterCount }}</p>
    <p v-else>재고없음</p>
    <h3>함수 반환값 사용 V-IF</h3>
    <p>{{ text }}</p>
    <p v-if="text.includes('pizza')">문장에 피자가 포함되어있음 </p>
    <p v-else>문장에 피자가 포함되어있지 않음</p>

    <h3>V-IF 사용 div img 생성</h3>
    <div>
      {{text2}}
      <div v-if="text2.includes('pizza')">
        <p>문장에 피자가 포함되어있음</p>
        <img :src="pizzaImg" alt="pizza" />
      </div>
      <p v-else>문장에 피자가 포함되어있지 않음</p>
    </div>
    <h3>else if</h3>
    <div>
      <div v-if="text2.includes('pizza')">
        <p>문장에 피자가 포함되어있음</p>
        <img :src="pizzaImg" alt="pizza" />
      </div>
            <div v-else-if="text2.includes('burrito')">
        <p>문장에 부리또가 포함되어있음</p>
        <img :src="burritoImg" alt="burrito" />
      </div>
      <p v-else>문장에 부리또나 피자가 포함되어있지 않음</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import pizzaImg from "../../assets/img_pizza.svg";
import burritoImg from "../../assets/img_burrito.svg";
const typerwriterInStock = ref(true);
const typerwriterCount = ref(3);
const text = ref("I like pizza");
const text2 = ref("I like burrito");
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
