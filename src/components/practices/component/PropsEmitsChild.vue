<script setup>
// 1. 상위 컴포넌트로부터 주입받을 데이터의 자료형 및 필수 여부 정의
defineProps({
  parentData: {
    type: String,
    required: true,
  },

  userData: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  arr_age: {
    type: Array,
    required: true,
  },
  sum_fn: {
    type: Function,
    required: true,
  },

})

// 2. 상위 컴포넌트로 송신할 커스텀 이벤트 식별자 등록
//const emit = defineEmits(['update-request'])

const emit = defineEmits([
  'update-request',
  'update-request2',
  'update-request3',
])

// 3. 내부 이벤트 발생 시 페이로드를 실어 상위로 이벤트를 디스패치하는 함수
const sendNotification = () => {
  const payload = {
    message: 'Child에서 가공한 새로운 데이터',

    member: {
      id: 'admin',
      pw: '1234',
    },
  }
  emit('update-request', payload)
}

const sendNotification2 = () => {
  const payload2 = {
    message2: 'Child에서 가공한 새로운 데이터2',

    member2: {
      id: 'admin2',
      pw: '22222',
    },
  }
  emit('update-request2', payload2)
}

const sendNotification3 = (member) => {
  const payload3 = {
    message3: 'Child에서 가공한 새로운 데이터3',

    member3: {
      id: member.target.getAttribute('id'),
      pw: member.target.getAttribute('pw'),
    },
  }
  emit('update-request3', payload3)
}
</script>

<template>
  <div class="child-container">
    <h2>하위 컴포넌트 (Child)</h2>
    <p>
      수신된 Props 데이터: <strong>{{ parentData }}</strong>
    </p>
    <p>
      수신된 Props 데이터: <strong>{{ userData.name }}, {{ userData.age }}</strong>
    </p>
    <p>
      수신된 Props 데이터: <strong>{{ title }}</strong>
    </p>
    <p>
      수신된 Props 데이터: <strong>{{ likes }}</strong>
    </p>
    <p>
      수신된 Props 데이터: 
      <strong
        v-for="(x, index) in arr_age"
        :key="index"
      >
        {{ x }} &nbsp;
      </strong>
    </p>
    <button @click="sum_fn">좋아요 +100 (상위 컴포넌트의 함수 호출)</button>
    <br />
    <button @click="sendNotification">상위 컴포넌트로 갱신 요청 (Emit)</button>
    <button @click="sendNotification2">상위 컴포넌트로 갱신 요청2 (Emit)</button>
    <br />
    <button id="tester11" pw="1111" @click="sendNotification3">상위 컴포넌트로 갱신 요청3 (Emit)</button>
    <button id="tester22" pw="2222" @click="sendNotification3">상위 컴포넌트로 갱신 요청3 (Emit)</button>

  </div>
</template>

<style scoped>
.child-container {
  border: 2px dashed #3498db;
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;
}
</style>
