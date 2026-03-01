<script setup lang="ts">
import useDetail from './useDetail'
const { currentComponent } = useDetail()
</script>
<template>
  <div class="detail-page">
    <component :is="currentComponent" />
  </div>
</template>

<style scoped lang="scss">
.detail-page {
  overflow-y: auto;
}
</style>
