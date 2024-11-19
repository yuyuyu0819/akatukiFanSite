<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">×</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits,computed } from 'vue';
  
  const props = defineProps<{
    visible: boolean;
  }>();
  
  const emit = defineEmits<{
    (e: 'close'): void;
  }>();
  
  const isVisible = computed(() => props.visible);
  
  const closeModal = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    position: relative;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  </style>
  