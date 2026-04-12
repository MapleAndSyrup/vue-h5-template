<script setup lang="ts">
import useLogin from './useLogin'

const {
  loginForm,
  rememberMe,
  loginLoading,
  showRegister,
  registerForm,
  registerLoading,
  handleLogin,
  handleRegister,
  openRegister,
  closeRegister,
  handleForgotPwd
} = useLogin()

const loginFormRef = ref()
const registerFormRef = ref()

async function onLoginSubmit() {
  const valid = await loginFormRef.value?.validate()
  if (valid) handleLogin()
}

async function onRegisterSubmit() {
  const valid = await registerFormRef.value?.validate()
  if (valid) handleRegister()
}
</script>

<template>
  <div class="login-page">
    <div class="login-wrapper">
      <!-- 品牌区 -->
      <div class="brand">
        <var-avatar class="brand-icon" :size="80">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="none">
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
        <h1>招商UNI</h1>
        <p>智能招商 · 链接未来</p>
      </div>

      <!-- 登录卡片 -->
      <div class="login-card">
        <var-form ref="loginFormRef">
          <var-input
            v-model="loginForm.account"
            variant="outlined"
            placeholder="请输入手机号"
            :rules="[(v) => !!v.trim() || '请输入手机号']"
          >
            <template #prepend-icon>
              <var-icon name="email-outline" color="#8c9aa8" :size="20" />
            </template>
          </var-input>

          <var-input
            v-model="loginForm.password"
            variant="outlined"
            type="password"
            placeholder="请输入密码"
            :rules="[(v) => !!v || '密码不能为空', (v) => v.length >= 6 || '密码长度至少6位']"
          >
            <template #prepend-icon>
              <var-icon name="lock-outline" color="#8c9aa8" :size="20" />
            </template>
          </var-input>

          <div class="form-options">
            <var-checkbox v-model="rememberMe" :icon-size="16">记住密码</var-checkbox>
            <button type="button" class="forgot-link" @click="handleForgotPwd">忘记密码？</button>
          </div>

          <var-button
            type="primary"
            block
            :loading="loginLoading"
            class="pill-btn"
            style="margin-bottom: 16px"
            @click="onLoginSubmit"
          >
            登 录
          </var-button>
        </var-form>

        <div class="register-trigger">
          <var-button type="primary" text @click="openRegister">
            <var-icon name="account-plus-outline" :size="14" style="margin-right: 4px" />
            新用户注册
          </var-button>
        </div>

        <div class="legal-note">
          登录即表示同意
          <a href="#">《用户协议》</a>
          及
          <a href="#">《隐私政策》</a>
        </div>
      </div>
    </div>

    <!-- 注册弹层 -->
    <div class="modal-overlay" :class="{ active: showRegister }" @click.self="closeRegister">
      <div class="modal-container">
        <div class="modal-header">
          <h3>
            <var-icon
              name="account-plus-outline"
              :size="20"
              style="margin-right: 6px; vertical-align: middle"
            />
            注册新账号
          </h3>
          <button class="modal-close" type="button" @click="closeRegister">&times;</button>
        </div>

        <div class="modal-body">
          <var-form ref="registerFormRef">
            <var-input
              v-model="registerForm.phone"
              variant="outlined"
              type="tel"
              placeholder="11位手机号码"
              :rules="[(v) => /^1[3-9]\d{9}$/.test(v) || '请输入11位有效手机号']"
            >
              <template #prepend-icon>
                <var-icon name="phone-outline" color="#8c9aa8" :size="20" />
              </template>
            </var-input>

            <var-input
              v-model="registerForm.password"
              variant="outlined"
              type="password"
              placeholder="至少6位"
              :rules="[(v) => !!v || '请设置密码', (v) => v.length >= 6 || '密码长度至少6位']"
            >
              <template #prepend-icon>
                <var-icon name="key-outline" color="#8c9aa8" :size="20" />
              </template>
            </var-input>

            <var-input
              v-model="registerForm.confirmPassword"
              variant="outlined"
              type="password"
              placeholder="再次输入密码"
              :rules="[
                (v) => !!v || '请确认密码',
                (v) => v === registerForm.password || '两次密码不一致'
              ]"
            >
              <template #prepend-icon>
                <var-icon name="check-circle-outline" color="#8c9aa8" :size="20" />
              </template>
            </var-input>

            <var-button
              type="primary"
              block
              :loading="registerLoading"
              class="pill-btn"
              style="margin-top: 8px"
              @click="onRegisterSubmit"
            >
              立即注册
            </var-button>
          </var-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">


@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 24px 16px;
  background: var(--color-body);
}

.login-wrapper {
  width: 100%;
  max-width: 400px;
  animation: fade-up 0.4s ease;
}

.brand {
  margin-bottom: 32px;
  text-align: center;

  .brand-icon {
    margin-bottom: 16px;
    background: linear-gradient(135deg, #1890ff, #40a9ff) !important;
    border-radius: 20px !important;
    box-shadow: 0 12px 20px rgb(24 144 255 / 25%);
  }

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: transparent;
    background: linear-gradient(135deg, #0958d9, #1890ff);
    background-clip: text;
    background-clip: text;
  }

  p {
    margin-top: 6px;
    font-size: 14px;
    color: var(--color-hint);
  }
}

.login-card {
  padding: 32px 24px 28px;
  background: var(--color-surface-container);
  border-radius: 32px;
  box-shadow:
    0 20px 35px -12px rgb(0 0 0 / 12%),
    0 1px 3px rgb(0 0 0 / 2%);
}

.form-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0 20px;
}

.forgot-link {
  padding: 0;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-primary);
  cursor: pointer;
  background: none;
  border: none;
}

/* 胶囊按钮 */
.pill-btn {
  --button-border-radius: 40px;
  --button-normal-height: 52px;

  font-size: 17px;
  font-weight: 600;
}

.register-trigger {
  margin-top: 4px;
  text-align: center;
}

.legal-note {
  padding-top: 16px;
  margin-top: 20px;
  font-size: 12px;
  color: var(--color-hint);
  text-align: center;
  border-top: 1px solid var(--color-outline-variant);

  a {
    color: var(--color-primary);
    text-decoration: none;
  }
}

/* 注册弹层 */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  visibility: hidden;
  align-items: center;
  justify-content: center;
  background: rgb(0 0 0 / 50%);
  opacity: 0;
  backdrop-filter: blur(4px);
  transition:
    visibility 0.2s,
    opacity 0.2s;

  &.active {
    visibility: visible;
    opacity: 1;

    .modal-container {
      transform: scale(1);
    }
  }
}

.modal-container {
  width: 90%;
  max-width: 340px;
  max-height: 90vh;
  overflow: hidden;
  overflow-y: auto;
  background: var(--color-surface-container);
  border-radius: 32px;
  box-shadow: 0 25px 40px rgb(0 0 0 / 20%);
  transform: scale(0.95);
  transition: transform 0.25s ease;
}

.modal-header {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  background: var(--color-surface-container);
  border-bottom: 1px solid var(--color-outline-variant);

  h3 {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    color: var(--color-text);
  }
}

.modal-close {
  font-size: 24px;
  line-height: 1;
  color: var(--color-hint);
  cursor: pointer;
  background: none;
  border: none;

  &:hover {
    color: #ff4d4f;
  }
}

.modal-body {
  padding: 20px 20px 24px;
}

.var-input {
  margin-bottom: 20px;
}
</style>
