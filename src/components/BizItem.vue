<script setup lang="ts">
import { type MockItem } from '@/views/bizPool/mock'

defineProps<{
  mockItem: MockItem
}>()

// 插槽名	说明	参数
// image	自定义图片	-
// default 3.3.7	自定义内容	-
// title	自定义标题	slotClass: string 标题样式
// subtitle	自定义副标题	slotClass: string 副标题样式
// description	自定义描述	slotClass: string 描述样式
// floating-content	漂浮时显示的正文内容	-
// extra	自定义底部内容	-
// close-button	自定义关闭按钮
</script>
<template>
  <var-card class="biz-item" ripple>
    <div class="biz-item-content">
      <var-image :src="mockItem.image" />
    </div>
  </var-card>
</template>

<style scoped lang="scss"></style>
