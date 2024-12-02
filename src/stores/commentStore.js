import { defineStore } from 'pinia'

export const useCommentStore = defineStore('comment', {
  state: () => ({
    comments: []
  }),
  
  actions: {
    addComment(comment) {
      this.comments.push({
        id: Date.now(),
        ...comment,
        date: new Date().toLocaleString()
      })
    },
    
    deleteComment(commentId) {
      this.comments = this.comments.filter(comment => comment.id !== commentId)
    }
  }
}) 