<template>
<div class="game-bar">
    <div class="game-bar-progress" />
<!--    <div class="game-bar-value" v-text="percent" />-->
  </div>
</template>
<script lang="ts">
import {PropType} from "vue";

export default {
  name: 'GameBarHorizontal',
  props: {
    percent: {
      type: String as PropType<string>
    },
  }
}
</script>
<style lang="scss" scoped>
.game-bar {
  //border: thin solid #2c3e50;
  height: 1.2rem;
  width: 100%;
  position: relative;
  background: repeating-linear-gradient(45deg, antiquewhite, antiquewhite 3px, #2c3e50 3px, #2c3e50 6px);
  .game-bar-progress {
    width: v-bind(percent);
    background: #2c3e50;
    height: 100%;
  }

  &:hover .game-bar-value {
    display: block;
  }
}
</style>
