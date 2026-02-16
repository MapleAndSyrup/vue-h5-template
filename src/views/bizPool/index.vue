<script setup lang="ts">
import BizItem from '@/components/BizItem.vue'
import { fullLeadMockData } from './mock'

const searchVal = ref('')
const curTab = ref('全部行业')

const tabs = ['全部行业', '科技互联网', '制造业', '金融投资', '新能源']

const showSearchIcon = ref(false)
const inputRef = ref<HTMLElement | null>(null)
const bizPoolRef = ref<HTMLElement | null>(null)
const varInputRef = ref<any>(null)

// 检测 var-input 是否被 tabs 遮挡
const handleScroll = (e: Event) => {
  if (!inputRef.value) return
  const scrollTop = (e.target as HTMLElement).scrollTop
  const offsetTop = inputRef.value.offsetTop
  showSearchIcon.value = scrollTop >= offsetTop + inputRef.value.offsetHeight
}

// 点击搜索图标回到顶部并 focus 输入框
const handleSearchIconClick = () => {
  // 滚动到顶部
  if (bizPoolRef.value) {
    bizPoolRef.value.scrollTo({ top: 0, behavior: 'smooth' })
  }
  // focus 输入框
  setTimeout(() => {
    varInputRef.value?.focus()
  }, 300)
}
</script>
<template>
  <div ref="bizPoolRef" class="biz-pool" @scroll="handleScroll">
    <var-icon
      v-show="showSearchIcon"
      name="magnify"
      class="search-icon"
      color="#fff"
      @click="handleSearchIconClick"
    />
    <div class="scroll-content">
      <div ref="inputRef" style=" flex-shrink: 0;width: calc(100% - 20px)">
        <var-input
          ref="varInputRef"
          v-model="searchVal"
          variant="outlined"
          placeholder="请输入文本"
          clearable
        >
          <template #append-icon>
            <var-icon style="margin-left: 10px" name="magnify" />
          </template>
        </var-input>
      </div>

      <div class="tabs">
        <var-button
          v-for="tab in tabs"
          :type="curTab === tab ? 'primary' : undefined"
          :key="tab"
          @click="curTab = tab"
        >
          {{ tab }}
        </var-button>
      </div>

      <div class="list">
        <BizItem v-for="item in fullLeadMockData" :key="item.id" :mock-item="item" />
      </div>

      <var-back-top :duration="300" :bottom="100" :right="10" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.biz-pool {
  position: relative;
  overflow-y: scroll;

  .search-icon {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 100;
  }

  .scroll-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 0;

    .tabs {
      position: sticky;
      top: 0;
      z-index: 10;
      display: flex;
      flex-shrink: 0;
      column-gap: 20px;
      align-items: center;
      width: 100%;
      padding: 20px 10px;
      overflow-x: auto;

      /* 隐藏滚动条 */
      scrollbar-width: none; /* Firefox */
      background: var(--color-body);
      -ms-overflow-style: none; /* IE/Edge */
      &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
      }

      .var-button {
        flex-shrink: 0;
      }
    }

    .list {
      column-gap: 16px;
      width: 100%;
      padding: 0 10px 10px;

      /* 瀑布流布局 */
      column-count: 2;

      > * {
        margin-bottom: 20px;
        break-inside: avoid;
      }
    }
  }
}
</style>
