<template>
    <div>
      <button @click="showModal">モーダルを開く</button>
      <commonModal :visible="isModalVisible" @close="hideModal">
        <h1>モーダルのタイトル</h1>
        <p>ここにモーダルの内容を入れます。</p>
      </commonModal>
    </div>
    <div class="goods d-flex justify-content-center">
    <h1>Event Comming Soon!</h1>
  </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import commonModal from '../../components/commonModal.vue';
  
  const isModalVisible = ref(false);
  
  const showModal = () => {
    isModalVisible.value = true;
  };
  
  const hideModal = () => {
    isModalVisible.value = false;
  };
  </script>
  