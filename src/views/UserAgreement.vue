<template>
  <div class="agreement-page">
    <el-card>
      <template #header>
        <h1>用户协议</h1>
      </template>

      <div class="agreement-content">
        <section v-for="(section, index) in sections" :key="index">
          <h2>{{ section.title }}</h2>
          <p>{{ section.content }}</p>
        </section>
      </div>
    </el-card>
  </div>
</template>

<script setup>
const sections = [
  {
    title: '1. 服务条款的确认和接纳',
    content: '欢迎您使用我们的服务！本协议是您与本平台之间关于使用本平台服务所订立的协议。'
  },
  {
    title: '2. 服务内容',
    content: '本平台为用户提供视频上传、观看、分享等服务。具体服务内容由本平台根据实际情况提供。'
  },
  {
    title: '3. 用户个人信息保护',
    content: '本平台重视用户个人信息的保护，保护用户个人信息是本平台的基本原则之一。'
  },
  {
    title: '4. 用户注册',
    content: '用户注册时应当提供真实、准确、完整的个人资料，并及时更新。'
  },
  {
    title: '5. 用户行为规范',
    content: '用户在使用本平台服务时应遵守中华人民共和国相关法律法规。'
  }
]
</script>

<style scoped>
.agreement-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.agreement-content {
  line-height: 1.6;
}

section {
  margin-bottom: 30px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

h2 {
  color: #333;
  margin-bottom: 15px;
  font-size: 18px;
}

p {
  color: #666;
  margin-bottom: 15px;
  text-indent: 2em;
}
</style> 