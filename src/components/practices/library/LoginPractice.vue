<script setup>
import { useLoginStore } from '@/stores/login.js'

const loginStore = useLoginStore()
</script>

<template>
  <div class="practice-section">
    <h2>로그인 Store 활용 실습</h2>

    <p>
      로그인 여부(state):
      <strong>{{ loginStore.isLoggedIn }}</strong>
      
    </p>

    <p>
      상태 메시지(getters):
      <span>{{ loginStore.statusMessage }}</span>
    </p>
    <p>
      <button v-if="!loginStore.isLoggedIn" @click="loginStore.login">로그인</button>
      <button v-else @click="loginStore.logout">로그아웃</button>
    </p>
  </div>
</template>