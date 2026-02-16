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
  <var-card
    class="card"
    ripple
    :title="`${mockItem?.hiddenName}(信息已隐藏)`"
    :subtitle="mockItem?.description"
  >
    <template #image>
      <var-image :src="mockItem?.image" />
    </template>

    <div class="chips">
      <var-chip
        v-for="(tag, index) in mockItem?.tags"
        :key="index"
        type="primary"
        plain
        round
        size="small"
      >
        {{ tag }}
      </var-chip>
    </div>

    <template #extra>
      <div class="extra">
        <p>线索ID：{{ mockItem?.id }}</p>

        <var-button text>
          <var-icon name="view" />
          <span style="margin-left: 4px">{{ mockItem?.views }}</span>
        </var-button>

        <var-button text>
          <var-icon name="star-outline" />
          <span style="margin-left: 4px">{{ mockItem?.likes }}</span>
        </var-button>
      </div>
    </template>
  </var-card>
</template>

<style scoped lang="scss">
.card {
  --card-content-padding: 0 10px;
  --card-subtitle-padding: 0 10px;
  --card-footer-padding: 0 10px;
  --card-title-padding: 0 10px;

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .extra {
    display: flex;
    column-gap: 5px;
    align-items: center;
    width: 100%;
    font-size: 12px !important;
    color: #999;

    :deep(.var-button) {
      padding: 0 !important;
    }

    p {
      flex-grow: 1;
      min-width: 0;
    }
  }
}
</style>
