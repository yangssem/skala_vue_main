<script setup>
// 1. 상위로 입력 텍스트를 전달할 커스텀 이벤트 등록 (매크로)
const emit = defineEmits(['update-query'])

// 2. 상위로부터 현재 검색 상태 값을 수신 (한글 동기화 상태 유지용)
defineProps({
  currentQuery: {
    type: String,
    default: '',
  },
})

// 3. 입력 이벤트 발생 시 상위로 전달할 핸들러 함수
const fn_changeInput = (event) => {
  const newValue = event.target.value
  emit('update-query', newValue)
}
</script>

<template>
  <div class="search-inner">
    <h3>🔍 도시 검색</h3>
    <input type="text" :value="currentQuery" @input="fn_changeInput" placeholder="검색할 도시 이름 입력" />
    <p>
      검색 중인 도시: <strong>{{ currentQuery }}</strong>
    </p>
  </div>
</template>
