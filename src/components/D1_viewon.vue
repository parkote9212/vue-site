<template>
  <!-- 모든 예제를 감싸는 부모 컨테이너를 추가합니다 -->
  <div class="main-container">
    <div id="app">
      <!-- Moose 카운터 내용 -->

      <img :src="moose" />
      <p>{{ "Moose count: " + count }}</p>
      <button @click="count++">Count moose</button>
    </div>

    <div id="lightDiv">
      <!-- 전구 스위치 내용 -->
      <h3>전구 스위치 버튼</h3>
      <div class="light-effect" v-show="lightOn"></div>
      <img :src="light" alt="light" />
      <button @click="lightOn = !lightOn">Switch light</button>
    </div>

    <div id="inputWrapper">
      <h3>키 입력 카운터</h3>
      <!-- 키 입력 카운터 내용 -->
      <input
        type="text"
        v-on:input="inpCount++"
        placeholder="키를 입력하시오"
      />
      <p>{{ "키입력 횟수: " + inpCount }}</p>
    </div>

    <div id="inputWrapper">
      <h3>마우스오버</h3>
      <div
        id="box"
        v-on:mousemove="colorVal = Math.floor(Math.random() * 360)"
        :style="{ backgroundColor: 'hsl(' + colorVal + ',60%, 60%)' }"
      ></div>
      <p>background-color : hsl({{ colorVal }}, 60%, 60%)</p>
    </div>
    <div id="foodWrapper">
      <img :src="imgUrl" />
      <ol>
        <li v-for="food in manyFoods" @click="imgUrl = food.url">
          {{ food.name }}
        </li>
      </ol>
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
          {name: 'Burrito', url: Burrito},
          {name: 'Salad', url: Salad},
          {name: 'Cake', url: Cake},
          {name: 'Soup', url: Soup},
          {name: 'Fish', url: Fish},
          {name: 'Pizza', url: Pizza},
          {name: 'Rice', url: Rice}
      ]
</script>

<style scoped>
/* 1. 전체를 감싸는 Flexbox 컨테이너 */
.main-container {
  display: flex;
  justify-content: center; /* 아이템들을 가로축 중앙에 배치 */
  align-items: flex-start; /* 아이템들을 세로축 상단에 정렬 */
  flex-wrap: wrap; /* 화면이 좁아지면 아이템이 다음 줄로 넘어감 */
  gap: 30px; /* 각 아이템 사이의 간격을 30px로 설정 */
  padding: 20px;
}

/* 2. 각 예제 박스의 공통 스타일 수정 */
#app,
#lightDiv,
#inputWrapper {
  border: dashed black 1px;
  padding: 20px;
  /* 내용을 가운데 정렬하기 위한 Flexbox 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px; /* 내부 요소들 간의 간격 */
}

#app {
  width: 200px;
}

#lightDiv {
  position: relative;
  width: 150px;
  height: 150px;
  padding: 0; /* 내부 이미지에 맞게 패딩 제거 */
  border: none; /* 테두리 제거 */
}

#inputWrapper {
  width: 200px;
}

/* 3. 이미지 및 기타 요소 스타일 정리 */
img {
  width: 100%;
  display: block;
}
#lightDiv > img {
  position: relative; /* z-index를 적용하려면 position: static이 아니어야 합니다. */
  width: 100%;
  height: 100%;
  z-index: 1; /* 전구 이미지를 노란색 div 위에 표시 */
}

.light-effect {
  position: absolute;
  top: 50%;
  left: 10%;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background-color: yellow;
  box-shadow: 0 0 30px 15px yellow;
  z-index: 0; /* 노란색 div를 전구 이미지 아래에 표시 (기본값) */
}

button {
  width: 100%;
  padding: 8px;
}

#box {
  width: 200px;
  height: 80px;
}

#foodWrapper {
  border: dashed black 1px;
  width: 220px;
  padding: 20px;
}

#foodWrapper > img {
  float: right;
  width: 55%;
}

#foodWrapper li:hover {
  cursor: pointer;
  background-color: rgb(224, 224, 224);
}

#foodWrapper > ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#foodWrapper li {
  padding-left: 6px;
  border-radius: 5px;
  width: 70px;
}
</style>
