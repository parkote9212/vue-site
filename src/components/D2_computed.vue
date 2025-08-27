<template>
  <div id="app">
    <form>
      <p>
        중요 항목인가?
        <label>
          <input type="checkbox" v-model="chbxVal" />
          {{ isImportant }}
        </label>
      </p>
    </form>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const chbxVal = ref(false);
// const isImportant = computed(() => {
//   if (chbxVal.value) {
//     return "중요";
//   } else {
//     return "평범";
//   }
// });

const isImportant = computed(() => {
  // if-else문을 삼항 연산자로 더 간결하게 표현할 수 있습니다.
  return chbxVal.value ? "중요" : "평범";
});
</script>

<style scoped></style>
