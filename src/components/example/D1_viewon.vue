<template>
<h1>CSS 레이아웃 수정중</h1>
<div id="container">
    <div class="card">
      <h3>무스 카운터</h3>
      <img :src="moose" />
      <p>{{ "Moose count: " + count }}</p>
      <button @click="count++">Count moose</button>
    </div>

   <div id="light-card" class="card">
      <h3>전구 스위치 버튼</h3>
      <div class="light-effect" v-show="lightOn"></div>
      <img :src="light" alt="light" />
      <button @click="lightOn = !lightOn">Switch light</button>
    </div>

    <div  class="card">
      <h3>키 입력 카운터</h3>
      <input
        type="text"
        v-on:input="inpCount++"
        placeholder="키를 입력하시오"
      />
      <p>{{ "키입력 횟수: " + inpCount }}</p>
    </div>

     <div id="mouseover-card" class="card">
      <h3>마우스오버</h3>
      <div
        id="box"
        @mousemove="colorVal = Math.floor(Math.random() * 360)"
        :style="{ backgroundColor: 'hsl(' + colorVal + ',60%, 60%)' }"
      ></div>
      <p>background-color : hsl({{ colorVal }}, 60%, 60%)</p>
    </div>

     <div id="food-card" class="card">
      <h3>음식 리스트</h3>
      <div class="food-content">
        <ol>
          <li v-for="food in manyFoods" @click="imgUrl = food.url">
            {{ food.name }}
          </li>
        </ol>
        <img :src="imgUrl" />
      </div>
    </div>

    <div id="foodMouseoverWrapper" class="card">
  <h3>마우스오버 음식 변경</h3>
  <p>아래 박스 안에서 마우스를 움직여보세요.</p>
  <div id="food-box" @mousemove="changeFoodImage"></div>
  <img :src="currentFoodImage" alt="food image" class="food-display-image" />
</div>
</div>
</template>

<script setup>
import { ref } from "vue";
import moose from "../../assets/img_moose.jpg";
import light from "../../assets/img_lightBulb.svg";
import Burrito from "../../assets/img_burrito.svg";
import Salad from "../../assets/img_salad.svg";
import Cake from "../../assets/img_cake.svg";
import Soup from "../../assets/img_soup.svg";
import Fish from "../../assets/img_fish.svg";
import Pizza from "../../assets/img_pizza.svg";
import Rice from "../../assets/img_rice.svg";
const count = ref(0);
const lightOn = ref(false);
const inpCount = ref(0);
const colorVal = ref(60);
const imgUrl = ref(Burrito);
const manyFoods = [
  { name: "Burrito", url: Burrito },
  { name: "Salad", url: Salad },
  { name: "Cake", url: Cake },
  { name: "Soup", url: Soup },
  { name: "Fish", url: Fish },
  { name: "Pizza", url: Pizza },
  { name: "Rice", url: Rice },
];
const currentFoodImage = ref(Burrito); // 초기 이미지 설정
let mouseMoveCounter = 0; // 마우스 움직임 횟수를 세는 변수

// ⭐️ 마우스를 움직일 때마다 이미지를 변경하는 함수 추가
const changeFoodImage = () => {
  mouseMoveCounter++;
  // 마우스가 5번 움직일 때마다 이미지를 변경 (너무 자주 바뀌는 것을 방지)
  if (mouseMoveCounter % 5 === 0) {
    // 1. manyFoods 배열에서 랜덤 인덱스 선택
    const randomIndex = Math.floor(Math.random() * manyFoods.length);
    // 2. 랜덤 인덱스에 해당하는 이미지 URL로 변경
    currentFoodImage.value = manyFoods[randomIndex].url;
  }
};
</script>

<style scoped>
/* --- 1. 전체 레이아웃 --- */
#container {
  display: flex;
  flex-direction: column;
  align-items: center; /* 전체 카드를 가운데 정렬 */
}

/* --- 2. 카드 공통 스타일 (핵심) --- */
.card {
  width: 400px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  margin-bottom: 20px;
}

/* --- 3. 공통 요소 스타일 --- */
h3 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  color: #333;
}
p {
  margin: 0;
  color: #555;
  font-size: 0.9rem;
  word-break: break-all;
}
img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}
input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
}

/* --- 4. 개별 카드 내부 요소 스타일 --- */

/* 전구 스위치 */
#light-card {
  position: relative; /* 자식 요소의 absolute 기준점 */
}
#light-card img {
  position: relative;
  z-index: 1; /* 빛 효과보다 위에 있도록 설정 */
  width: 120px;
}
.light-effect {
  position: absolute;
  top: 50%; /* ⭐️ 수직 중앙 */
  left: 50%; /* ⭐️ 수평 중앙 */
  transform: translate(-50%, -50%); /* ⭐️ 정중앙 배치 */
  width: 150px; /* 이미지보다 크게 */
  height: 150px;
  border-radius: 50%;
  background-color: yellow;
  box-shadow: 0 0 50px 25px yellow; /* ⭐️ 빛 번짐 효과 추가 */
  z-index: 0; /* 이미지보다 아래에 있도록 설정 */
}

/* 마우스오버 색상 변경 */
#mouseover-card #box {
  width: 100%;
  height: 150px;
  border-radius: 8px;
}

/* 음식 리스트 */
#food-card .food-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 16px;
}
#food-card ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: left;
}
#food-card li {
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
#food-card li:hover {
  background-color: #f0f0f0;
}
#food-card .food-content img {
  width: 80px;
  height: 80px;
}

/* 마우스오버 음식 변경 */
#food-box{
  width: 300px;
  height: 200px;
  background-color: grey;
}

#food-mouseover-card #food-box {
  width: 100%;
  height: 150px;
  border: 2px dashed #dcdcdc;
  border-radius: 8px;
  background-color: #fafafa;
}
#food-mouseover-card .food-display-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
}
</style>