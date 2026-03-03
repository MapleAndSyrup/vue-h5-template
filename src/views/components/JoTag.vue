<script setup lang="ts"></script>
<template>
  <div class="jo-tag">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.jo-tag {
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  color: white;
  background-color: rgb(255 255 255 / 20%);
  border-radius: 20px;
}
</style>
