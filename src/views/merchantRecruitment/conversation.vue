<script setup lang="ts"></script>
<template>
  <div class="conversation">
    <div class="container">
      <var-loading style="display: inline-block" type="cube" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.conversation {
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
