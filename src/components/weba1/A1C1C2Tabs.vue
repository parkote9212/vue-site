<template>
  <div class="tabs-container">
    <div class="tab-buttons">
      <button
        :class="{ active: activeTab === 'notices' }"
        @click="activeTab = 'notices'"
      >
        공지사항
      </button>
      <button
        :class="{ active: activeTab === 'gallery' }"
        @click="activeTab = 'gallery'"
      >
        갤러리
      </button>
    </div>

    <div v-if="activeTab === 'notices'" class="tab-content">
      <ul>
        <li v-for="(notice, index) in notices" :key="index">
          <a href="#" @click.prevent="index === 0 ? openModal(notice) : null">
            {{ notice.title }}
          </a>
          <span>{{ notice.date }}</span>
        </li>
      </ul>
    </div>

    <div v-if="activeTab === 'gallery'" class="tab-content gallery-content">
      <div v-for="(image, index) in galleryImages" :key="index">
        <a href="#"><img :src="image.src" :alt="image.alt" /></a>
      </div>
    </div>
  </div>

  <A1Popup
    v-if="isModalVisible && selectedNotice"
    :notice="selectedNotice"
    @close="closeModal"
  />
</template>

<script setup>
import { ref } from "vue";
import A1Popup from "./A1Popup.vue";

const activeTab = ref("notices");
// 1. 팝업의 표시 상태(isModalVisible)를 기본적으로 false(보이지 않음)로 설정합니다.
const isModalVisible = ref(false);
const selectedNotice = ref(null);

// 공지사항 데이터에 'content' 속성을 추가합니다.
const notices = ref([
  {
    title: "[공지] JUST 쇼핑몰 신규회원 대상 이벤트 안내",
    date: "2025-08-29",
    content:
      "JUST 쇼핑몰에 새로 가입하신 모든 회원분들께 감사의 마음을 담아 특별 할인 쿠폰을 드립니다.\n\n자세한 내용은 이벤트 페이지를 참고해주세요.",
  },
  {
    title: "[안내] 서버 점검으로 인한 서비스 일시 중단 안내",
    date: "2025-08-28",
  },
  { title: "[배송] 추석 연휴 배송 일정 안내", date: "2025-08-27" },
  {
    title: "[이벤트] 여름 시즌 마감 세일 이벤트 당첨자 발표",
    date: "2025-08-26",
  },
]);

const galleryImages = ref([
  { src: "https://picsum.photos/id/1015/150/100", alt: "가을 패션" },
  { src: "https://picsum.photos/id/1025/150/100", alt: "강아지와 함께" },
  { src: "https://picsum.photos/id/10/150/100", alt: "자연 풍경" },
]);

// 2. openModal 함수는 클릭된 공지사항 정보를 selectedNotice에 저장하고,
//    isModalVisible 값을 true로 바꿔 팝업을 화면에 표시합니다.
const openModal = (notice) => {
  selectedNotice.value = notice;
  isModalVisible.value = true;
};

// 3. closeModal 함수는 isModalVisible 값을 다시 false로 바꿔 팝업을 닫습니다.
const closeModal = () => {
  isModalVisible.value = false;
  selectedNotice.value = null; // 선택된 공지사항 정보 초기화
};
</script>

<style scoped>
.tabs-container {
  border: 1px solid #ddd;
  padding: 20px;
  height: 200px; /* 컨테이너 높이를 200px로 고정 */
  box-sizing: border-box;

  /* ▼ 내부 레이아웃을 flex로 설정하여 스크롤 문제 해결 */
  display: flex;
  flex-direction: column;
}

.tab-buttons button {
  padding: 10px 15px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  cursor: pointer;
}

.tab-buttons button.active {
  background-color: #333;
  color: white;
  border-color: #333;
}

.tab-content {
  margin-top: 20px;
  
  /* ▼ 스크롤 기능의 핵심 코드 */
  flex-grow: 1; /* 탭 버튼을 제외한 나머지 모든 공간을 차지 */
  overflow-y: auto; /* 내용이 flex 공간을 넘어갈 경우 세로 스크롤 자동 생성 */
}
.tab-content ul {
  list-style: none;
  padding: 0;
}
.tab-content li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
.tab-content li a {
  text-decoration: none;
  color: #333;
  cursor: default;
} /* 기본 커서 변경 */
.tab-content li:first-child a {
  cursor: pointer;
} /* 첫번째 항목에만 포인터 커서 적용 */
.tab-content li a:hover {
  text-decoration: underline;
}

.gallery-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.gallery-content img {
  border: 1px solid #ccc;
}
</style>
