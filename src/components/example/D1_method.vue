<template>
  <div>
    <div class="card">
      <p>아래 박스를 클릭하세요:</p>
      <div id="clickBox" @click="changeText">
        {{ text }}
      </div>
    </div>
    <div class="card">
      <p>마우스 오버 X,Y값</p>
      <div id="mouseBox"
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

    <div class="card">
      <img :src="moose" width="300" height="300" />
      <p>{{ "Moose count: " + count }}</p>
      <div id="wrap">
      <button @click="addMoose(1)">+1</button>
      <button @click="addMoose(5)">+5</button>
      <button @click="addMoose(-1)">-1</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import moose from "../../assets/img_moose.jpg";

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
.card{
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 400px;
  border: 1px solid black;
  padding: 20px;
  margin: 20px;
}
#clickBox {
  width: 300px;
  height: 200px;
  background-color: blueviolet;
  color: white;
}

#mouseBox{
  width: 300px;
  height: 200px;

}

#wrap{
  display: flex;
}

</style>

