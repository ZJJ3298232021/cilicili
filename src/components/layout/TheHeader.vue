<script setup>
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { Search, User } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const searchQuery = ref('')

const handleSearch = () => {
  // 实现搜索逻辑
}

const menuItems = [
  { index: '1', label: '首页', path: '/' },
  { index: '2', label: '分区', path: '/category/2' },
  { index: '3', label: '热门', path: '/popular' }
]

const handleSelect = (key) => {
  const item = menuItems.find(item => item.index === key)
  if (item) {
    router.push(item.path)
  }
}

const goToUserProfile = () => {
  router.push(`/user/${userStore.currentUser.id}`)
}
</script>

<template>
  <el-header class="header">
    <div class="header-left">
      <el-image class="logo" src="logo.png" />
      <el-menu 
        mode="horizontal" 
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item 
          v-for="item in menuItems"
          :key="item.index"
          :index="item.index"
        >
          {{ item.label }}
        </el-menu-item>
      </el-menu>
    </div>
    
    <div class="header-center">
      <el-input
        v-model="searchQuery"
        placeholder="搜索视频、用户"
        :prefix-icon="Search"
        @keyup.enter="handleSearch"
      >
        <template #append>
          <el-button :icon="Search" @click="handleSearch" />
        </template>
      </el-input>
    </div>
    
    <div class="header-right">
      <template v-if="userStore.isLoggedIn">
        <el-avatar 
          :src="userStore.currentUser.avatar" 
          @click="goToUserProfile"
          style="cursor: pointer"
        />
        <el-dropdown>
          <span class="username">{{ userStore.currentUser.username }}</span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="goToUserProfile">个人中心</el-dropdown-item>
              <el-dropdown-item>投稿</el-dropdown-item>
              <el-dropdown-item @click="userStore.logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
      <el-button v-else type="primary">登录</el-button>
    </div>
  </el-header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  border-bottom: 1px solid #eee;
  background: #fff;
  width: 100%;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo {
  width: 60px;
  height: 30px;
}

.header-center {
  width: 500px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.username {
  cursor: pointer;
}
</style> 