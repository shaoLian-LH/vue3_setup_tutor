import { Ref, ComputedRef } from 'vue'
import { throttle } from 'lodash'
import { IThrottleOptions, ComputedGetter } from './index.d'

// 节流
export const useThrottle = <T>({
  value,
  options
}: {
  value: Ref<T> | ComputedGetter<T>
  options?: IThrottleOptions
}) => {
  let targetValue: Ref<T> | ComputedRef<T>
  if (typeof value === 'function') {
    targetValue = computed(value)
  } else {
    targetValue = value
  }

  const throttledValue = ref<T>(targetValue.value)

  const setValue = throttle(
    () => {
      throttledValue.value = targetValue.value as any
    },
    options?.wait ?? 1000,
    options
  )

  watch(targetValue, setValue)

  return throttledValue
}
