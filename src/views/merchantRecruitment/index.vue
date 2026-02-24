<script setup lang="ts">
import history from './history.vue'
import conversation from './conversation.vue'

const showHistory = ref(false)

const curHistoryId = ref('8x7k9m2p4n5q')

const addConversation = () => {
  console.log('新建消息')
}

const inputVal = ref('')
const inputRef = ref()
// 自动调整高度
const adjustHeight = () => {
  // 获取 var-input 内部的 textarea 元素
  const el = inputRef.value?.$el?.querySelector('textarea') as HTMLTextAreaElement | undefined
  if (!el) return

  // 临时设置以获取真实 scrollHeight
  el.style.height = 'auto'
  el.style.overflowY = 'hidden'

  // 计算高度：在 100px ~ 200px 之间
  let height = el.scrollHeight
  height = Math.max(height, 32) // 最小 100px
  height = Math.min(height, 400) // 最大 200px

  el.style.height = height + 'px'
  // 如果内容超过 200px，显示滚动条
  el.style.overflowY = el.scrollHeight > 200 ? 'auto' : 'hidden'
}

// 初始化高度
onMounted(() => {
  adjustHeight()
})
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

    <conversation />

    <var-paper class="input-box" :elevation="2">
      <var-input ref="inputRef" v-model="inputVal" textarea :rows="1" @input="adjustHeight" />

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
