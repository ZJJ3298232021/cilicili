<script setup>
import { VideoPlay, View, Star, User } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  video: {
    type: Object,
    required: true
  }
})

const handleClick = () => {
  router.push(`/video/${props.video.id}`)
}
</script>

<template>
  <el-card class="video-card" :body-style="{ padding: '0px' }" @click="handleClick">
    <div class="video-cover-wrapper">
      <el-image 
        :src="video.cover" 
        class="video-cover"
        v-loading="!video.cover"
        :element-loading-text="'生成封面中...'"
      />
      <span class="video-duration">{{ video.duration }}</span>
      <div class="video-mask">
        <div class="mask-content">
          <div class="play-icon">
            <el-icon :size="40"><VideoPlay /></el-icon>
          </div>
          <div class="video-stats">
            <span class="stat-item">
              <el-icon><View /></el-icon>
              {{ video.views }}
            </span>
            <span class="stat-item">
              <el-icon><Star /></el-icon>
              {{ video.likes }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="video-info">
      <h3 class="video-title">{{ video.title }}</h3>
      <div class="video-meta">
        <span class="uploader">
          <el-icon><User /></el-icon>
          {{ video.uploader }}
        </span>
        <span class="views">
          <el-icon><View /></el-icon>
          {{ video.views }}播放
        </span>
      </div>
    </div>
  </el-card>
</template>

<style scoped>
.video-card {
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}

.video-cover-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
}

.video-cover {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
  transition: transform 0.3s;
}

.video-card:hover .video-cover {
  transform: scale(1.05);
}

.video-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-card:hover .video-mask {
  opacity: 1;
}

.mask-content {
  text-align: center;
  color: #fff;
}

.play-icon {
  margin-bottom: 10px;
  cursor: pointer;
  transition: transform 0.2s;
}

.play-icon:hover {
  transform: scale(1.1);
}

.mask-content .video-stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 14px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.video-duration {
  position: absolute;
  right: 5px;
  bottom: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 2px 4px;
  border-radius: 2px;
  font-size: 12px;
  z-index: 2;
}

.video-info {
  padding: 10px;
}

.video-title {
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.video-meta {
  margin-top: 8px;
  display: flex;
  gap: 15px;
  color: #999;
  font-size: 12px;
}

.uploader, .views {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style> 