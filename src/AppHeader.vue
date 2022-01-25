<template>
  <div class="app-header">
      <span v-text="'Test'" />
  </div>
</template>
<script lang="ts">

export default {
  name: 'AppHeader',
}
</script>
<style lang="scss" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  border-bottom: thin solid #2c3e50;
  * {
    margin: 4px;
    text-transform: uppercase;
  }
}
</style>
