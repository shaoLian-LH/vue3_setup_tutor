import { useFetch as UF, MaybeRef } from '@vueuse/core'
import { IFetchResult } from '../@types/hooks'
import { onUnmounted } from 'vue'

export const useMyFetch = <T>(url: MaybeRef<string>): IFetchResult<T> => {
  const { abort, canAbort, isFetching, data, error } = UF<T>(url, {
    afterFetch(ctx) {
      const { data } = ctx
      if (typeof data === 'string') {
        try {
          ctx.data = JSON.parse(ctx.data)
        } catch (e) {}
      }
      return ctx
    },
    refetch: true
  })
  onUnmounted(() => {
    if (canAbort.value) {
      abort()
    }
  })
  return {
    isFetching,
    data,
    error
  }
}
