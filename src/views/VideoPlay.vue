<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useVideoStore } from '@/stores/video'
import VideoCard from '@/components/video/VideoCard.vue'

const route = useRoute()
const videoStore = useVideoStore()
const videoInfo = ref(null)

onMounted(() => {
  const video = videoStore.getVideoById(route.params.id)
  if (video) {
    videoInfo.value = video
  }
})

// 获取推荐视频（排除当前视频）
const recommendVideos = computed(() => {
  return videoStore.videos.filter(v => v.id !== Number(route.params.id))
})
</script>

<template>
  <div class="video-play-page">
    <el-row :gutter="20">
      <!-- 左侧视频播放区域 -->
      <el-col :span="18">
        <el-card class="video-player-card" v-if="videoInfo">
          <video 
            controls 
            class="video-player"
            :src="videoInfo.video"
          ></video>
          
          <div class="video-info">
            <h1>{{ videoInfo.title }}</h1>
            <div class="video-stats">
              <span>{{ videoInfo.views }} 播放</span>
              <span>{{ videoInfo.likes }} 点赞</span>
              <span>{{ videoInfo.createTime }}</span>
            </div>
          </div>

          <div class="uploader-info">
            <el-avatar :size="50"></el-avatar>
            <div class="uploader-detail">
              <h3>{{ videoInfo.uploader }}</h3>
              <el-button type="primary" size="small">关注</el-button>
            </div>
          </div>

          <div class="video-description">
            <p>{{ videoInfo.description }}</p>
          </div>
        </el-card>
      </el-col>

      <!-- 右侧推荐视频列表 -->
      <el-col :span="6">
        <el-card class="recommend-card">
          <template #header>
            <div class="recommend-header">
              <h3>相关推荐</h3>
            </div>
          </template>
          <div class="recommend-list">
            <VideoCard 
              v-for="video in recommendVideos" 
              :key="video.id" 
              :video="video"
              class="recommend-item"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.video-play-page {
  padding: 20px;
}

.video-player-card {
  margin-bottom: 20px;
}

.video-player {
  width: 100%;
  aspect-ratio: 16/9;
  background: #000;
}

.video-info {
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.video-info h1 {
  font-size: 20px;
  margin-bottom: 10px;
}

.video-stats {
  display: flex;
  gap: 20px;
  color: #666;
  font-size: 14px;
}

.uploader-info {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.uploader-detail {
  display: flex;
  align-items: center;
  gap: 20px;
}

.uploader-detail h3 {
  margin: 0;
}

.video-description {
  padding: 20px 0;
  color: #666;
  line-height: 1.6;
}

.recommend-card {
  position: sticky;
  top: 80px;
}

.recommend-header h3 {
  margin: 0;
}

.recommend-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.recommend-item {
  /* 调整推荐视频卡片在侧边栏的样式 */
  :deep(.video-card) {
    margin-bottom: 0;
  }
  
  :deep(.video-cover) {
    height: 120px;
  }
}
</style> 