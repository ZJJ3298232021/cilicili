export const getVideoFirstFrame = (videoUrl) => {
  return new Promise((resolve) => {
    const video = document.createElement('video')
    video.src = videoUrl
    video.crossOrigin = 'anonymous'
    video.currentTime = 0.1 // 设置到视频开始后的一小段时间，避免黑屏
    
    video.addEventListener('loadeddata', () => {
      const canvas = document.createElement('canvas')
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      
      const ctx = canvas.getContext('2d')
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      
      const frameUrl = canvas.toDataURL('image/jpeg')
      resolve(frameUrl)
    })
  })
} 