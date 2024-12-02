<script setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheSidebar from '@/components/layout/TheSidebar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import { useVideoStore } from '@/stores/video'
import { onMounted } from 'vue'

const videoStore = useVideoStore()

onMounted(async () => {
  await videoStore.initVideoCovers()
})
</script>

<template>
  <div class="app-wrapper">
    <TheHeader class="app-header" />
    <div class="main-container">
      <TheSidebar class="app-sidebar" />
      <div class="main-content">
        <el-main>
          <router-view />
        </el-main>
        <TheFooter />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
}

.main-container {
  margin-top: 60px;
  display: flex;
  flex: 1;
}

.app-sidebar {
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  background: #fff;
  z-index: 999;
}

.main-content {
  flex: 1;
  margin-left: 200px;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
}

.el-main {
  flex: 1;
  padding: 20px;
  background-color: #f5f7fa;
}
</style>
