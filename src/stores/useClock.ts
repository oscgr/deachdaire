import {computed, reactive, toRefs} from "vue";
import { DateTime } from "luxon";
import {random} from "lodash";
import {createSharedComposable, useIntervalFn, useLocalStorage} from "@vueuse/core";

interface State {
  clock?: DateTime
}
const state = reactive<State>({
  clock: undefined
})

const saveGame = useLocalStorage<string>('clock', '')

const useSharedIntervalFn = createSharedComposable(useIntervalFn)

export default () => {

  const {  resume, pause, isActive } = useSharedIntervalFn(() => tick(), 10000, {immediate: false})

  const init = () => {
    if (saveGame.value !== '')
      state.clock = DateTime.fromISO(saveGame.value)
    else
      state.clock = DateTime.local(random(1945, DateTime.now().year), random(1, 12), random(1, 25))

    resume()

  }

  // Every 10s default
  const tick = () => {
    state.clock = state.clock?.plus({day: 1})
    console.debug('Tick!', state.clock?.toISODate())
  }

  const display = computed(() => state.clock?.toLocaleString(DateTime.DATE_MED))

  const save = () => {
    if (state.clock)
      saveGame.value = state.clock.toISODate()
  }

  return {
    ...toRefs(state),
    resume, pause, isActive,
    display,
    init,
    tick,
    save,
  }
}
