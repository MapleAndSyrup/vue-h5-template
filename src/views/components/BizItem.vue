<script setup lang="ts">
import { type MockItem } from '@/views/bizPool/mock'

defineProps<{
  mockItem: MockItem
}>()
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
