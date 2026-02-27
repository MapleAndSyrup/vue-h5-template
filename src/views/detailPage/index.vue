<script setup lang="ts">
import useDetail from './useDetail'
const { companyInfoData } = useDetail()
</script>
<template>
  <div class="detailPage">{{ companyInfoData?.name }}</div>
</template>

<style scoped lang="scss"></style>
