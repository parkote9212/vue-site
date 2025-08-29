<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <h2>{{ notice.title }}</h2>
      <p class="notice-content">
        {{ notice.content }}
      </p>
      <button @click="$emit('close')">닫기</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// defineProps 유효성을 강화하여 필수 속성 및 기본값을 정의합니다.
defineProps({
  notice: {
    type: Object,
    required: true, // 이 prop은 반드시 전달되어야 함
    // 데이터가 전달되지 않았을 경우를 대비한 기본값
    default: () => ({ 
      title: '제목 없음', 
      content: '내용이 없습니다.' 
    })
  }
});

const emit = defineEmits(['close']);

// ESC 키 이벤트를 처리할 함수
const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    emit('close');
  }
};

// 컴포넌트가 마운트되면 keydown 이벤트 리스너를 추가합니다.
onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

// 컴포넌트가 언마운트되면 이벤트 리스너를 제거하여 메모리 누수를 방지합니다.
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.modal-content h2 {
  margin-top: 0;
  margin-bottom: 15px;
}
.modal-content button {
  margin-top: 25px;
  padding: 10px 20px;
  border: none;
  background-color: #333;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
/* 추가된 스타일 */
.notice-content {
  line-height: 1.6;
  text-align: left;
  white-space: pre-wrap; /* 줄바꿈과 공백을 유지하도록 설정 */
}
</style>