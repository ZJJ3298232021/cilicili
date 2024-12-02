<script setup>
const teamMembers = [
  {
    name: '张三',
    position: '创始人 & CEO',
    avatar: 'https://placeholder.com/150',
    description: '拥有10年互联网行业经验，致力于打造优质的视频分享平台。'
  },
  // 更多团队成员...
]
</script>

<template>
  <div class="about-page">
    <el-card class="about-card">
      <template #header>
        <h1>关于我们</h1>
      </template>
      
      <div class="company-intro">
        <h2>公司简介</h2>
        <p>我们是一家致力于为用户提供优质视频内容的平台，成立于2024年。我们的使命是让优质内容触手可及，让创作者的才华被看见。</p>
      </div>

      <div class="mission-vision">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card>
              <template #header>
                <h3>我们的使命</h3>
              </template>
              <p>让每个人都能轻松获取和分享知识</p>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card>
              <template #header>
                <h3>我们的愿景</h3>
              </template>
              <p>成为全球最受欢迎的视频分享平台</p>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div class="team-section">
        <h2>核心团队</h2>
        <el-row :gutter="20">
          <el-col 
            v-for="member in teamMembers" 
            :key="member.name"
            :span="8"
          >
            <el-card class="member-card">
              <el-avatar 
                :size="100" 
                :src="member.avatar"
              />
              <h3>{{ member.name }}</h3>
              <p class="position">{{ member.position }}</p>
              <p class="description">{{ member.description }}</p>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.about-card {
  margin-bottom: 40px;
}

.company-intro {
  margin-bottom: 40px;
}

.mission-vision {
  margin-bottom: 40px;
}

.team-section {
  margin-top: 40px;
}

.member-card {
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;
}

.position {
  color: #666;
  margin: 10px 0;
}

.description {
  font-size: 14px;
  color: #666;
}

h1, h2, h3 {
  color: #333;
  margin-bottom: 20px;
}
</style> 