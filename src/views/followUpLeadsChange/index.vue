<script setup lang="ts">
import useFollowUpLeadsChange from './useFollowUpLeadsChange'

const { form, companyLoading, companyList, handleCompanyChange, submitLoading, handleSubmit } =
  useFollowUpLeadsChange()
</script>

<template>
  <div class="follow-up-leads-change">
    <var-form>
      <!-- 选择公司 -->
      <var-select
        v-model="form.company_id"
        placeholder="选择公司"
        variant="outlined"
        :loading="companyLoading"
        @change="handleCompanyChange"
      >
        <var-option
          v-for="item in companyList"
          :key="item.company_id"
          :label="item.company_name"
          :value="item.company_id"
        />
      </var-select>

      <!-- 公司名称 / 线索介绍 / 创建日期：选择公司后展示 -->
      <var-card v-if="form.company_id">
        <var-space direction="column" :size="6">
          <p class="info-label">公司名称</p>
          <p class="info-value">{{ form.company_name }}</p>
          <var-divider />
          <p class="info-label">线索介绍</p>
          <p class="info-value">{{ form.lead_intro }}</p>
          <var-divider />
          <p class="info-label">创建日期</p>
          <p class="info-value">{{ form.create_date }}</p>
        </var-space>
      </var-card>

      <!-- 线索名称 -->
      <var-input v-model="form.lead_name" placeholder="线索名称" variant="outlined" clearable />

      <!-- 当前跟进状态 -->
      <var-input
        v-model="form.current_follow_up_status"
        placeholder="当前跟进状态"
        variant="outlined"
        clearable
      />

      <!-- 下一步跟进节点 -->
      <var-input
        v-model="form.next_follow_up_node"
        placeholder="下一步跟进节点"
        variant="outlined"
        clearable
      />

      <!-- 注意事项 -->
      <var-input
        v-model="form.precautions"
        placeholder="注意事项"
        variant="outlined"
        textarea
        :rows="3"
        clearable
      />

      <!-- 关注用户ID -->
      <var-input
        v-model="form.userid_follow"
        placeholder="多个用户 ID 用英文逗号分隔，例：001,002,003"
        variant="outlined"
        clearable
      />

      <var-button
        type="primary"
        color="linear-gradient(135deg, #1a237e, #3d5afe)"
        size="large"
        :loading="submitLoading"
        @click="handleSubmit"
      >
        提交
      </var-button>
    </var-form>
  </div>
</template>

<style scoped lang="scss">
.follow-up-leads-change {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 16px;
  overflow-y: auto;

  .var-form {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }

  .info-label {
    font-size: 12px;
    color: var(--color-hint);
  }

  .info-value {
    font-size: 14px;
    line-height: 1.6;
    color: var(--color-text);
  }

  .var-button {
    width: 100%;
    margin-top: 8px;
  }
}
</style>
