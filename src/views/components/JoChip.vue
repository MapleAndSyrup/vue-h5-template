<script setup lang="ts">
import type { CSSProperties } from 'vue'

const props = defineProps<{ type?: 'warning' }>()

const curStyle = computed<CSSProperties>(() => {
  if (props?.type === 'warning')
    return {
      borderLeft: '3px solid #ffa726',
      background: '#fff8e1'
    }

  return {
    borderLeft: '3px solid var(--color-primary)'
  }
})

const slot = useSlots()
</script>
<template>
  <div class="jo-chip" :style="curStyle">
    <div v-if="slot?.title" class="jo-chip-title">
      <slot name="title"></slot>
    </div>

    <div v-if="slot?.subtitle" class="jo-chip-subtitle">
      <slot name="subtitle"></slot>
    </div>

    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.jo-chip {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px;
  font-size: 15px;
  line-height: 1.5;
  color: #444;
  background-color: rgb(26 109 255 / 10%);
  border-radius: 10px;

  .jo-chip-title {
    font-weight: bolder;
  }

  .jo-chip-subtitle {
    font-size: 12px;
    color: #999;
  }
}
</style>
