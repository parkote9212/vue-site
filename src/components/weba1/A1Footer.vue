<template>
  <footer>
    <div class="footer-container">
      <div class="footer-logo">
        <img src="../../assets/logo.png" alt="JUST 쇼핑몰 하단 로고">
      </div>
      <div class="copyright">
        <p>Copyright © 2025 JUST Shopping Mall. All rights reserved.</p>
      </div>
      
      <div class="sns-links">
        <a v-for="sns in snsLinks" 
           :key="sns.name" 
           :href="sns.url" 
           target="_blank" 
           :aria-label="`${sns.name} 페이지로 이동`">
          <img :src="sns.iconSrc" :alt="sns.name">
        </a>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

// SNS 링크 데이터를 객체 배열로 관리합니다.
// 데이터를 수정하거나 추가하면 화면이 자동으로 업데이트됩니다.
const snsLinks = ref([
  {
    name: 'Facebook',
    url: '#', // 실제 페이스북 URL로 변경하세요.
    iconSrc: 'https://cdn.icon-icons.com/icons2/2428/PNG/512/facebook_black_logo_icon_147136.png'
  },
  {
    name: 'Instagram',
    url: '#', // 실제 인스타그램 URL로 변경하세요.
    iconSrc: 'https://cdn.icon-icons.com/icons2/2428/PNG/512/instagram_black_logo_icon_147122.png'
  },
  {
    name: 'X',
    url: '#', // 실제 X(트위터) URL로 변경하세요.
    iconSrc: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-logo-icon.png'
  }
]);
</script>

<style scoped>
/* 스타일(CSS)은 변경할 필요 없이 그대로 사용합니다. */
footer {
  height: 100px;
  background-color: #f2f2f2;
  width: 1200px;
}
.footer-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.footer-logo img {
  filter: grayscale(100%);
  height: 40px;
}
.sns-links {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 10px;
}
.sns-links img {
  height: 24px;
  width: 24px;
  transition: opacity 0.2s ease;
}
.sns-links a:hover img {
  opacity: 0.7;
}
</style>