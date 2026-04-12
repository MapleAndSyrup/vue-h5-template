<script setup lang="ts">
import useMerchantRecruitmentStore from './store'

const store = useMerchantRecruitmentStore()

// 格式化时间：YYYY-MM-DD HH:mm:ss
const formatTime = (ts: number): string => {
  const d = new Date(ts)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

// 消息列表容器 ref，用于自动滚动到底部
const listRef = ref<HTMLElement>()

const scrollToBottom = () => {
  nextTick(() => {
    if (listRef.value) {
      listRef.value.scrollTop = listRef.value.scrollHeight
    }
  })
}

// 监听消息变化，自动滚动到底部
watch(() => store.messages, scrollToBottom, { deep: true })

onMounted(() => {
  scrollToBottom()
})
</script>

<template>
  <div ref="listRef" class="conversation">
    <div class="message-list">
      <div v-for="msg in store.messages" :key="msg.id" class="message-item" :class="msg.role">
        <!-- AI 消息：左侧头像 -->
        <var-avatar v-if="msg.role === 'ai'" class="avatar" size="36">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
            <circle cx="12" cy="2" r="1.2" fill="white" />
            <path d="M12 3.2V5.5" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <rect x="1" y="9" width="2.5" height="5" rx="1.25" fill="white" />
            <rect x="20.5" y="9" width="2.5" height="5" rx="1.25" fill="white" />
            <rect x="3" y="5.5" width="18" height="12" rx="2.5" fill="white" />
            <circle cx="8.5" cy="10" r="2" fill="#0d4cd3" />
            <circle cx="15.5" cy="10" r="2" fill="#0d4cd3" />
            <rect x="7" y="14" width="10" height="2" rx="1" fill="#0d4cd3" />
          </svg>
        </var-avatar>

        <!-- 用户消息：右侧头像 -->
        <var-avatar v-else class="avatar" size="36">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
            <circle cx="12" cy="8" r="4.5" fill="white" />
            <path d="M3 21c0-4.97 4.03-9 9-9s9 4.03 9 9z" fill="white" />
          </svg>
        </var-avatar>

        <div class="message-body">
          <div class="message-meta">
            <span class="name">{{ msg.role === 'ai' ? 'AI' : '我' }}</span>
            <span class="time">{{ formatTime(msg.timestamp) }}</span>
          </div>

          <div class="message-content">
            <!-- streaming 且内容为空：显示 loading -->
            <template v-if="msg.status === 'streaming' && msg.content === ''">
              <var-loading style="display: inline-block" type="cube" color="var(--color-primary)" />
            </template>
            <!-- 有内容时显示文本 -->
            <template v-else>
              <span class="text">{{ msg.content }}</span>
              <!-- streaming 且有内容：末尾显示光标动画 -->
              <span v-if="msg.status === 'streaming'" class="cursor"></span>
            </template>
          </div>
        </div>
      </div>

      <!-- 空状态提示 -->
      <div v-if="store.messages.length === 0" class="empty-tip">
        <var-icon name="robot-outline" size="48" color="#ccc" />
        <p>向 AI 发送消息，开始对话</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.conversation {
  flex-grow: 1;
  width: 100%;
  min-height: 0;
  padding: 10px;
  overflow-y: auto;

  .message-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .empty-tip {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
    height: 200px;
    font-size: 14px;
    color: var(--color-hint);
  }

  .message-item {
    display: flex;
    gap: 10px;
    align-items: flex-start;

    // AI 消息：左对齐
    &.ai {
      flex-direction: row;

      .message-body {
        align-items: flex-start;
      }

      .message-content {
        color: var(--color-text);
        background: var(--color-surface-container);
        border-radius: 0 12px 12px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 8%);
      }
    }

    // 用户消息：右对齐
    &.user {
      flex-direction: row-reverse;

      .message-body {
        align-items: flex-end;
      }

      .message-meta {
        flex-direction: row-reverse;
        justify-content: flex-start;
      }

      .message-content {
        color: #fff;
        background: linear-gradient(135deg, #1a6dff 0%, #0d4cd3 100%);
        border-radius: 12px 0 12px 12px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 8%);
      }
    }

    .avatar {
      flex-shrink: 0;
      font-size: 12px;
      font-weight: bold;
      background: linear-gradient(135deg, #1a6dff 0%, #0d4cd3 100%) !important;
    }

    .message-body {
      display: flex;
      flex-direction: column;
      gap: 4px;
      max-width: calc(100% - 56px);
    }

    .message-meta {
      display: flex;
      gap: 8px;
      align-items: center;

      .name {
        font-size: 12px;
        font-weight: 600;
        color: var(--color-hint);
      }

      .time {
        font-size: 11px;
        color: var(--color-hint);
      }
    }

    .message-content {
      padding: 10px 12px;
      font-size: 14px;
      line-height: 1.6;
      color: var(--color-text);
      overflow-wrap: anywhere;
      white-space: pre-wrap;

      .text {
        display: inline;
      }

      // 流式输出光标动画
      .cursor {
        display: inline-block;
        width: 2px;
        height: 14px;
        margin-left: 2px;
        vertical-align: middle;
        background: var(--color-primary);
        animation: blink 0.8s step-end infinite;
      }
    }
  }
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>
