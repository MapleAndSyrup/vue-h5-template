<script setup lang="ts"></script>
<template>
  <div class="jo-card">
    <div class="jo-card-title">
      <slot name="title"></slot>
    </div>

    <div class="jo-card-subtitle">
      <slot name="subtitle"></slot>
    </div>

    <div class="jo-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.jo-card {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, #fff 0%, #f0f7ff 100%);
  border-left: 5px solid var(--color-primary);
  border-radius: 16px;
  box-shadow: 0 4px 15px rgb(26 109 255 / 15%);

  .jo-card-title {
    font-size: 18px;
    font-weight: 700;
    color: var(--color-primary);
  }

  .jo-card-subtitle {
    font-size: 14px;
    color: #666;
  }

  .jo-card-content {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    font-size: 15px;
    line-height: 1.5;
    color: #444;
  }
}
</style>
