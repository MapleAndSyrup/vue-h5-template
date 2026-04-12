<script setup lang="ts">
import useLayout from './useLayout'
const { isMainPage, appBarTitle, bottomBarList, curPath, handleChange, handleLogout } = useLayout()
</script>
<template>
  <div class="layout-page">
    <!-- 主页面 -->
    <RouterView v-slot="{ Component }" v-if="isMainPage">
      <var-app-bar
        safe-area-top
        :title="appBarTitle"
        color="linear-gradient(135deg, #1a6dff 0%, #0d4cd3 100%)"
      >
        <template #right>
          <div id="toolbar-right" style="display: flex; gap: 8px; align-items: center"></div>

          <var-menu>
            <var-button type="primary" round icon-container text>
              <var-icon name="format-list-checkbox" :size="24" />
            </var-button>

            <template #menu>
              <var-cell>
                <var-button
                  type="primary"
                  text
                  @click="$router.push('/sub/follow-up-leads-change')"
                >
                  跟进记录
                </var-button>
              </var-cell>
              <var-cell>
                <var-button type="primary" text @click="$router.push('/sub/user-info')">
                  个人信息
                </var-button>
              </var-cell>
              <var-cell>
                <var-button type="primary" text @click="handleLogout">退出登录</var-button>
              </var-cell>
            </template>
          </var-menu>
        </template>

        <template #content>
          <div id="app-bar-content"></div>
        </template>
      </var-app-bar>
      <component class="container" :is="Component" />
      <var-bottom-navigation safe-area v-model:active="curPath" @change="handleChange">
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
      <var-app-bar
        safe-area-top
        :title="appBarTitle"
        color="var(--color-surface-container)"
        text-color="var(--color-primary)"
      >
        <template #left>
          <var-button
            color="transparent"
            text-color="var(--color-primary)"
            round
            text
            @click="$router.back()"
          >
            <var-icon color="var(--color-primary)" name="chevron-left" :size="24" />
          </var-button>
        </template>
      </var-app-bar>
      <component class="container" :is="Component" />
      <div style="padding-bottom: env(safe-area-inset-bottom)"></div>
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

  :deep(.var-app-bar__title) {
    font-size: 22px;
    font-weight: bold;
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
