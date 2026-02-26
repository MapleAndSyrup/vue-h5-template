<script setup lang="ts">
import useWorkOrders from './useWorkOrders'
const { pageLoading, analysisList } = useWorkOrders()

const timePeriod = computed(() => analysisList.value?.weekly_plan_analysis?.[0]?.time_period)
</script>
<template>
  <div class="work-orders">
    <div class="work-orders-container">
      <var-card title="aas">
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
        <var-space>
          <var-paper v-for="(item, index) in analysisList?.weekly_plan_analysis">
            {{ item }}
          </var-paper>
        </var-space>
      </var-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.work-orders {
  padding: 10px;
  overflow-y: auto;

  .work-orders-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .var-card {
  }
}
</style>
