<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import VideoCard from '@/components/video/VideoCard.vue'

const route = useRoute()
const currentCategory = ref(null)
const videos = ref([])
const loading = ref(false)
const sortBy = ref('newest')

const categories = {
  2: { name: '动画', icon: 'VideoCameraFilled' },
  3: { name: '音乐', icon: 'Headset' },
  4: { name: '游戏', icon: 'Platform' },
  5: { name: '科技', icon: 'Monitor' },
  6: { name: '生活', icon: 'Coffee' },
  7: { name: '知识', icon: 'Collection' },
  8: { name: '体育', icon: 'Basketball' }
}

const fetchCategoryVideos = async (categoryId) => {
  loading.value = true
  // 模拟API请求
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const covers = [
    new URL('@/assets/1.jpg', import.meta.url).href,
    new URL('@/assets/2.jpg', import.meta.url).href
  ]
  
  videos.value = Array(12).fill(null).map((_, index) => ({
    id: index + 1,
    title: `${categories[categoryId].name}分区视频${index + 1}`,
    cover: covers[index % 2], // 循环使用两张图片
    uploader: '用户名称',
    views: Math.floor(Math.random() * 10000),
    likes: Math.floor(Math.random() * 1000),
    duration: '12:30',
    createTime: new Date().toLocaleDateString()
  }))
  
  loading.value = false
}

watch(() => route.params.id, (newId) => {
  currentCategory.value = categories[newId]
  fetchCategoryVideos(newId)
}, { immediate: true })
</script>

<template>
  <div class="category-page">
    <el-card class="category-header">
      <div class="category-info">
        <h1>{{ currentCategory?.name }}分区</h1>
        <el-tag size="large">{{ videos.length }}个视频</el-tag>
      </div>
      
      <div class="category-filter">
        <el-radio-group v-model="sortBy">
          <el-radio-button label="newest">最新发布</el-radio-button>
          <el-radio-button label="hottest">最多播放</el-radio-button>
          <el-radio-button label="recommend">推荐</el-radio-button>
        </el-radio-group>
      </div>
    </el-card>

    <el-row v-loading="loading" :gutter="20">
      <el-col 
        v-for="video in videos" 
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

    <div class="pagination-container">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100"
        :page-size="12"
      />
    </div>
  </div>
</template>

<style scoped>
.category-page {
  padding: 20px;
}

.category-header {
  margin-bottom: 20px;
}

.category-info {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.category-filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.video-item {
  margin-bottom: 20px;
}

.pagination-container {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
</style> 