<template>
  <div class="slider-wrap">
    <div class="slider-container" :style="containerStyle">
      <div v-for="(slide, index) in slides" :key="index" class="slide" :style="slideStyle">
        <img :src="slide.imgSrc" :alt="slide.alt">
        <p class="slide-text">{{ slide.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// 원본 슬라이드 데이터는 별도로 관리합니다.
const originalSlides = ref([
  { id: 1, imgSrc: 'https://picsum.photos/id/1060/1200/300', text: 'Stunning New Collection', alt: '의류 컬렉션 이미지' },
  { id: 2, imgSrc: 'https://picsum.photos/id/1025/1200/300', text: 'Accessorize Your Style', alt: '애완견과 액세서리 이미지' },
  { id: 3, imgSrc: 'https://picsum.photos/id/219/1200/300', text: 'Urban Fashion Trends', alt: '도시 패션 스타일 이미지' },
]);

// 화면에 실제 렌더링될 슬라이드 배열 (마지막에 첫 슬라이드가 복제되어 추가될 예정)
const slides = ref([]);
const currentSlide = ref(0);
// CSS transition 효과를 동적으로 제어하기 위한 ref
const transitionEnabled = ref(true);
let slideInterval = null;

// 슬라이드 컨테이너의 스타일을 computed 속성으로 관리합니다.
const containerStyle = computed(() => ({
  // 복제된 슬라이드를 포함한 전체 길이에 맞춰 너비 계산
  width: `${slides.value.length * 100}%`,
  // transitionEnabled 값에 따라 transition 효과를 켜고 끕니다.
  transition: transitionEnabled.value ? 'transform 0.5s ease-in-out' : 'none',
  transform: `translateX(-${currentSlide.value * (100 / slides.value.length)}%)`,
}));

// 개별 슬라이드의 너비도 전체 길이에 맞춰 동적으로 계산합니다.
const slideStyle = computed(() => ({
  width: `calc(100% / ${slides.value.length})`,
}));

// 다음 슬라이드로 이동하는 함수
const nextSlide = () => {
  currentSlide.value++;

  // 현재 슬라이드가 복제된 마지막 슬라이드일 경우
  if (currentSlide.value >= slides.value.length -1) {
    // 0.5초(transition 시간) 후에 순간이동 로직을 실행합니다.
    setTimeout(() => {
      transitionEnabled.value = false; // 애니메이션 효과를 잠시 끕니다.
      currentSlide.value = 0;       // 실제 첫 번째 슬라이드로 위치를 리셋합니다.

      // DOM이 업데이트 된 후 다시 애니메이션 효과를 켭니다. (짧은 지연시간 필요)
      setTimeout(() => {
        transitionEnabled.value = true;
      }, 50);
    }, 500); // transition 시간과 동일하게 설정
  }
};

onMounted(() => {
  // 컴포넌트가 마운트되면, 원본 첫번째 슬라이드를 복제하여 배열 맨 뒤에 추가합니다.
  slides.value = [...originalSlides.value, originalSlides.value[0]];
  slideInterval = setInterval(nextSlide, 3000);
});

onUnmounted(() => {
  clearInterval(slideInterval);
});
</script>

<style scoped>
.slider-wrap {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
}

.slider-container {
  height: 100%;
  display: flex;
}

.slide {
  height: 100%;
  position: relative;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
}
</style>