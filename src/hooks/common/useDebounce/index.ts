import { debounce } from 'lodash'
import { computed, ComputedRef, Ref } from 'vue'
import { ComputedGetter, IDebounceOptions } from './index.d'

export function useDebounce<T>(
  value: Ref<T> | ComputedGetter<T>,
  options?: IDebounceOptions
) {
  let targetValue: Ref<T> | ComputedRef<T>
  if (typeof value === 'function') {
    targetValue = computed(value)
  } else {
    targetValue = value
  }

  const debouncedValue = ref<T>(targetValue.value)

  const setValue = debounce(
    () => {
      // TODO
      debouncedValue.value = targetValue.value as any
    },
    options?.wait ?? 1000,
    options
  )

  watch(targetValue, setValue)

  return debouncedValue
}
