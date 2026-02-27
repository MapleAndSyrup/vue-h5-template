<script setup lang="ts">
import useDetail from './useDetail'
const {
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
        <var-card title="基本信息">{{ companyInfoData }}</var-card>
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
}
</style>
