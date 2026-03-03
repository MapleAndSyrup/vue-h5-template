<script setup lang="ts">
import JoCard from '../components/JoCard.vue'
import JoChip from '../components/JoChip.vue'

import useWorkOrders from './useWorkOrders'
const { analysisLoading, analysisList, followUpLeadsLoading, followUpLeadsData, handleToDetail } =
  useWorkOrders()

const timePeriod = computed(() => analysisList.value?.weekly_plan_analysis?.[0]?.time_period)
</script>
<template>
  <div class="work-orders">
    <var-space direction="column">
      <!-- 周计划分析 -->
      <var-skeleton style="padding: 10px" card :rows="0" :loading="analysisLoading">
        <jo-card>
          <template #title>
            <var-space justify="space-between" align="center">
              <span>AI周计划分析</span>
              <var-chip>{{ timePeriod }}</var-chip>
            </var-space>
          </template>

          <var-space direction="column">
            <jo-chip v-for="(item, index) in analysisList?.weekly_plan_analysis" :key="index">
              <template #title>
                <var-space align="center">
                  <var-badge type="warning" dot />
                  <span style="font-size: 20px; color: #000">{{ item?.overview }}</span>
                </var-space>
              </template>

              <var-space :wrap="false" align="center">
                <var-badge style="opacity: 0" type="warning" dot />
                <span>{{ item?.details }}</span>
              </var-space>
            </jo-chip>
          </var-space>
        </jo-card>
      </var-skeleton>

      <var-sticky>
        <nav>
          <p style=" font-size: 24px; font-weight: 700;color: var(--color-primary)">跟进中的线索</p>

          <!-- <ul>
            <var-button v-for="value in 6" :key="value" type="primary">全部</var-button>
          </ul> -->
        </nav>
      </var-sticky>

      <var-skeleton card :loading="followUpLeadsLoading">
        <var-space direction="column" style="padding: 0 10px 10px">
          <!-- 有数据时显示卡片 -->
          <var-card
            v-for="item in followUpLeadsData?.follow_up_leads"
            :key="item?.lead_name"
            :title="item?.lead_name"
          >
            <var-space class="lead-content" direction="column">
              <span>线索简述</span>
              <p>{{ item?.lead_intro }}</p>
              <span>当前跟进情况</span>
              <p>{{ item?.current_follow_up_status }}</p>
              <span>下一跟进节点</span>
              <jo-chip type="warning">{{ item?.next_follow_up_node }}</jo-chip>
              <span>注意事项</span>
              <p>{{ item?.precautions }}</p>
            </var-space>

            <template #extra>
              <var-space style="width: 100%" justify="space-between" align="center">
                <span style="font-size: var(--font-size-md)">创建于:{{ item?.create_date }}</span>

                <var-button type="primary" @click="handleToDetail(followUpLeadsData?.company_id!)">
                  查看详情
                </var-button>
              </var-space>
            </template>
          </var-card>
        </var-space>
      </var-skeleton>
    </var-space>

    <var-back-top :duration="300" :bottom="100" :right="10" />
  </div>
</template>

<style scoped lang="scss">
.work-orders {
  overflow-y: auto;

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

  .lead-content {
    p {
      color: var(--color-text);
    }
  }

  .var-card {
    --card-border-radius: 16px;

    :deep(.var-card__title) {
      font-weight: bold;
    }
  }
}
</style>
