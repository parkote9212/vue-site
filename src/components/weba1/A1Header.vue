<template>
  <header>
    <div class="header-container">
      <h1>
        <a href="#"><img src="../../assets/logo.png" alt="JUST 쇼핑몰 로고"></a>
      </h1>
      <nav @mouseleave="hideAllSubmenus">
        <ul>
          <li v-for="(menu, index) in menus" :key="index" @mouseover="showSubmenu(index)">
            <a href="#">{{ menu.main.name }}</a>
            <ul class="submenu" v-show="menu.isSubmenuVisible">
              <li v-for="(submenu, subIndex) in menu.sub" :key="subIndex">
                <a href="#">{{ submenu.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

// 메뉴 데이터를 배열로 관리
const menus = ref([
  { main: { name: '탑' }, sub: [{ name: '블라우스' }, { name: '티' }, { name: '셔츠' }, { name: '니트' }], isSubmenuVisible: false },
  { main: { name: '아우터' }, sub: [{ name: '자켓' }, { name: '코트' }, { name: '가디건' }, { name: '머플러' }], isSubmenuVisible: false },
  { main: { name: '팬츠' }, sub: [{ name: '청바지' }, { name: '짧은바지' }, { name: '긴바지' }, { name: '레깅스' }], isSubmenuVisible: false },
  { main: { name: '악세서리' }, sub: [{ name: '귀고리' }, { name: '목걸이' }, { name: '반지' }, { name: '팔찌' }], isSubmenuVisible: false },
]);

// 마우스 오버 시 해당 서브메뉴만 보여주는 함수
const showSubmenu = (index) => {
  menus.value.forEach((menu, i) => {
    menu.isSubmenuVisible = i === index;
  });
};

// 네비게이션 영역에서 마우스가 벗어나면 모든 서브메뉴를 숨기는 함수
const hideAllSubmenus = () => {
  menus.value.forEach(menu => {
    menu.isSubmenuVisible = false;
  });
};
</script>

<style scoped>
/* 헤더와 메뉴 관련 스타일 */
header {
  height: 100px; /* 와이어프레임 A 영역 높이 */
  border-bottom: 1px solid #ccc;
}
.header-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
nav ul {
  display: flex;
  list-style: none;
}
nav > ul > li {
  position: relative;
}
nav > ul > li > a {
  display: block;
  padding: 20px 40px;
  font-weight: bold;
}
/* CSS Transition을 활용한 부드러운 효과 */
.submenu {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 10;
  list-style: none;
  padding: 0;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
nav > ul > li:hover .submenu {
  opacity: 1;
  visibility: visible;
}
.submenu li a {
  display: block;
  padding: 10px;
}
.submenu li a:hover {
  background-color: #ddd;
}

img {
  width: 200px;
  height: 98px;
}
</style>