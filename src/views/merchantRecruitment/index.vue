<script setup lang="ts">
import history from './history.vue'

const showHistory = ref(false)

const curHistoryId = ref('8x7k9m2p4n5q')
</script>
<template>
  <div class="merchant-recruitment">
    <var-button @click="showHistory = true">ss</var-button>
    <history v-model:show="showHistory" v-model:history-id="curHistoryId" />
  </div>
</template>
