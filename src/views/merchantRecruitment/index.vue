<script setup lang="ts">
import history from './history.vue'
import container from './container.vue'

const showHistory = ref(false)

const curHistoryId = ref('8x7k9m2p4n5q')

const a = ref('')

const addConversation = () => {
  console.log('新建消息')
}
</script>

<template>
  <div class="merchant-recruitment">
    <history v-model:show="showHistory" v-model:history-id="curHistoryId" />

    <!-- 打开历史 -->
    <var-button class="history-btn" type="primary" round icon-container @click="showHistory = true">
      <var-icon name="history" />
    </var-button>
    <!-- 打开新对话 -->
    <var-button class="add-btn" type="primary" round icon-container @click="addConversation">
      <var-icon name="plus" />
    </var-button>

    <var-chip :round="false" type="primary" block size="large">智能招商助手</var-chip>
    <var-chip :round="false" type="primary" block>为您推荐匹配的招商企业，提高招商效率</var-chip>

    <container />

    <var-paper class="input-box" :elevation="2">
      <var-input v-model="a" textarea :rows="4" />

      <var-button type="primary" round>
        <var-icon style="transform: rotate(180deg)" name="arrow-down" />
      </var-button>
    </var-paper>
  </div>
</template>

<style scoped lang="scss">
.merchant-recruitment {
  display: flex;
  flex-direction: column;

  .history-btn,
  .add-btn {
    position: fixed;
    top: 12px;
    z-index: 100;
  }

  .history-btn {
    right: 20px;
  }

  .add-btn {
    right: 60px;
  }

  :deep(.var-chip) {
    flex-shrink: 0;
  }

  .input-box {
    --field-decorator-standard-normal-margin-top: 0;
    --field-decorator-standard-normal-margin-bottom: 0;
    --input-textarea-height: unset;

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
