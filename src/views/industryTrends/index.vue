<script setup lang="ts">
const curTab = ref('全部行业')
const tabs = ['全部行业', '科技互联网', '制造业', '金融投资', '新能源']
</script>
<template>
  <div class="industry-trends">
    <var-chip :round="false" type="primary" block size="large">行业动态</var-chip>
    <var-chip :round="false" type="primary" block>实时追踪产业资讯，把握招商先机</var-chip>
    <div class="container">
      <var-sticky>
        <div class="tabs">
          <var-button
            v-for="tab in tabs"
            :type="curTab === tab ? 'primary' : undefined"
            :key="tab"
            @click="curTab = tab"
          >
            {{ tab }}
          </var-button>
        </div>
      </var-sticky>
    </div>
  </div>
</template>

<style scoped lang="scss">
.industry-trends {
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .var-chip {
    flex-shrink: 0;
  }

  .container {
    display: flex;
    flex-direction: column;

    .tabs {
      display: flex;
      column-gap: 20px;
      align-items: center;
      width: 100%;
      padding: 10px;
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
      }
    }
  }
}
</style>
