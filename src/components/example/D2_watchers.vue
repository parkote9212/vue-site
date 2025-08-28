<template>
    <div id="app">
<input type="range" min="0" max="100" step="1" v-model="rangeVal">
<p><code>{{  rangeVal }}</code></p>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';


const rangeVal = ref(70)

watch(rangeVal, (val) => {
  if (val > 20 && val < 60) {
    if (val < 40) {
      rangeVal.value = 20;
    } else {
      rangeVal.value = 60;
    }
  }
});



</script>

<style scoped>

</style>