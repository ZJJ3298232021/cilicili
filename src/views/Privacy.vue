<template>
  <div class="privacy-page">
    <el-card>
      <template #header>
        <h1>隐私政策</h1>
      </template>

      <div class="privacy-content">
        <el-timeline>
          <el-timeline-item
            v-for="(policy, index) in policies"
            :key="index"
            :timestamp="policy.title"
            placement="top"
          >
            <el-card>
              <p>{{ policy.content }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-card>
  </div>
</template>

<script setup>
const policies = [
  {
    title: '信息收集',
    content: '我们收集的信息包括但不限于：用户提供的个人信息、使用服务时产生的信息等。'
  },
  {
    title: '信息使用',
    content: '我们使用收集的信息用于提供、维护、改进我们的服务，开发新的服务等。'
  },
  {
    title: '信息共享',
    content: '除非得到您的同意，我们不会与第三方分享您的个人信息。'
  },
  {
    title: '信息安全',
    content: '我们采取各种安全措施保护您的个人信息安全。'
  },
  {
    title: 'Cookie的使用',
    content: '我们使用Cookie和类似技术来提供更好的服务体验。'
  }
]
</script>

<style scoped>
.privacy-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.privacy-content {
  padding: 20px;
}

p {
  color: #666;
  line-height: 1.6;
}
</style> 