<template>
  <div>
    <div id="app1">
      <p>아래 박스를 클릭하세요:</p>
      <div @click="changeText">
        {{ text }}
      </div>
    </div>
    <div id="app2">
      <p>마우스 오버 X,Y값</p>
      <div
        @mousemove="mousePos"
        :style="{ backgroundColor: 'hsl( ' + xPos + ', 80% , 80% )' }"
      >
        <span>xPos: {{ xPos }}</span
        ><br /><span>yPos: {{ yPos }}</span>
      </div>
      <p>
        CSS:<br />backgroundColor:'hsl(<strong>{{ xPos }}</strong> ,80% , 80%)'
      </p>
    </div>

    <div id="app3">
      <img :src="moose" width="200" height="400" />
      <p>{{ "Moose count: " + count }}</p>
      <button v-on:click="addMoose(1)">+1</button>
      <button v-on:click="addMoose(5)">+5</button>
      <button v-on:click="addMoose(-1)">-1</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import moose from "../assets/img_moose.jpg";

const text = ref("");
function changeText() {
  text.value = "Hello World!";
}
const count = ref(0);

const xPos = ref(0);
const yPos = ref(0);
function mousePos(e) {
  xPos.value = e.offsetX;
  yPos.value = e.offsetY;
}
function addMoose(number) {
  this.count += number;
}
</script>

<style scoped>
#app1 {
  border: black dashed 1px;
  width: 200px;
  padding: 0 20px 20px 20px;
}
#app1 > div {
  width: 140px;
  height: 60px;
  background-color: lightgreen;
  padding: 20px;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
}

#app2 {
  border: black dashed 1px;
  width: 200px;
  padding: 0 20px 20px 20px;
}
#app2 > div {
  width: 160px;
  height: 80px;
  background-color: lightcoral;
  padding: 20px;
}
#app2 span {
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
}

#app3 {
  border: black dashed 1px;
  width: 300px;
  padding: 20px;
}
#app3 > div {
  width: 100%;
  position: relative;
  margin-top: 10px;
  aspect-ratio: 1;
  background-image: url("img_notebook.jpg");
  background-size: 340%;
  background-position: -345px 0;
  overflow: hidden;
}
#app3 span {
  width: 80%;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  line-height: 1.2em;
  transform-origin: 0 0;
  rotate: 33deg;
  position: absolute;
  top: 50px;
  left: 70px;
}
#app3 textarea {
  width: 100%;
  box-sizing: border-box;
}
</style>
