<script setup lang="ts">
import type {
  CompanyInfoData,
  InvestmentMatchData,
  FutureDevelopData,
  EquityInfoData,
  RelatedOpinionData,
  OtherAttentionData
} from '@/api/types'

import JoTag from '../components/JoTag.vue'
import JoChip from '../components/JoChip.vue'

const companyInfoLoading = inject<Ref<boolean>>('companyInfoLoading')
const companyInfoData = inject<Ref<CompanyInfoData | undefined>>('companyInfoData')

const investmentMatchLoading = inject<Ref<boolean>>('investmentMatchLoading')
const investmentMatchData = inject<Ref<InvestmentMatchData | undefined>>('investmentMatchData')

const futureDevelopLoading = inject<Ref<boolean>>('futureDevelopLoading')
const futureDevelopData = inject<Ref<FutureDevelopData | undefined>>('futureDevelopData')

const equityInfoLoading = inject<Ref<boolean>>('equityInfoLoading')
const equityInfoData = inject<Ref<EquityInfoData | undefined>>('equityInfoData')

const relatedOpinionLoading = inject<Ref<boolean>>('relatedOpinionLoading')
const relatedOpinionData = inject<Ref<RelatedOpinionData | undefined>>('relatedOpinionData')

const otherAttentionLoading = inject<Ref<boolean>>('otherAttentionLoading')
const otherAttentionData = inject<Ref<OtherAttentionData | undefined>>('otherAttentionData')
</script>
<template>
  <var-space direction="column" style="padding: 10px">
    <!-- 公司详情 -->
    <var-skeleton card :rows="0" :loading="companyInfoLoading">
      <var-card title="基本信息">
        <var-divider />

        <var-row :gutter="[10, 10]">
          <var-col :span="12">
            <p>行业领域</p>
            <p class="main-text">{{ companyInfoData?.industry }}</p>
          </var-col>
          <var-col :span="12">
            <p>企业规模</p>
            <p class="main-text">{{ companyInfoData?.company_scale }}</p>
          </var-col>
          <var-col :span="12">
            <p>企业名称</p>
            <var-skeleton :rows="1" loading />
          </var-col>
          <var-col :span="12">
            <p>注册地</p>
            <p class="main-text">{{ companyInfoData?.registered_address }}</p>
          </var-col>
          <var-col :span="12">
            <p>落地需求</p>
            <p class="main-text">{{ companyInfoData?.landing_requirement }}</p>
          </var-col>
          <var-col :span="12">
            <p>投资额度</p>
            <p class="main-text">{{ companyInfoData?.investment_amount }}</p>
          </var-col>
          <var-col :span="24">
            <div style="display: flex; gap: 10px">
              <jo-tag
                v-for="(tag, index) in companyInfoData?.tag"
                :key="index"
                style=" color: #1a237e;background-color: #e8f0fe"
              >
                {{ tag }}
              </jo-tag>
            </div>
          </var-col>
          <var-col :span="24">
            <jo-chip>根据隐私保护政策，企业具体名称和联系方式已做隐藏处理</jo-chip>
          </var-col>
        </var-row>
      </var-card>
    </var-skeleton>
    <!-- 投资匹配 -->
    <var-skeleton :loading="investmentMatchLoading">
      <var-card title="招商匹配度">
        <var-divider />

        <var-row :gutter="[10, 10]">
          <var-col :span="24">
            <p>产业匹配度</p>
            <var-progress line-width="6" :value="investmentMatchData?.industry_match" label />
          </var-col>

          <var-col :span="24">
            <p>政策匹配度</p>
            <var-progress line-width="6" :value="investmentMatchData?.policy_match" label />
          </var-col>

          <var-col :span="24">
            <p>资源匹配度</p>
            <var-progress line-width="6" :value="investmentMatchData?.resource_match" label />
          </var-col>

          <var-col :span="24">
            <div style="display: flex; gap: 10px">
              <jo-tag
                v-for="(tag, index) in investmentMatchData?.tag"
                :key="index"
                style=" color: #1a237e;background-color: #e8f0fe"
              >
                {{ tag }}
              </jo-tag>
            </div>
          </var-col>
        </var-row>
      </var-card>
    </var-skeleton>
    <!-- 未来发展 -->
    <var-skeleton :loading="futureDevelopLoading">
      <var-card title="未来发展">
        <var-divider />
        <var-row :gutter="[10, 10]">
          <var-col :span="24">
            <p>市场前景</p>
            <p class="main-text">{{ futureDevelopData?.market_outlook }}</p>
          </var-col>
          <var-col :span="24">
            <p>技术优势</p>
            <p class="main-text">{{ futureDevelopData?.technical_advantage }}</p>
          </var-col>
          <var-col :span="24">
            <p>扩张计划</p>
            <p class="main-text">{{ futureDevelopData?.expansion_plan }}</p>
          </var-col>
          <var-col :span="24">
            <p>预期产值</p>
            <p class="main-text">{{ futureDevelopData?.expected_output_value }}</p>
          </var-col>
        </var-row>
      </var-card>
    </var-skeleton>
    <!-- 股权信息 -->
    <var-skeleton :loading="equityInfoLoading">
      <var-card title="股权情况">
        <var-divider />
        <var-row :gutter="[10, 10]">
          <var-col :span="24">
            <p>融资阶段</p>
            <p class="main-text">{{ equityInfoData?.funding_stage }}</p>
          </var-col>
          <var-col :span="24">
            <p>主要投资方</p>
            <var-skeleton :rows="1" loading />
          </var-col>
          <var-col :span="24">
            <p>估值范围</p>
            <p class="main-text">{{ equityInfoData?.valuation_range }}</p>
          </var-col>
          <var-col :span="24">
            <p>股权结构</p>
            <var-skeleton :rows="1" loading />
          </var-col>
        </var-row>
      </var-card>
    </var-skeleton>
    <!-- 相关舆情 -->
    <var-skeleton :loading="relatedOpinionLoading">
      <var-card title="相关舆情">
        <var-divider />
        <var-row :gutter="[10, 10]">
          <template v-for="(news, index) in relatedOpinionData?.news_list" :key="index">
            <var-col :span="24">
              <p class="main-text">{{ news?.news_title }}</p>
              <p>{{ news?.time }}·{{ news?.type }}</p>
            </var-col>
            <var-divider v-if="index + 1 < (relatedOpinionData?.news_list?.length ?? 0)" />
          </template>
        </var-row>
      </var-card>
    </var-skeleton>
    <!-- 其他关注 -->
    <var-skeleton :loading="otherAttentionLoading">
      <var-card title="其他注意事项">
        <var-row :gutter="[10, 10]">
          <var-col
            v-for="attention in otherAttentionData?.attention_list.filter(
              ({ serial_number }) => serial_number <= 1
            )"
            :key="attention.serial_number"
            :span="24"
          >
            <p>{{ attention?.attention_dimension }}</p>
            <p class="main-text">{{ attention?.specific_matter }}</p>
          </var-col>

          <var-col :span="24">
            <jo-chip>完整信息需申请高级权限查看</jo-chip>
          </var-col>
        </var-row>
      </var-card>
    </var-skeleton>

    <var-back-top :duration="300" :bottom="100" :right="10" />
  </var-space>
</template>

<style scoped lang="scss">
.var-col {
  --skeleton-row-height: 20px;
  --skeleton-row-border-radius: 4px;

  flex-direction: column !important;

  :deep(.var-skeleton__content) {
    padding: 0;
  }

  :deep(.var-skeleton__section) {
    padding: 0;
  }

  :deep(.var-skeleton__row) {
    margin: 0;
  }

  p {
    font-size: var(--font-size-sm);
  }

  .main-text {
    font-size: var(--font-size-md);
    font-weight: bold;
    color: var(--color-text);
  }

  :deep(.var-chip__text-normal) {
    width: 100%;
  }
}

.var-card {
  --card-title-color: #1a237e;
  --card-border-radius: 16px;

  :deep(.var-card__title) {
    font-weight: bold;
  }
}
</style>
