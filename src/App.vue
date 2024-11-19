<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="d-flex justify-content-between">
      <div>
        <RouterLink to="/" class="me-2">暁月アオ</RouterLink>
        <RouterLink to="/admin/login" class="me-2">管理者ログイン</RouterLink>
      </div>
      <div>
        <RouterLink to="/user/news" class="me-5">News</RouterLink>
        <RouterLink to="/user/goods" class="me-5">goods</RouterLink>
        <RouterLink to="/user/schedule" class="me-5">schedule</RouterLink>
        <RouterLink to="/user/event" class="">Event</RouterLink>
        <!-- <RouterLink to="/user/fanclub" class="me-2">FanClub</RouterLink> -->
        <!-- <RouterLink to="/pixi">pixi</RouterLink> -->
      </div>
      <div>
        <RouterLink to="/user/login" class="me-2">ログイン</RouterLink>
      </div>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  position: fixed;
  top: 0; /* 画面上部に固定 */
  width: 100%; /* 横幅を画面全体に */
  background-color: #f8f9fa; /* 背景色 */
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 少し影をつける */
  z-index: 1000; /* 他の要素より前面に表示 */
}

main {
  margin-top: 60px; /* ヘッダーの高さ分の余白を追加 */
}
</style>
