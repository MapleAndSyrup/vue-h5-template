<script setup lang="ts">
import BizItem from '@/components/BizItem.vue'
import { fullLeadMockData } from './mock'

const searchVal = ref('')
const curTab = ref('全部行业')

const tabs = ['全部行业', '科技互联网', '制造业', '金融投资', '新能源']
</script>
<template>
  <div class="biz-pool">
    <div class="scroll-content">
      <var-input v-model="searchVal" variant="outlined" placeholder="请输入文本" clearable>
        <template #append-icon>
          <var-icon style="margin-left: 10px" name="magnify" />
        </template>
      </var-input>

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
  overflow-y: scroll;

  .scroll-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0 0;

    :deep(.var-input) {
      flex-shrink: 0;
      width: calc(100% - 60px);
    }

    .tabs {
      display: flex;
      flex-shrink: 0;
      column-gap: 20px;
      align-items: center;
      width: calc(100% - 60px);
      padding: 30px 0;
      overflow-x: auto;

      /* 隐藏滚动条 */
      scrollbar-width: none; /* Firefox */
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
      padding: 0 30px 30px;

      /* 瀑布流布局 */
      column-count: 2;

      > * {
        margin-bottom: 20px;
        break-inside: avoid;
      }

      :deep(.var-card__container) {
        padding: 0;
      }

      :deep(.var-card__content) {
        padding: 0;
        margin: 0;
      }
    }
  }
}
</style>
