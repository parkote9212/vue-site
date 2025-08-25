<script setup>
import { ref } from 'vue';
import D1_bind from './components/D1_bind.vue';
import D1_if from './components/D1_if.vue';
import D1_show from './components/D1_show.vue'
import D1_for from './components/D1_for.vue';
import D1_viewon from './components/D1_viewon.vue';
import D1_method from './components/D1_method.vue';

const pages = {D1_bind,D1_if,D1_show,D1_for,D1_viewon,D1_method}
const activeComp = ref("D1_bind")

</script>

<template>
  <button @click="activeComp = 'D1_bind'">바인드</button>
  <button @click="activeComp = 'D1_if'">IF</button>
  <button @click="activeComp = 'D1_show'">Show</button>
  <button @click="activeComp = 'D1_for'">For</button>
  <button @click="activeComp = 'D1_viewon'">ViewOn</button>
  <button @click="activeComp = 'D1_method'">Method</button>
  <div id="comp_view">
    <KeepAlive>
    <component :is="pages[activeComp]"></component>
    </KeepAlive>
  </div>
</template>

<style scoped>

button {
  margin-bottom: 20px;
}
</style>