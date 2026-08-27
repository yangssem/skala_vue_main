import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
  // state: 로그인 여부
  const isLoggedIn = ref(false)

  // getters: 로그인 상태에 따라 메시지 계산
  const statusMessage = computed(() =>
    isLoggedIn.value ? '로그인 상태입니다.' : '로그아웃 상태입니다.',
  )

  // actions: 로그인
  function login() {
    isLoggedIn.value = true
  }

  // actions: 로그아웃
  function logout() {
    isLoggedIn.value = false
  }

  return {
    isLoggedIn,
    statusMessage,
    login,
    logout,
  }
})