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
  <div @mousemove="mousePos" :style="{backgroundColor:'hsl( '+xPos+', 80% , 80% )'}">
    <span>xPos: {{ xPos }}</span><br><span>yPos: {{ yPos }}</span>
  </div>
   <p>CSS:<br>backgroundColor:'hsl(<strong>{{xPos}}</strong> ,80% , 80%)'</p>
</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("");
function changeText() {
  text.value = "Hello World!";
}

const xPos=ref(0);
const yPos=ref(0);
function mousePos(e){
    xPos.value = e.offsetX
    yPos.value = e.offsetY
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
</style>
