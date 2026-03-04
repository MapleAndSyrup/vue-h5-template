<script setup lang="ts">
// import history from './history.vue'
import conversation from './conversation.vue'
import useMerchantRecruitment from './useMerchantRecruitment'

const {
  // showHistory,
  inputRef,
  chatStreamParams,
  isStreaming,
  adjustHeight,
  // addConversation,
  sendMessage,
  stopGenerate
  // handleChangeId
} = useMerchantRecruitment()
</script>

<template>
  <div class="merchant-recruitment">
    <!-- TODO -->
    <!-- <Teleport to="#toolbar-right" defer>
      <var-button type="primary" round icon-container @click="addConversation">
        <var-icon name="plus" />
      </var-button>
      <var-button type="primary" round icon-container @click="showHistory = true">
        <var-icon name="history" />
      </var-button>
    </Teleport> -->

    <!-- TODO -->
    <!-- <history
      v-model:show="showHistory"
      :history-id="chatStreamParams.session_id"
      @change-id="handleChangeId"
    /> -->

    <header>
      <strong style="font-size: 24px">智能招商助手</strong>
      <p style="font-size: 14px">为您推荐匹配的招商企业，提高招商效率</p>
    </header>

    <conversation />

    <var-paper class="input-box" :elevation="2">
      <var-input
        ref="inputRef"
        v-model="chatStreamParams.message"
        textarea
        :rows="1"
        :disabled="isStreaming"
        @input="adjustHeight"
      />

      <!-- 流式输出中：停止按钮 -->
      <var-button v-if="isStreaming" type="primary" round @click="stopGenerate">
        <var-icon name="radio-marked" />
      </var-button>
      <!-- 正常状态：发送按钮 -->
      <var-button v-else type="primary" round @click="sendMessage">
        <var-icon style="transform: rotate(180deg)" name="arrow-down" />
      </var-button>
    </var-paper>
  </div>
</template>

<style scoped lang="scss">
.merchant-recruitment {
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    padding: 10px;
    color: var(--app-bar-text-color);
    background: linear-gradient(135deg, #1a6dff 0%, #0d4cd3 100%);

    strong {
      line-height: normal;
    }
  }

  .input-box {
    --field-decorator-standard-normal-margin-top: 0;
    --field-decorator-standard-normal-margin-bottom: 0;

    display: flex;
    flex-shrink: 0;
    column-gap: 10px;
    align-items: flex-end;
    padding: 10px;
    margin: 10px;

    .var-input {
      flex-grow: 1;
      min-width: 0;

      :deep(.var-field-decorator__line) {
        display: none;
      }
    }
  }
}
</style>
