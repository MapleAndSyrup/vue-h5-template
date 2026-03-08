<script setup lang="ts">
import JoChip from '../components/JoChip.vue'

import { formatDate } from '@/utils/tools'

import useFollowUp from './useFollowUp'

const {
  companyInfoLoading,
  companyInfoData,
  // currentFollowUpNodeLoading,
  // currentFollowUpNodeData,
  aiFollowUpSuggestionLoading,
  aiFollowUpSuggestionData,
  historicalFollowUpNodesLoading,
  historicalFollowUpNodesData,
  checkDetail
} = useFollowUp()

const active = ref('综合分析')

const tabs = ['综合分析', '策略建议', '风险提示']

// 按分号拆分文本，过滤空项
const splitLines = (text: string) =>
  text
    .split('；')
    .map((s) => s.trim())
    .filter(Boolean)

const tabsData = computed(() => {
  if (!aiFollowUpSuggestionData.value) return undefined
  const {
    local_investment_analysis,
    enterprise_analysis,
    industry_adaptability_analysis,
    suggested_investment_strategy,
    core_negotiation_strategy,
    next_follow_up_focus,
    potential_risk_tips,
    risk_response_suggestions
  } = aiFollowUpSuggestionData.value
  return [
    {
      label: '综合分析',
      list: [
        { label: '地方招商情况分析', value: local_investment_analysis },
        { label: '企业情况分析', value: enterprise_analysis },
        { label: '行业适配度分析', value: industry_adaptability_analysis },
        { label: '建议招商策略', value: suggested_investment_strategy }
      ]
    },
    {
      label: '策略建议',
      list: [
        { label: '核心谈判策略', value: core_negotiation_strategy },
        { label: '下一步跟进重点', value: next_follow_up_focus }
      ]
    },
    {
      label: '风险提示',
      list: [
        { label: '潜在风险提示', value: potential_risk_tips },
        { label: '风险应对建议', value: risk_response_suggestions }
      ]
    }
  ]
})

const rows = computed(() => {
  if (!companyInfoData.value) return undefined
  const { responsible_representative } = companyInfoData.value
  return [
    { label: '联系人：', value: responsible_representative },
    { label: '联系方式：', value: '138****8888' },
    { label: '来源渠道：', value: '2024数字经济峰会 · 2024-05-10' },
    { label: '负责代表：', value: '李思源 · 招商二部' }
  ]
})
</script>

<template>
  <div class="follow-up">
    <!-- 公司基本信息 -->
    <var-skeleton :loading="companyInfoLoading" card :rows="0">
      <var-card :title="companyInfoData?.name" :subtitle="companyInfoData?.company_intro">
        <var-row :gutter="[10, 10]">
          <template v-for="{ label, value } in rows" :key="label">
            <var-col :span="6">
              <span style="font-size: 14px; color: #666">{{ label }}</span>
            </var-col>
            <var-col :span="18">
              <span style="font-size: 14px; font-weight: 500; color: #1a1a1a">{{ value }}</span>
            </var-col>
          </template>
        </var-row>
      </var-card>
    </var-skeleton>

    <!-- 当前跟进节点 -->
    <!-- <var-skeleton card :rows="0" :loading="currentFollowUpNodeLoading">
      <var-card title="当前跟进节点"></var-card>
    </var-skeleton> -->

    <!-- AI跟进分析建议 -->
    <var-skeleton card :rows="0" :loading="aiFollowUpSuggestionLoading">
      <var-card title="当前跟进节点">
        <template #title>
          <var-space
            direction="column"
            style="padding: var(--card-title-padding); margin: var(--card-title-margin)"
          >
            <p style="font-size: 16px; font-weight: 600; color: #1a1a1a">AI跟进分析建议</p>
            <span style="font-size: 12px; color: #999">基于企业数据和区域招商情况生成</span>
          </var-space>
        </template>

        <var-space style="flex-flow: column" direction="column">
          <var-tabs elevation color="#fff" v-model:active="active">
            <var-tab v-for="(item, index) in tabs" :key="index" :name="item">{{ item }}</var-tab>
          </var-tabs>

          <var-tabs-items v-model:active="active">
            <var-tab-item v-for="{ label, list } in tabsData" :name="label" :key="label">
              <var-space direction="column">
                <template v-for="{ label, value } in list" :key="label">
                  <span style="font-weight: 600; color: var(--color-primary)">{{ label }}</span>
                  <p v-for="(line, i) in splitLines(value)" :key="i" style="color: #333">
                    {{ line }}
                  </p>
                </template>
              </var-space>
            </var-tab-item>
          </var-tabs-items>
        </var-space>
      </var-card>
    </var-skeleton>

    <!-- 历史跟进记录 -->
    <var-skeleton card :rows="0" :loading="historicalFollowUpNodesLoading">
      <var-card title="历史跟进记录">
        <var-space direction="column">
          <jo-chip
            v-for="historical in historicalFollowUpNodesData?.historical_nodes"
            :key="historical?.time"
          >
            <template #title>{{ historical?.node_overview }}</template>
            <template #subtitle>
              <var-space justify="space-between">
                <span>{{ historical?.contact_person }}</span>
                <span>{{ formatDate(historical?.time) }}</span>
              </var-space>
            </template>
            <p>{{ historical?.node_details }}</p>
          </jo-chip>
        </var-space>
      </var-card>
    </var-skeleton>

    <div class="space" justify="space-between">
      <var-button type="primary" text outline size="large" @click="checkDetail($router)">
        查看线索详情
      </var-button>
      <var-button size="large" type="primary">节点更新</var-button>
      <!-- TODO -->
      <!-- <var-button size="large" type="success">会议上传</var-button> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.follow-up {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px;
  overflow-y: auto;
  background: #e6eff3;

  .var-tabs {
    padding: 0;
    box-shadow: none;
  }

  .space {
    display: flex;
    column-gap: 10px;
    align-items: center;
    width: 100%;

    .var-button {
      width: calc((100% - 20px) / 3);
    }
  }
}
</style>
