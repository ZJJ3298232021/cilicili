<script setup>
import { computed } from 'vue'
import { useVideoStore } from '@/stores/video'
import VideoCard from '@/components/video/VideoCard.vue'

const videoStore = useVideoStore()
const videos = computed(() => videoStore.videos)
</script>

<template>
  <div class="home">
    <el-row :gutter="20">
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
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
}

.video-item {
  margin-bottom: 20px;
}
</style> 