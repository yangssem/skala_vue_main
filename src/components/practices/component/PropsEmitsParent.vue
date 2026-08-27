<script setup>
import { ref } from 'vue'
import PropsEmitsChild from './PropsEmitsChild.vue'

// 1. 상위 컴포넌트의 로컬 반응형 상태 정의
const message = ref('Parent 초기 메시지')
const message2 = ref('Parent 초기 메시지2')
const message3 = ref('Parent 초기 메시지3')
const user = ref({
  name: 'kim',
  age: 33,
})

const arr_age = ref([11,22,33])

const title = ref('Props & Emits Practice')
const likes = ref(0)
const sum_fn = () => {
  likes.value += 100
}

// 2. 하위 컴포넌트의 커스텀 이벤트를 수신했을 때 실행될 핸들러 함수
// 인자(newValue)로 하위 컴포넌트가 보낸 페이로드가 자동 주입됩니다.
const handleUpdateRequest = (payload) => {
  message.value = `message : ${payload.message}, (하위 컴포넌트에서 전달된 member 정보: ${payload.member.id}, ${payload.member.pw})`;
}
const handleUpdateRequest2 = (payload) => {
  message2.value = `message2 : ${payload.message2}, (하위 컴포넌트에서 전달된 member2 정보2: ${payload.member2.id}, ${payload.member2.pw})`; 
}

const handleUpdateRequest3 = (payload) => {
  message3.value = `message3 : ${payload.message3}, (하위 컴포넌트에서 전달된 member3 정보3: ${payload.member3.id}, ${payload.member3.pw})`; 
}
</script>

<template>
  <div class="practice-section">
    <h2>Props & Emits</h2>
    <div class="parent-container">
      <h2>상위 컴포넌트 (Parent)</h2>
      <p>
        현재 로컬 데이터(State)1: <strong>{{ message }}</strong>
      </p>
      <p>
        현재 로컬 데이터(State)2: <strong>{{ message2 }}</strong>
      </p>
      <p>
        현재 로컬 데이터(State)3: <strong>{{ message3 }}</strong>
      </p>
      <br />
      <PropsEmitsChild 
      :parent-data="message" 
      :user-data="user"
      :title="title"
      :likes="likes"
      :arr_age="arr_age"
      :sum_fn="sum_fn"
      @update-request="handleUpdateRequest"
      @update-request2="handleUpdateRequest2"
      @update-request3="handleUpdateRequest3" />
    </div>
  </div>
</template>

<style scoped>
.parent-container {
  border: 2px solid #2ecc71;
  padding: 20px;
  background-color: #f8f9fa;
  margin: 0 auto;
  border-radius: 8px;
}
</style>
