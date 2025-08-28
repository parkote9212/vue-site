<template>
  <div>
    <div class="app">
      <h3>V-MODEL 사용 IPUT 수정</h3>
      <input type="text" v-model="inpText" />
      <p>inpText value: {{ inpText }}</p>
    </div>
    <div class="app">
      <h3>V-MODEL 사용 구매 목록</h3>
      <form v-on:submit.prevent="addItem">
        <p>필요 품목</p>
        <input type="text" required placeholder="품목이름" v-model="itemName" />
        <p>필요 수량</p>
        <input type="number" required placeholder="수량 " v-model="itemNumber" />

        <label>
          중요한가?
          <input type="checkbox" v-model="itemImportant" />
          {{ itemImportant }}
        </label>

        <button type="submit">Add item</button>
      </form>
      <br />
      <hr />
      <div>
        <p><strong>구매 리스트 :</strong></p>
        <ul>
          <li
            v-for="item in shoppingList"
            :class="{ impClass: item.important }"
          >
            {{ item.name }}, {{ item.number }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inpText = ref("Initial text");
const itemImportant = ref(false);
const itemName = ref('');
const itemNumber = ref('');
const shoppingList = ref([{ name: "토마토", number: 5, important: false }]);

const addItem = () => {
  let item = {
    name: itemName.value,
    number: itemNumber.value,
    important: itemImportant.value,
  };
  shoppingList.value.push(item);
  itemName.value = '';
  itemNumber.value = '';
  itemImportant.value = false;
};
</script>

<style scoped>
/* --- 전체 카드 --- */
.app {
  width: 400px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #e0e0e0; /* 점선 -> 실선으로 변경 */
}

/* --- 입력 폼 --- */
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: none;
  padding: 0;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* 패딩, 테두리를 너비에 포함시켜 레이아웃 유지 */
}

hr {
  border: none;
  border-top: 1px solid #eee;
  margin: 25px 0;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 12px;
  margin-bottom: 8px;
  background-color: rgb(211, 254, 211);
}

.impClass {
  background-color: #fff0f0;
  border-color: #f5c6cb;
  font-weight: bold;
  color: #721c24;
}
</style>
