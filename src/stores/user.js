import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: {
      id: 1,
      username: '测试用户',
      avatar: 'https://placeholder.com/100x100',
      following: 12,
      followers: 34
    },
    isLoggedIn: true
  }),
  
  actions: {
    login(username, password) {
      // 模拟登录
      this.isLoggedIn = true
    },
    logout() {
      this.isLoggedIn = false
      this.currentUser = null
    }
  }
}) 