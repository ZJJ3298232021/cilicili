<script setup>
import { ref } from 'vue'
import {
  House,
  VideoCameraFilled,
  Headset,
  Platform,
  Monitor,
  Coffee,
  Collection,
  Basketball
} from '@element-plus/icons-vue'

const categories = [
  { id: 1, name: '首页', icon: House, path: '/' },
  { id: 2, name: '动画', icon: VideoCameraFilled, path: '/category/2' },
  { id: 3, name: '音乐', icon: Headset, path: '/category/3' },
  { id: 4, name: '游戏', icon: Platform, path: '/category/4' },
  { id: 5, name: '科技', icon: Monitor, path: '/category/5' },
  { id: 6, name: '生活', icon: Coffee, path: '/category/6' },
  { id: 7, name: '知识', icon: Collection, path: '/category/7' },
  { id: 8, name: '体育', icon: Basketball, path: '/category/8' }
]

const activeIndex = ref('/')
</script>

<template>
  <el-aside width="200px" class="sidebar">
    <el-menu
      :default-active="activeIndex"
      class="sidebar-menu"
      router
    >
      <el-menu-item 
        v-for="category in categories" 
        :key="category.id"
        :index="category.path"
      >
        <el-icon><component :is="category.icon" /></el-icon>
        <span>{{ category.name }}</span>
      </el-menu-item>
    </el-menu>

    <div class="sidebar-footer">
      <h4>登录后发现更多精彩</h4>
      <el-button type="primary" size="large" class="login-btn">
        立即登录
      </el-button>
    </div>
  </el-aside>
</template>

<style scoped>
.sidebar {
  height: 100%;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.sidebar-menu {
  border-right: none;
  flex: 1;
  overflow-y: auto;
}

.sidebar-footer {
  border-top: 1px solid #eee;
  padding: 20px;
  text-align: center;
  background: #fff;
}

.sidebar-footer h4 {
  color: #666;
  margin: 0 0 10px;
  font-size: 14px;
}

.login-btn {
  width: 100%;
}
</style> 