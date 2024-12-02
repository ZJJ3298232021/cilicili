<script setup>
const currentYear = new Date().getFullYear()

const footerLinks = [
  { text: '关于我们', url: '/about' },
  { text: '用户协议', url: '/agreement' },
  { text: '隐私政策', url: '/privacy' },
  { text: '联系我们', url: '/contact' },
  { text: '帮助中心', url: '/help' }
]
</script>

<template>
  <el-footer class="footer">
    <div class="footer-content">
      <div class="footer-links">
        <router-link
          v-for="(link, index) in footerLinks" 
          :key="index"
          :to="link.url"
          class="footer-link"
        >
          {{ link.text }}
        </router-link>
      </div>
      
      <div class="footer-copyright">
        <p>© {{ currentYear }} 哔哩哔哩 B站 版权所有</p>
        <p>浙ICP备0000000号-1</p>
      </div>
    </div>
  </el-footer>
</template>

<style scoped>
.footer {
  background-color: #f6f7f8;
  padding: 40px 0;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-links {
  margin-bottom: 20px;
}

.footer-link {
  color: #666;
  text-decoration: none;
  margin: 0 15px;
  font-size: 14px;
}

.footer-link:hover {
  color: #00a1d6;
}

.footer-copyright {
  color: #999;
  font-size: 12px;
}

.footer-copyright p {
  margin: 5px 0;
}
</style> 