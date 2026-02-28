<script setup lang="ts">
import useDetail from './useDetail'
const {
  isHidden,
  companyInfoLoading,
  companyInfoData,
  investmentMatchLoading,
  investmentMatchData,
  futureDevelopLoading,
  futureDevelopData,
  equityInfoLoading,
  equityInfoData,
  relatedOpinionLoading,
  relatedOpinionData,
  otherAttentionLoading,
  otherAttentionData
} = useDetail()
</script>
<template>
  <div class="detail-page">
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
              <var-skeleton v-if="isHidden" :rows="1" loading />
              <p class="main-text" v-else>{{ companyInfoData?.name }}</p>
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
                <var-chip
                  v-for="(tag, index) in companyInfoData?.tag"
                  :key="index"
                  type="primary"
                  size="small"
                >
                  {{ tag }}
                </var-chip>
              </div>
            </var-col>
            <var-col :span="24">
              <var-chip
                block
                type="warning"
                style="
                  justify-content: flex-start;
                  height: auto;
                  padding: 4px;
                  font-size: var(--font-size-sm);
                "
              >
                根据隐私保护政策，企业具体名称和联系方式已做隐藏处理
              </var-chip>
            </var-col>
          </var-row>
        </var-card>
      </var-skeleton>
      <!-- 投资匹配 -->
      <var-skeleton :loading="investmentMatchLoading">
        <var-card title="招商匹配度">{{ investmentMatchData }}</var-card>
      </var-skeleton>
      <!-- 未来发展 -->
      <var-skeleton :loading="futureDevelopLoading">
        <var-card title="未来发展">{{ futureDevelopData }}</var-card>
      </var-skeleton>
      <!-- 股权信息 -->
      <var-skeleton :loading="equityInfoLoading">
        <var-card title="股权情况">{{ equityInfoData }}</var-card>
      </var-skeleton>
      <!-- 相关舆情 -->
      <var-skeleton :loading="relatedOpinionLoading">
        <var-card title="相关舆情">{{ relatedOpinionData }}</var-card>
      </var-skeleton>
      <!-- 其他关注 -->
      <var-skeleton :loading="otherAttentionLoading">
        <var-card title="其他注意事项">{{ otherAttentionData }}</var-card>
      </var-skeleton>
    </var-space>
  </div>
</template>

<style scoped lang="scss">
.detail-page {
  overflow-y: auto;

  .var-col {
    flex-direction: column !important;
    row-gap: 10px;

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
  }
}
</style>
