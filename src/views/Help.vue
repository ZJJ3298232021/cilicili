<template>
  <div class="help-page">
    <el-card>
      <template #header>
        <div class="help-header">
          <h1>帮助中心</h1>
          <el-input
            v-model="searchQuery"
            placeholder="搜索问题"
            :prefix-icon="Search"
            class="search-input"
          />
        </div>
      </template>

      <el-tabs>
        <el-tab-pane 
          v-for="category in categories" 
          :key="category.name"
          :label="category.label"
        >
          <el-collapse>
            <el-collapse-item
              v-for="(qa, index) in category.qas"
              :key="index"
              :title="qa.question"
            >
              {{ qa.answer }}
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const searchQuery = ref('')

const categories = [
  {
    name: 'account',
    label: '账号相关',
    qas: [
      {
        question: '如何注册账号？',
        answer: '点击网站右上角的"注册"按钮，按照提示填写相关信息即可完成注册。'
      },
      {
        question: '忘记密码怎么办？',
        answer: '点击登录页面的"忘记密码"链接，通过邮箱验证重置密码。'
      }
    ]
  },
  {
    name: 'video',
    label: '视频相关',
    qas: [
      {
        question: '如何上传视频？',
        answer: '登录后点击右上角的"投稿"按钮，选择要上传的视频文件即可。'
      },
      {
        question: '视频格式有什么要求？',
        answer: '支持MP4、AVI、MOV等常见视频格式，建议视频分辨率不低于720p。'
      }
    ]
  },
  {
    name: 'other',
    label: '其他问题',
    qas: [
      {
        question: '如何成为创作者？',
        answer: '任何注册用户都可以成为创作者，只需要上传原创视频内容即可。'
      },
      {
        question: '遇到侵权内容怎么办？',
        answer: '可以点击视频下方的"举报"按钮，选择侵权类型进行举报。'
      }
    ]
  }
]
</script>

<style scoped>
.help-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.help-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-input {
  width: 300px;
}

h1 {
  margin: 0;
  color: #333;
}

.el-collapse-item {
  margin-bottom: 10px;
}
</style> 