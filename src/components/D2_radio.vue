<template>
  <div>
    <h3>V-model 사용 radio</h3>
    <p>선택 : {{ picked }}</p>
    <input type="radio" id="one" value="One" v-model="picked" name="numbergroup" />
    <label for="one">One</label>

    <input type="radio" id="two" value="Two" v-model="picked" name="numbergroup"/>
    <label for="two">Two</label>
  </div>
  <div>
    <h3>V-model,for,배열사용 radio</h3>
    <p>선택 : {{picked2}}  </p>
   <img :src="selectedFoodImage">

    <div v-for="food in foods">
      <input
        type="radio"
        :id="food.id"
        :value="food.value"
        v-model="picked2"
        name="foodgroup"
        
      />
      <label :for="food.id">{{ food.value }}</label>
     
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import pizza from "../assets/img_pizza.svg";
import burrito from "../assets/img_burrito.svg";
import cake from "../assets/img_cake.svg";
import fish from "../assets/img_fish.svg";
import rice from "../assets/img_rice.svg";
import salad from "../assets/img_salad.svg";
import soup from "../assets/img_soup.svg";
const picked = ref("");
const picked2 = ref("");
const foods = ref([
  { id: "Burrito", value: "Burrito", url: burrito },
  { id: "Salad", value: "Salad" , url: salad },
  { id: "Cake", value: "Cake" , url: cake },
  { id: "Soup", value: "Soup", url: soup},
  { id: "Fish", value: "Fish", url: fish},
  { id: "Pizza", value: "Pizza", url: pizza},
  { id: "Rice", value: "Rice", url: rice},
]);

const selectedFoodImage = computed(() => {
    const selectedFood = foods.value.find(food => food.value === picked2.value);
    return selectedFood ? selectedFood.url : null;
});
</script>

<style scoped></style>
