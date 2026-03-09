<script setup lang="ts">
// import JoCard from '../components/JoCard.vue'
// import JoChip from '../components/JoChip.vue'

const chipsType = ['primary', 'success', 'danger', 'warning', 'info'] as const

import useIndustryTrends from './useIndustryTrends'
const {
  tagsRef,
  tags,
  // aiExpressLoading,
  // aiExpressData,
  // todayDate,
  industryNewsLoading,
  industryNewsParams,
  industryNewsData,
  handleChangeTag
} = useIndustryTrends()
</script>
<template>
  <div class="industry-trends">
    <Teleport to="#app-bar-content" defer>
      <div
        style="
          display: flex;
          flex-shrink: 0;
          flex-direction: column;
          row-gap: 10px;
          padding: 0 10px 10px;
          color: var(--app-bar-text-color);
        "
      >
        <strong style="font-size: 24px">行业动态</strong>
        <p style="font-size: 14px">实时追踪产业资讯，把握招商先机</p>
      </div>
    </Teleport>

    <div style="display: flex; flex-direction: column">
      <!-- <var-skeleton card :rows="0" style="padding: 10px" :loading="aiExpressLoading">
        <jo-card>
          <template #title>
            <span>AI今日行业动态快报</span>
          </template>

          <template #subtitle>
            <span>{{ todayDate }}</span>
          </template>

          <template v-if="aiExpressData?.express_list?.length">
            <template v-for="item in aiExpressData?.express_list" :key="item?.id">
              <p>{{ item?.summary }}</p>

              <jo-chip>
                <template #title>招商视角分析：</template>

                <span>{{ item?.investment_perspective_analysis }}</span>
              </jo-chip>
            </template>
          </template>

          <p v-else>暂无内容</p>
        </jo-card>
      </var-skeleton> -->

      <var-sticky style="width: 100%">
        <div ref="tagsRef" class="tags">
          <var-button
            v-for="{ label, value } in tags"
            type="primary"
            :key="label"
            @click="handleChangeTag(value, $event)"
            :text="industryNewsParams.tag !== value"
            :outline="industryNewsParams.tag !== value"
          >
            {{ label }}
          </var-button>
        </div>
      </var-sticky>

      <var-skeleton card :rows="0" style="padding: 10px" :loading="industryNewsLoading">
        <var-space direction="column">
          <template v-if="industryNewsData?.news_list?.length">
            <var-card v-for="news in industryNewsData?.news_list" :key="news?.id">
              <template #title>
                <p style="padding: var(--card-title-padding); margin: var(--card-title-margin)">
                  {{ news?.title }}
                </p>
              </template>

              <template #subtitle>
                <var-space
                  align="center"
                  style="padding: var(--card-subtitle-padding); margin: var(--card-subtitle-margin)"
                >
                  <var-chip :type="chipsType[1]" size="small">{{ news?.category }}</var-chip>
                  <span style="font-size: 13px">{{ news?.publish_date }}</span>
                </var-space>
              </template>

              <var-space direction="column">
                <p>{{ news?.content }}</p>

                <var-space>
                  <var-chip v-for="tag in news?.tags" type="primary" :key="tag" size="mini">
                    {{ tag }}
                  </var-chip>
                </var-space>

                <var-row :gutter="[10, 10]">
                  <var-col :span="12">
                    <var-space direction="column">
                      <span>影响主体</span>
                      <p style="color: #222">
                        {{ news?.related_entities?.join('、') }}
                      </p>
                    </var-space>
                  </var-col>

                  <var-col :span="12">
                    <var-space direction="column">
                      <span>涉及概念</span>
                      <p style="color: #222">{{ news?.concepts?.join('、') }}</p>
                    </var-space>
                  </var-col>

                  <var-col :span="12">
                    <var-space direction="column">
                      <span>来源</span>
                      <p style="color: #222">{{ news?.source }}</p>
                    </var-space>
                  </var-col>

                  <var-col :span="12">
                    <var-space direction="column">
                      <span>招商相关性</span>
                      <p style="color: #222">{{ news?.relevance }}</p>
                    </var-space>
                  </var-col>
                </var-row>
              </var-space>

              <template #extra>
                <p>来源：{{ news?.source_info }}</p>
              </template>
            </var-card>
          </template>

          <p style="width: 100%; text-align: center" v-else>暂无内容</p>
        </var-space>
      </var-skeleton>
    </div>
    <var-back-top :duration="300" :bottom="100" :right="10" />
  </div>
</template>

<style scoped lang="scss">
.industry-trends {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  overflow-y: auto;

  .tags {
    display: flex;
    flex-shrink: 0;
    column-gap: 20px;
    align-items: center;
    width: 100%;
    padding: 20px 10px;
    overflow-x: auto;

    /* 隐藏滚动条 */
    scrollbar-width: none; /* Firefox */
    background: var(--color-body);
    -ms-overflow-style: none; /* IE/Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome/Safari/Webkit */
    }

    .var-button {
      flex-shrink: 0;
      border-radius: 30px;
    }
  }

  .var-card {
    border-radius: 20px;

    :deep(.var-card__container) {
      padding-bottom: 0;
    }

    :deep(.var-card__footer) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 15px;
      padding-bottom: 15px;
      font-size: 13px;
      color: #777;
      background-color: #f9f9f9;
      border-top: 1px solid #eee;
    }
  }
}
</style>
