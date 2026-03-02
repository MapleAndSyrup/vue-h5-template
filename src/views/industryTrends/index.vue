<script setup lang="ts">
const curTab = ref('全部行业')
const tabs = ['全部行业', '科技互联网', '制造业', '金融投资', '新能源']

import useIndustryTrends from './useIndustryTrends'
const { todayDate, aiExpressData, aiExpressLoading } = useIndustryTrends()
</script>
<template>
  <div class="industry-trends">
    <var-chip :round="false" type="primary" block size="large">行业动态</var-chip>
    <var-chip :round="false" type="primary" block>实时追踪产业资讯，把握招商先机</var-chip>

    <div style="display: flex; flex-direction: column">
      <var-skeleton card :rows="0" style="padding: 10px" :loading="aiExpressLoading">
        <var-card
          variant="filled"
          style="

            --card-filled-background: var(--color-primary);
            --card-content-color: var(--color-on-primary);
          "
        >
          <template #title>
            <var-space
              style="
                padding: var(--card-title-padding);
                margin: var(--card-title-margin);
                color: var(--color-on-primary);
              "
            >
              <span>AI今日行业动态快报</span>
            </var-space>
          </template>

          <template #subtitle>
            <var-space style="padding: var(--card-title-padding); color: var(--color-on-primary)">
              <span style="font-size: var(--font-size-md)">{{ todayDate }}</span>
            </var-space>
          </template>

          <var-space direction="column">
            <p>{{ aiExpressData?.summary }}</p>

            <var-chip
              block
              type="info"
              style="
                flex-direction: column;
                justify-content: flex-start;
                height: auto;
                padding: 4px 8px;
              "
            >
              <p style="font-weight: bold; color: var(--color-primary)">招商视角分析：</p>
              <p>
                {{ aiExpressData?.investment_perspective_analysis }}
              </p>
            </var-chip>
          </var-space>
        </var-card>
      </var-skeleton>

      <var-sticky>
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
      </var-sticky>
    </div>
  </div>
</template>

<style scoped lang="scss">
.industry-trends {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  overflow-y: auto;

  .var-chip {
    flex-shrink: 0;
  }

  .tabs {
    box-sizing: border-box;
    display: flex;
    column-gap: 20px;
    align-items: center;
    width: 100%;
    max-width: 100%;
    padding: 10px;
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
}
</style>
