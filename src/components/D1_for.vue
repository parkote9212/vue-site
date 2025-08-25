<template>
  <div>
    <h2>For 사용 배열 호출</h2>
    <ol>
      <li v-for="x in manyFoods">{{ x }}</li>
    </ol>
    <h2>For 사용 배열 이미지 호출</h2>
    <ol>
      <img v-for="x in manyFoods2" :src="x" />
    </ol>
    <h2>For 사용 배열 이미지 텍스트 박스 호출</h2>
    <div id="wrapping">
      <figure v-for="x in manyFoods3">
        <img :src="x.url" />
        <figcaption>{{ x.name }}</figcaption>
      </figure>
    </div>
    <h2>인덱스 값으로 받기</h2>
    <p v-for="(x, index) in manyFoods4">
      {{ index }}: "{{ x.name }}",url :"{{ x.url }}"" <br />
    </p>
  </div>
</template>

<script setup>
import pizzaImg from "../assets/img_pizza.svg";
import burritoImg from "../assets/img_burrito.svg";
import cakeImg from "../assets/img_cake.svg";
import fishImg from "../assets/img_fish.svg";
import riceImg from "../assets/img_rice.svg";
import saladImg from "../assets/img_salad.svg";
import soupImg from "../assets/img_soup.svg";
import { ref } from "vue";

const manyFoods = ref([
  "burrito",
  "salad",
  "cake",
  "soup",
  "fish",
  "pizza",
  "rice",
]);

const manyFoods2 = ref([
  burritoImg,
  saladImg,
  cakeImg,
  soupImg,
  fishImg,
  pizzaImg,
  riceImg,
]);

const manyFoods3 = ref([
  { name: "Burrito", url: burritoImg },
  { name: "Salad", url: saladImg },
  { name: "Cake", url: cakeImg },
  { name: "Soup", url: soupImg },
  { name: "Fish", url: fishImg },
  { name: "Pizza", url: pizzaImg },
  { name: "Rice", url: riceImg },
]);

const manyFoods4 = ref([
  { name: "Burrito", url: "img_burrito.svg" },
  { name: "Salad", url: "img_salad.svg" },
  { name: "Cake", url: "img_cake.svg" },
  { name: "Soup", url: "img_soup.svg" },
  { name: "Fish", url: "img_fish.svg" },
  { name: "Pizza", url: "img_pizza.svg" },
  { name: "Rice", url: "img_rice.svg" },
]);
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}

figure {
  width: 100px;
  padding: 10px;
  margin: 10px;
  background-color: lightskyblue;
  border-radius: 5px;
}

figcaption {
  text-align: center;
}

#wrapping {
  border: solid black 1px;
  width: 80%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
