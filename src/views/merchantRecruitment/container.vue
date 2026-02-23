<script setup lang="ts"></script>
<template>
  <div class="conversation-container">
    <div class="container">
      <var-loading type="cube" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.conversation-container {
  flex-grow: 1;
  width: 100%;
  min-height: 0;
  padding: 10px;
  overflow-y: scroll;

  .container {
    width: 100%;
  }
}
</style>
