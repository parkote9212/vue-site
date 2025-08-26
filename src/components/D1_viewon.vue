<template>
  <div class="main-container">
    <div id="app" class="example-box">
      <h3>무스 카운터</h3>
      <img :src="moose" />
      <p>{{ "Moose count: " + count }}</p>
      <button @click="count++">Count moose</button>
    </div>

    <div id="lightDiv" class="example-box">
      <h3>전구 스위치 버튼</h3>
      <div class="light-effect" v-show="lightOn"></div>
      <img :src="light" alt="light" />
      <button @click="lightOn = !lightOn">Switch light</button>
    </div>

    <div id="inputWrapper" class="example-box">
      <h3>키 입력 카운터</h3>
      <input
        type="text"
        v-on:input="inpCount++"
        placeholder="키를 입력하시오"
      />
      <p>{{ "키입력 횟수: " + inpCount }}</p>
    </div>

    <div id="mouseoverWrapper" class="example-box">
      <h3>마우스오버</h3>
      <div
        id="box"
        @mousemove="colorVal = Math.floor(Math.random() * 360)"
        :style="{ backgroundColor: 'hsl(' + colorVal + ',60%, 60%)' }"
      ></div>
      <p>background-color : hsl({{ colorVal }}, 60%, 60%)</p>
    </div>

    <div id="foodWrapper" class="example-box">
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
    <div id="foodMouseoverWrapper" class="example-box">
  <h3>마우스오버 음식 변경</h3>
  <p>아래 박스 안에서 마우스를 움직여보세요.</p>
  <div id="food-box" @mousemove="changeFoodImage"></div>
  <img :src="currentFoodImage" alt="food image" class="food-display-image" />
</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import moose from "../assets/img_moose.jpg";
import light from "../assets/img_lightBulb.svg";
import Burrito from "../assets/img_burrito.svg";
import Salad from "../assets/img_salad.svg";
import Cake from "../assets/img_cake.svg";
import Soup from "../assets/img_soup.svg";
import Fish from "../assets/img_fish.svg";
import Pizza from "../assets/img_pizza.svg";
import Rice from "../assets/img_rice.svg";
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
/* 전체를 감싸는 Flexbox 컨테이너 */
.main-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px;
}

/* ⭐️ 1. 모든 예제 박스의 공통 스타일 */
.example-box {
  border: 1px dashed black;
  padding: 20px;
  width: 250px; /* 기본 너비 통일 */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

/* ⭐️ 2. 각 박스별 개별 스타일 */
#lightDiv {
  /* 외곽선을 다시 적용하기 위해 border: none 제거 */
  padding: 20px; /* 외곽선과 내용물 사이의 여백을 위해 padding 다시 추가 */
  width: 200px; 
  height: 200px;
  position: relative;
  justify-content: center;
  margin-top: 50px; /* 원하는 만큼 값을 조절하여 아래로 내립니다 */
}

#foodWrapper .food-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

/* 3. 내부 요소 스타일 */
img {
  width: 100%;
  display: block;
}

#lightDiv > img {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.light-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* ⭐️ 정중앙 배치 */
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background-color: yellow;
  box-shadow: 0 0 30px 15px yellow;
  z-index: 0;
}

button,
input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box; /* padding이 너비에 포함되도록 설정 */
}

#box {
  width: 100%;
  height: 80px;
}

#foodWrapper img {
  width: 50%;
}

#foodWrapper ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#foodWrapper li {
  padding: 4px 8px;
  border-radius: 5px;
  cursor: pointer;
}

#foodWrapper li:hover {
  background-color: rgb(224, 224, 224);
}
/* 기존 style 코드 아래에 이어서 추가하세요 */

/* ⭐️ 새로운 예제 박스(#foodMouseoverWrapper) 내부 스타일 */
#food-box {
  width: 100%;
  height: 150px;
  border: 2px solid #a3a3a3;
  border-radius: 8px;
  background-color: #f0f0f0;
}

.food-display-image {
  width: 100px;
  height: 100px;
  object-fit: contain; /* 이미지가 잘리지 않고 비율에 맞게 표시되도록 설정 */
}
</style>
