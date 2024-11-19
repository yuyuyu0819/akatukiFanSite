<template>
    <div>
      <button @click="startDrawing">描画開始</button>
      <div ref="pixiContainer" class="pixi-container"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { Application, Graphics, FederatedPointerEvent } from 'pixi.js';
  
  const pixiContainer = ref<HTMLElement | null>(null);
  let app: Application;
  let drawing = false;
  let rectangle: Graphics | null = null;
  let startX = 0;
  let startY = 0;
  
  const startDrawing = () => {
    drawing = true;
  };
  
  const onMouseDown = (event: FederatedPointerEvent) => {
    if (!drawing) return;
  
    startX = event.global.x;
    startY = event.global.y;
  
    rectangle = new Graphics();
    rectangle.setStrokeStyle({ width: 2, color: 0xff0000, alpha: 1 });
    rectangle.setFillStyle({ color: 0xff700b, alpha: 0.5 });
    rectangle.rect(0, 0, 0, 0);
    rectangle.position.set(startX, startY);
  
    app.stage.addChild(rectangle);
  
    app.stage.on('pointermove', onMouseMove);
    app.stage.on('pointerup', onMouseUp);
  };
  
  const onMouseMove = (event: FederatedPointerEvent) => {
    if (!rectangle) return;
  
    const currentX = event.global.x;
    const currentY = event.global.y;
  
    rectangle.clear();
    rectangle.setStrokeStyle({ width: 2, color: 0xff0000, alpha: 1 });
    rectangle.setFillStyle({ color: 0xff700b, alpha: 0.5 });
    rectangle.rect(0, 0, currentX - startX, currentY - startY);
  };
  
  const onMouseUp = () => {
    if (rectangle) {
      app.stage.off('pointermove', onMouseMove);
      app.stage.off('pointerup', onMouseUp);
      rectangle = null;
    }
    drawing = false;
  };
  
  onMounted(() => {
    app = new Application({
      width: 800,
      height: 600,
      backgroundColor: 0x1099bb,
    });
  
    if (pixiContainer.value) {
      pixiContainer.value.appendChild(app.view);
    } else {
      console.error('pixiContainer is not available.');
    }
  
    // ステージをインタラクティブに設定
    app.stage.interactive = true;
  
    // イベントリスナーをステージに追加
    app.stage.on('pointerdown', onMouseDown);
  });
  </script>
  
  <style scoped>
  .pixi-container {
    width: 800px;
    height: 600px;
    border: 1px solid #000;
    margin-top: 10px;
  }
  
  button {
    margin-bottom: 10px;
  }
  </style>
  