<script setup lang="ts">
const searchVal = ref('')
const curTab = ref('全部行业')

const tabs = ['全部行业', '科技互联网', '制造业', '金融投资', '新能源']
</script>
<template>
  <div class="biz-pool">
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

    <div class="scroll-container">
      <div class="list">
        <div v-for="value in 100" :key="value">{{ value }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.biz-pool {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
  padding: 30px 0;

  :deep(.var-input) {
    flex-shrink: 0;
    width: calc(100% - 60px);
  }

  .tabs {
    display: flex;
    flex-shrink: 0;
    column-gap: 20px;
    align-items: center;
    width: 100%;
    padding: 4px 30px;
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

  .scroll-container {
    flex-grow: 1;
    width: 100%;
    min-height: 0;
    overflow-y: auto;

    .list {
      width: 100%;
      padding: 0 30px;
    }
  }
}
</style>
