<script setup lang="ts">
import { useVModel, useDebounceFn } from '@vueuse/core'
import { historyList } from './mock'

const props = defineProps<{
  show: boolean
  historyId: string
}>()
const emits = defineEmits<{
  (e: 'update:show', val: boolean): void
  (e: 'changeId', val: string): void
}>()
const show = useVModel(props, 'show', emits)

// 滚动容器 ref
const contentContainerRef = ref<HTMLDivElement | null>(null)

// 打开弹窗 - 根据 historyId 滚动到对应位置
const handlePopupOpen = async () => {
  // 还原到全部对话
  active.value = CONVERSION_ENUM.ALL_CONVERSION
  if (!props.historyId) return
  await nextTick()
  scrollToHistoryItem(props.historyId)
}

// 滚动到指定历史记录
const scrollToHistoryItem = useDebounceFn((id: string) => {
  const container = contentContainerRef.value
  if (!container) return
  const targetEl = container.querySelector(`[data-history-id="${id}"]`)
  if (!targetEl) return
  // 考虑 history-list 的 10px padding，滚动到距离顶部 10px 的位置
  const scrollTop = (targetEl as HTMLElement).offsetTop - 10
  container.scrollTo({ top: scrollTop, behavior: 'smooth' })
}, 100)

// 关闭弹窗
const handlePopupClose = () => {
  // 还原
  active.value = CONVERSION_ENUM.ALL_CONVERSION
}

enum CONVERSION_ENUM {
  /** 全部对话 */
  ALL_CONVERSION = 'allConversion',
  /** 重点对话 */
  IMPORTANT_CONVERSION = 'importantConversion'
}
// 对话tab
const conversionTab = [
  { label: '全部对话', name: CONVERSION_ENUM.ALL_CONVERSION },
  { label: '重点对话', name: CONVERSION_ENUM.IMPORTANT_CONVERSION }
]
// 当前选中的 tab
const active = ref<CONVERSION_ENUM>(CONVERSION_ENUM.ALL_CONVERSION)
// 历史列表
const filledConversionList = computed(() => {
  return [
    { list: historyList, name: CONVERSION_ENUM.ALL_CONVERSION },
    { list: historyList.filter((i) => i.isImportant), name: CONVERSION_ENUM.IMPORTANT_CONVERSION }
  ]
})

const handleClickHistory = (id: string) => {
  emits('changeId', id)
  show.value = false
}
</script>

<template>
  <var-popup v-model:show="show" position="left" @open="handlePopupOpen" @close="handlePopupClose">
    <div class="popup-content">
      <var-tabs
        class="tabs"
        v-model:active="active"
        elevation
        color="var(--color-primary)"
        active-color="var(--color-on-primary)"
        inactive-color="var(--color-on-info)"
      >
        <var-tab v-for="{ label, name } in conversionTab" :key="name" :name="name">
          {{ label }}
        </var-tab>
      </var-tabs>

      <div ref="contentContainerRef" class="content-container">
        <var-tabs-items v-model:active="active">
          <var-tab-item v-for="{ name, list } in filledConversionList" :key="name" :name="name">
            <div class="history-list">
              <var-card
                v-for="item in list"
                :key="item.id"
                :data-history-id="item.id"
                :title="item.label"
                :subtitle="item.time"
                ripple
                :variant="item.id === historyId ? 'outlined' : 'filled'"
                @click="handleClickHistory(item.id)"
              >
                <template #extra v-if="item.isImportant">
                  <var-button text round type="primary">
                    <var-icon name="star" />
                    已标记
                  </var-button>
                </template>
              </var-card>
            </div>
          </var-tab-item>
        </var-tabs-items>
      </div>
    </div>
  </var-popup>
</template>

<style scoped lang="scss">
.popup-content {
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 100%;

  .tabs {
    --tabs-padding: 0;

    flex-shrink: 0;
  }

  .content-container {
    flex-grow: 1;
    min-height: 0;
    overflow-y: auto;

    .history-list {
      --card-footer-margin: 0px 0 0px 0;
      --card-padding: 0 0 4px 0;
      --card-outline-color: var(--color-primary);

      display: flex;
      flex-direction: column;
      row-gap: 10px;
      width: 100%;
      padding: 10px;
    }
  }
}
</style>
