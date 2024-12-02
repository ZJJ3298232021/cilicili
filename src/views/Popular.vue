<script setup>
import { ref, onMounted } from 'vue'
import VideoCard from '@/components/video/VideoCard.vue'

const activeTab = ref('daily')
const videos = ref([])
const loading = ref(false)

const tabs = [
  { name: 'daily', label: '日排行' },
  { name: 'weekly', label: '周排行' },
  { name: 'monthly', label: '月排行' },
  { name: 'history', label: '历史排行' }
]

const fetchPopularVideos = async (type) => {
  loading.value = true
  // 模拟API请求
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const covers = [
    new URL('@/assets/1.jpg', import.meta.url).href,
    new URL('@/assets/2.jpg', import.meta.url).href
  ]
  
  videos.value = Array(20).fill(null).map((_, index) => ({
    id: index + 1,
    title: `热门视频${index + 1}`,
    cover: covers[index % 2],
    uploader: '用户名称',
    views: Math.floor(Math.random() * 1000000),
    likes: Math.floor(Math.random() * 100000),
    duration: '12:30',
    createTime: new Date().toLocaleDateString(),
    rank: index + 1
  }))
  
  loading.value = false
}

onMounted(() => {
  fetchPopularVideos('daily')
})
</script>

<template>
  <div class="popular-page">
    <el-card>
      <template #header>
        <el-tabs v-model="activeTab" @tab-change="fetchPopularVideos">
          <el-tab-pane
            v-for="tab in tabs"
            :key="tab.name"
            :name="tab.name"
            :label="tab.label"
          />
        </el-tabs>
      </template>

      <div v-loading="loading" class="video-list">
        <div 
          v-for="video in videos" 
          :key="video.id"
          class="video-item"
        >
          <div class="rank-number" :class="{ 'top-3': video.rank <= 3 }">
            {{ video.rank }}
          </div>
          <VideoCard :video="video" class="rank-card" />
          <div class="video-stats">
            <el-tag size="small" type="danger">
              {{ video.views.toLocaleString() }} 播放
            </el-tag>
            <el-tag size="small" type="success">
              {{ video.likes.toLocaleString() }} 点赞
            </el-tag>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.popular-page {
  padding: 20px;
}

.video-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.video-item {
  position: relative;
  padding: 10px;
  border-radius: 4px;
  transition: all 0.3s;
}

.video-item:hover {
  background: #f5f7fa;
}

.rank-number {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-weight: bold;
  z-index: 1;
}

.rank-number.top-3 {
  background: #ff6b6b;
}

.video-stats {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}
</style> 