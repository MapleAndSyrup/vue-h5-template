<script setup lang="ts">
import useUserInfo from './useUserInfo'

const { userStore, isEditing, pageLoading, saveLoading, form, startEdit, cancelEdit, handleSave } =
  useUserInfo()

const formRef = ref()

async function onSave() {
  const valid = await formRef.value?.validate()
  if (valid) handleSave()
}

/** 用户姓名首字作为头像文字 */
const avatarText = computed(() => {
  const name = userStore.userInfo.name
  return name ? name.charAt(0).toUpperCase() : '?'
})

const roleLabel: Record<string, string> = {
  admin: '管理员',
  user: '普通用户'
}
</script>

<template>
  <div class="user-info-page">
    <var-skeleton :loading="pageLoading" card :rows="4">
      <!-- 头像区 -->
      <div class="avatar-section">
        <var-avatar :size="72" color="var(--color-primary)" class="avatar">
          {{ avatarText }}
        </var-avatar>
        <p class="avatar-name">{{ userStore.userInfo.name || '—' }}</p>
        <p class="avatar-role">
          {{ roleLabel[userStore.userInfo.role ?? ''] ?? userStore.userInfo.role ?? '—' }}
        </p>
      </div>

      <!-- 查看模式 -->
      <var-card v-if="!isEditing">
        <template #title>
          <div
            class="card-header"
            style="padding: var(--card-title-padding); margin: var(--card-title-margin)"
          >
            <span>基本信息</span>
            <var-button type="primary" text @click="startEdit">编辑</var-button>
          </div>
        </template>

        <var-divider />

        <div class="info-rows">
          <div class="info-row">
            <span class="info-label">手机号</span>
            <span class="info-value">{{ userStore.userInfo.phone || '—' }}</span>
          </div>
          <var-divider />
          <div class="info-row">
            <span class="info-label">姓名</span>
            <span class="info-value">{{ userStore.userInfo.name || '—' }}</span>
          </div>
          <var-divider />
          <div class="info-row">
            <span class="info-label">角色</span>
            <span class="info-value">
              {{ roleLabel[userStore.userInfo.role ?? ''] ?? userStore.userInfo.role ?? '—' }}
            </span>
          </div>
          <var-divider />
          <div class="info-row" style="border-bottom: none">
            <span class="info-label">到期时间</span>
            <span class="info-value">{{ userStore.userInfo.expire_time || '—' }}</span>
          </div>
        </div>
      </var-card>

      <!-- 编辑模式 -->
      <var-card v-else title="修改信息">
        <var-divider />

        <var-form ref="formRef" class="edit-form">
          <var-input
            :model-value="userStore.userInfo.phone"
            variant="outlined"
            label="手机号"
            readonly
          >
            <template #prepend-icon>
              <var-icon name="phone-outline" color="#8c9aa8" :size="18" />
            </template>
          </var-input>

          <var-input
            v-model="form.name"
            variant="outlined"
            label="姓名"
            placeholder="不填则不修改"
            clearable
          >
            <template #prepend-icon>
              <var-icon name="account-outline" color="#8c9aa8" :size="18" />
            </template>
          </var-input>

          <var-input
            v-model="form.password"
            variant="outlined"
            label="新密码"
            type="password"
            placeholder="不填则不修改，至少6位"
            clearable
            :rules="[(v) => !v || v.length >= 6 || '密码长度至少6位']"
          >
            <template #prepend-icon>
              <var-icon name="lock-outline" color="#8c9aa8" :size="18" />
            </template>
          </var-input>

          <var-input
            v-model="form.confirmPassword"
            variant="outlined"
            label="确认新密码"
            type="password"
            placeholder="再次输入新密码"
            clearable
            :rules="[
              (v) => !form.password || !!v || '请确认新密码',
              (v) => !form.password || v === form.password || '两次密码不一致'
            ]"
          >
            <template #prepend-icon>
              <var-icon name="check-circle-outline" color="#8c9aa8" :size="18" />
            </template>
          </var-input>

          <div class="btn-row">
            <var-button size="large" class="btn-cancel" @click="cancelEdit">取消</var-button>
            <var-button
              type="primary"
              size="large"
              class="btn-save"
              :loading="saveLoading"
              @click="onSave"
            >
              保存
            </var-button>
          </div>
        </var-form>
      </var-card>
    </var-skeleton>
  </div>
</template>

<style scoped lang="scss">
.user-info-page {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  min-height: 100%;
  padding: 10px;
  overflow-y: auto;
  background: #e6eff3;
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 16px;

  .avatar {
    font-size: 28px;
    font-weight: 700;
    box-shadow: 0 8px 20px rgb(26 109 255 / 30%);
  }

  .avatar-name {
    margin-top: 12px;
    font-size: 20px;
    font-weight: 600;
    color: #1a237e;
  }

  .avatar-role {
    margin-top: 4px;
    font-size: 13px;
    color: #7a8a9a;
  }
}

.var-card {
  --card-title-color: #1a237e;
  --card-border-radius: 16px;

  :deep(.var-card__title) {
    font-weight: bold;
  }
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #1a237e;
}

.info-rows {
  display: flex;
  flex-direction: column;
}

.info-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;

  .info-label {
    font-size: 14px;
    color: #7a8a9a;
  }

  .info-value {
    max-width: 60%;
    font-size: 14px;
    font-weight: 500;
    color: #1a237e;
    text-align: right;
    word-break: break-all;
  }
}

.edit-form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.btn-row {
  display: flex;
  column-gap: 12px;
  margin-top: 8px;

  .btn-cancel {
    --button-border-radius: 40px;

    flex: 1;
  }

  .btn-save {
    --button-border-radius: 40px;

    flex: 1;
  }
}
</style>
