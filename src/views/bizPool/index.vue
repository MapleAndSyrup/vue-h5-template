<script setup lang="ts">
import useBizPool from './useBizPool'
const {
  tags,
  listLoading,
  chatBusinessSearchParams,
  chatBusinessSearchData,
  varInputRef,
  bizPoolRef,
  inputRef,
  tagsRef,
  showSearchIcon,
  getChatBusinessSearch,
  handleChangeTag,
  handleToDetail,
  handleScroll,
  handleSearchIconClick,
  handleSearch
} = useBizPool()

import BizItem from '@/views/components/BizItem.vue'
</script>
<template>
  <div ref="bizPoolRef" class="biz-pool" @scroll="handleScroll">
    <Teleport v-if="showSearchIcon" to="#toolbar-right">
      <var-icon name="magnify" @click="handleSearchIconClick" />
    </Teleport>

    <div class="scroll-content">
      <div ref="inputRef" style="flex-shrink: 0; width: calc(100% - 20px)">
        <var-input
          ref="varInputRef"
          v-model="chatBusinessSearchParams.name"
          variant="outlined"
          placeholder="请输入文本"
          clearable
          @clear="getChatBusinessSearch"
        >
          <template #append-icon>
            <var-icon @click.stop="handleSearch" style="margin-left: 10px" name="magnify" />
          </template>
        </var-input>
      </div>

      <var-sticky style="width: 100%">
        <div ref="tagsRef" class="tags">
          <var-button
            v-for="{ label, value } in tags"
            type="primary"
            :key="label"
            @click="handleChangeTag(value, $event)"
            :text="chatBusinessSearchParams.tag !== value"
            :outline="chatBusinessSearchParams.tag !== value"
          >
            {{ label }}
          </var-button>
        </div>
      </var-sticky>

      <var-skeleton card :loading="listLoading">
        <div class="list" v-if="chatBusinessSearchData?.search_results?.length">
          <BizItem
            v-for="item in chatBusinessSearchData?.search_results"
            :key="item?.id"
            :biz-item="item"
            @click="handleToDetail($router, item?.company_id)"
          />
        </div>

        <div class="empty" v-else>这里什么都没有...</div>
      </var-skeleton>

      <var-back-top :duration="300" :bottom="100" :right="10" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.biz-pool {
  position: relative;
  overflow-y: scroll;

  .scroll-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 0;

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

    .list {
      column-gap: 16px;
      width: 100%;
      padding: 0 10px 10px;

      /* 瀑布流布局 */
      column-count: 2;

      > * {
        margin-bottom: 20px;
        break-inside: avoid;
      }
    }

    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 0 10px 10px;
      margin: 100px auto;
      font-size: 20px;
    }
  }
}
</style>
