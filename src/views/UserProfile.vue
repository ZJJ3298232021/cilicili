<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import VideoCard from '@/components/video/VideoCard.vue'

const route = useRoute()
const userStore = useUserStore()
const activeTab = ref('videos')

const userInfo = ref({
  id: 1,
  username: '测试用户',
  avatar: 'https://placeholder.com/100x100',
  following: 128,
  followers: 256,
  description: '这是一段个人简介...',
  joinDate: '2024-01-01'
})

const userVideos = ref([])
const userFavorites = ref([])
const loading = ref(false)

const covers = [
  new URL('@/assets/1.jpg', import.meta.url).href,
  new URL('@/assets/2.jpg', import.meta.url).href
]

const fetchUserVideos = async () => {
  loading.value = true
  // 模拟API请求
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  userVideos.value = Array(8).fill(null).map((_, index) => ({
    id: index + 1,
    title: `我的视频${index + 1}`,
    cover: covers[index % 2],
    uploader: userInfo.value.username,
    views: Math.floor(Math.random() * 10000),
    likes: Math.floor(Math.random() * 1000),
    duration: '12:30',
    createTime: new Date().toLocaleDateString()
  }))
  
  loading.value = false
}

const fetchUserFavorites = async () => {
  loading.value = true
  // 模拟API请求
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  userFavorites.value = Array(8).fill(null).map((_, index) => ({
    id: index + 1,
    title: `收藏的视频${index + 1}`,
    cover: covers[index % 2],
    uploader: '其他用户',
    views: Math.floor(Math.random() * 10000),
    likes: Math.floor(Math.random() * 1000),
    duration: '12:30',
    createTime: new Date().toLocaleDateString()
  }))
  
  loading.value = false
}

const handleTabClick = (tab) => {
  if (tab.props.name === 'videos') {
    fetchUserVideos()
  } else if (tab.props.name === 'favorites') {
    fetchUserFavorites()
  }
}

onMounted(() => {
  fetchUserVideos()
})
</script>

<template>
  <div class="profile-page">
    <!-- 用户信息卡片 -->
    <el-card class="user-card">
      <div class="user-header">
        <el-avatar :size="100" :src="userInfo.avatar" />
        <div class="user-info">
          <h2>{{ userInfo.username }}</h2>
          <p class="user-description">{{ userInfo.description }}</p>
          <div class="user-stats">
            <div class="stat-item">
              <span class="stat-value">{{ userInfo.following }}</span>
              <span class="stat-label">关注</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">{{ userInfo.followers }}</span>
              <span class="stat-label">粉丝</span>
            </div>
          </div>
        </div>
        <div class="user-actions" v-if="route.params.id !== userStore.currentUser?.id">
          <el-button type="primary">关注</el-button>
          <el-button>发消息</el-button>
        </div>
      </div>
    </el-card>

    <!-- 内容区域 -->
    <el-card class="content-card">
      <el-tabs v-model="activeTab" @tab-click="handleTabClick">
        <el-tab-pane label="投稿视频" name="videos">
          <div v-loading="loading">
            <el-row :gutter="20">
              <el-col 
                v-for="video in userVideos" 
                :key="video.id" 
                :xs="24" 
                :sm="12" 
                :md="8" 
                :lg="6"
                class="video-item"
              >
                <VideoCard :video="video" />
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>

        <el-tab-pane label="收藏夹" name="favorites">
          <div v-loading="loading">
            <el-row :gutter="20">
              <el-col 
                v-for="video in userFavorites" 
                :key="video.id" 
                :xs="24" 
                :sm="12" 
                :md="8" 
                :lg="6"
                class="video-item"
              >
                <VideoCard :video="video" />
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<style scoped>
.profile-page {
  padding: 20px;
}

.user-card {
  margin-bottom: 20px;
}

.user-header {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.user-info {
  flex: 1;
}

.user-description {
  color: #666;
  margin: 10px 0;
}

.user-stats {
  display: flex;
  gap: 20px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.stat-label {
  font-size: 14px;
  color: #666;
}

.user-actions {
  display: flex;
  gap: 10px;
}

.content-card {
  min-height: 500px;
}

.video-item {
  margin-bottom: 20px;
}
</style> 