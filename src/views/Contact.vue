<template>
  <div class="contact-page">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="contact-info">
          <template #header>
            <h2>联系方式</h2>
          </template>
          
          <div class="info-list">
            <div class="info-item">
              <el-icon><Location /></el-icon>
              <span>地址：北京市朝阳区xxx街道xxx号</span>
            </div>
            <div class="info-item">
              <el-icon><Phone /></el-icon>
              <span>电话：400-xxx-xxxx</span>
            </div>
            <div class="info-item">
              <el-icon><Message /></el-icon>
              <span>邮箱：contact@example.com</span>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card class="contact-form">
          <template #header>
            <h2>在线留言</h2>
          </template>
          
          <el-form :model="form" label-width="80px">
            <el-form-item label="姓名">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="form.email" />
            </el-form-item>
            <el-form-item label="主题">
              <el-input v-model="form.subject" />
            </el-form-item>
            <el-form-item label="留言内容">
              <el-input
                v-model="form.message"
                type="textarea"
                :rows="4"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Location, Phone, Message } from '@element-plus/icons-vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // 处理表单提交
  ElMessage.success('留言已提交')
}
</script>

<style scoped>
.contact-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.info-list {
  padding: 20px 0;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: #666;
}

.contact-form {
  height: 100%;
}
</style> 