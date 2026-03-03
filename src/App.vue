<script setup lang="ts">
import { StyleProvider, Themes } from '@varlet/ui'

onMounted(() => {
  // 检测系统主题并设置
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  StyleProvider(mediaQuery.matches ? Themes.dark : null)

  // 监听系统主题变化
  mediaQuery.addEventListener('change', (e) => {
    StyleProvider(e.matches ? Themes.dark : null)
  })
})
</script>

<template>
  <router-view />
</template>
<script setup lang="ts"></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: var(--color-text);
  color-scheme: var(--color-scheme);
  background-color: var(--color-body);
  transition:
    background-color 0.25s,
    color 0.25s;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
