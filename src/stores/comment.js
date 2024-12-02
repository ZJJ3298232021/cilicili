import { defineStore } from 'pinia'

export const useCommentStore = defineStore('comment', {
  state: () => ({
    comments: []
  }),
  
  actions: {
    addComment(videoId, content) {
      this.comments.push({
        id: Date.now(),
        videoId,
        content,
        user: useUserStore().currentUser,
        createTime: new Date().toLocaleString(),
        likes: 0
      })
    },
    
    likeComment(commentId) {
      const comment = this.comments.find(c => c.id === commentId)
      if (comment) comment.likes++
    }
  }
}) 