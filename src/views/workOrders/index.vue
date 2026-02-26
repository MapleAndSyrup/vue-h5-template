<script setup lang="ts">
import useWorkOrders from './useWorkOrders'
const { analysisLoading, analysisList } = useWorkOrders()

const timePeriod = computed(() => analysisList.value?.weekly_plan_analysis?.[0]?.time_period)
</script>
<template>
  <div class="work-orders">
    <div class="work-orders-container">
      <!-- 周计划分析 -->
      <var-skeleton style="padding: 10px" card :rows="0" :loading="analysisLoading">
        <var-card ripple>
          <template #title>
            <var-space
              justify="space-between"
              align="center"
              style="
                padding: var(--card-title-padding);
                margin: var(--card-title-margin);
                color: var(--card-title-color);
              "
            >
              <span>AI周计划分析</span>
              <var-chip type="info">{{ timePeriod }}</var-chip>
            </var-space>
          </template>

          <var-space direction="column">
            <var-paper
              style="display: flex; column-gap: 10px"
              v-for="(item, index) in analysisList?.weekly_plan_analysis"
              :key="index"
            >
              <var-badge type="danger" dot />

              <var-space direction="column">
                <p style="font-size: var(--font-size-lg)">{{ item?.overview }}</p>
                <p style="color: var(-color-info)">{{ item?.details }}</p>
              </var-space>
            </var-paper>
          </var-space>
        </var-card>
      </var-skeleton>

      <var-sticky>
        <nav>
          <p>跟进中的线索</p>

          <ul>
            <var-button v-for="value in 6" :key="value" type="primary">全部</var-button>
          </ul>
        </nav>
      </var-sticky>

      <div class="list"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.work-orders {
  overflow-y: auto;

  .work-orders-container {
    display: flex;
    flex-direction: column;
    width: 100%;

    nav {
      display: flex;
      column-gap: 10px;
      align-items: center;
      width: 100%;
      padding: 10px;
      background: var(--color-body);

      p {
        flex-shrink: 0;
      }

      ul {
        display: flex;
        flex-grow: 1;
        column-gap: 10px;
        min-width: 0;
        padding: 2px 0;
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

    .list {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      padding: 0 10px 10px;
    }
  }
}
</style>
