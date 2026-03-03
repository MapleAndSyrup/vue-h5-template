<script setup lang="ts">
import type { ChatBusinessSearchItem } from '@/api/types'

const props = defineProps<{
  bizItem: ChatBusinessSearchItem
}>()

const hiddenName = computed(() => {
  const name = props.bizItem.company_name
  if (name.length <= 4) return name
  return `${name.slice(0, 2)}****${name.slice(-2)}(信息已隐藏)`
})

const tags = computed(() => {
  const _tags = props.bizItem?.tag
  return [..._tags, props?.bizItem?.region, props?.bizItem?.industry]
})
</script>
<template>
  <var-card class="card" ripple :title="hiddenName" :subtitle="bizItem?.lead_intro">
    <template #image>
      <var-image style="height: 160px" fit="cover" :src="bizItem?.pic_url" />
    </template>

    <div class="chips">
      <var-chip v-for="(tag, index) in tags" :key="index" type="primary" plain round size="small">
        {{ tag }}
      </var-chip>
    </div>

    <!-- <template #extra>
      <div class="extra">
        <p>线索ID：{{ bizItem?.id }}</p>

        <var-button text>
          <var-icon name="view" />
          <span style="margin-left: 4px">{{ bizItem?.views }}</span>
        </var-button>

        <var-button text>
          <var-icon name="star-outline" />
          <span style="margin-left: 4px">{{ bizItem?.likes }}</span>
        </var-button>
      </div>
    </template> -->
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
