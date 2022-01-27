<template>
  <div class="game-timeline">
    <div class="game-timeline-row">
      <span class="game-timeline-label" v-text="day"></span>
      <GameBarHorizontal :percent="monthPercent" />
    </div>
    <div class="game-timeline-row">
      <span class="game-timeline-label" v-text="month"></span>
      <GameBarHorizontal :percent="yearPercent" />
    </div>
    <div class="game-timeline-row">
      <span class="game-timeline-label" v-text="year"></span>
          <button v-if="isActive" @click="pause">PAUSE</button>
    <button v-else @click="resume">RESUME</button>
    </div>
  </div>
</template>
<script lang="ts">
import useClock from "./stores/useClock";
import {computed} from "vue";
import GameBarHorizontal from "./GameBarHorizontal.vue";

export default {
  name: 'GameTimeline',
  components: {GameBarHorizontal},
  setup() {
    const {clock, resume, pause, isActive} = useClock()

    const day = computed(() => clock?.value?.toFormat('d'))
    const month = computed(() => clock?.value?.setLocale('fr').toFormat('MMM'))
    const year = computed(() => clock?.value?.toFormat('yyyy'))

    const yearPercent = computed(() => {
      if (clock?.value) {
        const durationFromStartOfYear = clock.value.diff(clock.value.startOf('year'))
        const durationForThisYear = clock.value.endOf('year').diff(clock.value.startOf('year'))
        return `${Math.round(durationFromStartOfYear.toMillis() * 1000 / durationForThisYear.toMillis()) / 10}%`
      }
    })
    const monthPercent = computed(() => {
      if (clock?.value) {
        const durationFromStartOfMonth = clock.value.diff(clock.value.startOf('month'))
        const durationForThisMonth = clock.value.endOf('month').diff(clock.value.startOf('month'))
        return `${Math.round(durationFromStartOfMonth.toMillis() * 1000 / durationForThisMonth.toMillis()) / 10}%`
      }
    })
    return {
      resume, pause, isActive,
      day,
      month,
      year,
      yearPercent,
      monthPercent,
    }
  }
}
</script>
<style lang="scss" scoped>
.game-timeline {
  border-right: thin solid #2c3e50;
  border-bottom: thin solid #2c3e50;
  display: flex;
  max-width: 200px;
  gap: 4px;
  flex-direction: column;

  .game-timeline-row {
    display: flex;

    .game-timeline-label {
      text-transform: uppercase;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 80px;
      text-align: left;
      padding: 0 8px;
      line-height: 1.2rem;
      max-height: 100%;
    }

    button {
      margin: 4px;
      width: 100%;
    }
  }
}
</style>
