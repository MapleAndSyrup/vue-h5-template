<script setup lang="ts">
import useLayout from './useLayout'
const { isMainPage, appBarTitle, bottomBarList, curPath, handleChange } = useLayout()
</script>
<template>
  <div class="layout-page">
    <!-- 主页面 -->
    <RouterView v-slot="{ Component }" v-if="isMainPage">
      <var-app-bar safe-area-top :title="appBarTitle" />
      <component class="container" :is="Component" />
      <var-bottom-navigation v-model:active="curPath" @change="handleChange">
        <var-bottom-navigation-item
          v-for="bar in bottomBarList"
          :key="bar.id"
          :name="bar.id"
          :label="bar.label"
          :icon="bar.icon"
        />
      </var-bottom-navigation>
    </RouterView>
    <!-- 子页面 -->
    <RouterView v-else v-slot="{ Component }">
      <var-app-bar safe-area-top :title="appBarTitle" />
      <component class="container" :is="Component" />
    </RouterView>
  </div>
</template>

<style scoped lang="scss">
.layout-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  :deep(.var-app-bar) {
    --app-bar-title-padding: 0 10px;
    --app-bar-left-gap: 0;

    flex-shrink: 0;
  }

  .bar-content {
    overflow: hidden;
    transition: all 0.3s;
  }

  :deep(.container) {
    flex-grow: 1;
    width: 100%;
    min-height: 0;
  }

  :deep(.var-bottom-navigation) {
    flex-shrink: 0;
  }
}
</style>
