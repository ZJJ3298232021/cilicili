import { defineStore } from 'pinia'
import { getVideoFirstFrame } from '@/utils/video'

export const useVideoStore = defineStore('video', {
  state: () => ({
    videos: [
      {
        id: 1,
        title: '【编程】Vue3入门教程',
        video: new URL('@/assets/1.mp4', import.meta.url).href,
        uploader: '技术达人',
        views: 12000,
        likes: 666,
        duration: '12:30',
        description: 'Vue3入门教程，带你从零开始学习Vue3，掌握Vue3核心概念和基本使用方法。',
        createTime: '2024-03-21',
        cover: null
      },
      {
        id: 2,
        title: '2024年最新Web开发趋势',
        video: new URL('@/assets/2.mp4', import.meta.url).href,
        uploader: '前端大咖',
        views: 8500,
        likes: 452,
        duration: '15:45',
        description: '2024年Web开发新趋势解析，包括最新技术栈、开发工具和最佳实践。',
        createTime: '2024-03-20',
        cover: null
      }
    ],
    currentVideo: null
  }),
  
  actions: {
    async initVideoCovers() {
      for (const video of this.videos) {
        if (!video.cover) {
          video.cover = await getVideoFirstFrame(video.video)
        }
      }
    },

    setCurrentVideo(videoId) {
      this.currentVideo = this.videos.find(v => v.id === videoId)
    },
    
    getVideoById(id) {
      return this.videos.find(v => v.id === Number(id))
    }
  }
}) 