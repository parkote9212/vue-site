<template>
  <div>
    <div id="opacCon">
      <p>
        <input type="range" min="0" max="1" step="0.1" v-model="opac" />
        {{ opac }} (투명도 값)
      </p>
      <div>
        <div
          id="onTop"
          :style="{ backgroundColor: 'rgba(80,0,60,' + opac + ')' }"
        >
          드레그 해서 변경하시오
        </div>
      </div>
    </div>
    <div id="foodList">
      <div v-for="(img, index) in images">
        <img
          :src="img.url"
          @click="select(index)"
          :class="{ selClass: img.sel }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import tiger from "../assets/img_tiger_square.jpeg";
import Burrito from "../assets/img_burrito.svg";
import Salad from "../assets/img_salad.svg";
import Cake from "../assets/img_cake.svg";
import Soup from "../assets/img_soup.svg";
import Fish from "../assets/img_fish.svg";
import Pizza from "../assets/img_pizza.svg";
import Rice from "../assets/img_rice.svg";

const opac = ref(0.8);
const bgImage = ref(`url(${tiger})`);
const images = ref([
  { url: Burrito, sel: false },
  { url: Salad, sel: false },
  { url: Cake, sel: false },
  { url: Soup, sel: false },
  { url: Fish, sel: false },
  { url: Pizza, sel: false },
  { url: Rice, sel: false },
]);

function select(number) {
  images.value[number].sel = !images.value[number].sel;
}
</script>

<style scoped>
#opacCon > div {
  position: relative;
  border: dashed black 1px;
  width: 400px;
  height: 300px;
  background-image: v-bind(bgImage);
  background-size: cover;
  margin-bottom: 10px;
}
#onTop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  z-index: 2;
  color: white;
}

#foodList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 400px;
  border: dashed black 1px;
}
#foodList > div {
  display: block;
  flex-basis: 80px;
  aspect-ratio: 1;
  margin: 5px;
}
#foodList > div > img {
  box-sizing: border-box;
  width: 100%;
  padding: 3px;
  border: solid white 4px;
  border-radius: 5px;
}
#foodList img:hover {
  cursor: pointer;
}
#foodList .selClass {
  border: solid brown 4px;
  background-color: lightpink;
}
</style>
