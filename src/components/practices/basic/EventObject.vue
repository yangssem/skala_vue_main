<script setup>
import { ref } from 'vue'

const position = ref('')
const tagName = ref('')
const getOnlyEvent = (e) => {
  position.value = `좌표: X=${e.clientX}, Y=${e.clientY}`
}
const getWithParam = (name, e) => {
  tagName.value = `대상: ${name} / 클릭된 태그: ${e.target.tagName}`
}
function handleLink() {
  console.log('링크 이동을 막았습니다.')
}
function handleSubmit(e) {
  //e.preventDefault()
  console.log('폼이 링크 이동을 막았습니다..',e)
}
</script>

<template>
  <div class="practice-section">
    <h2>v-on 이벤트 객체($event) 활용</h2>
    <p>좌표: {{ position }}</p>
    <p>태그: {{ tagName }}</p>
    <button @click="getOnlyEvent">클릭 좌표 알아내기</button>
    <button @click="getWithParam('회원A', $event)">회원 정보와 태그 확인</button>
    <a
      href="https://www.google.com"
      @click.prevent="handleLink"
    >
      구글
    </a>

    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="이름을 입력하세요" />
      <button type="submit">제출</button>
    </form>
  </div>
</template>
