import { useFetch as UF, MaybeRef, Fn } from '@vueuse/core'
import { onUnmounted, watch, ref, unref, Ref } from 'vue'

export interface IFetchResult<T> {
  isFetching: Ref<boolean>
  data: Ref<T | null>
  error: Ref<any>
}

export const useMyFetch = <T>(
  url: MaybeRef<string>,
  method?: 'get',
  headers?: HeadersInit
): IFetchResult<T> => {
  // 使用浏览器提供的Fetch函数进行请求
  const { abort, canAbort, isFetching, data, error } = UF<T>(
    url,
    {
      method: method,
      headers: headers || {}
    },
    {
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
    }
  )
  // 主动中断请求
  const abortHandler = ref<{
    canAbort: boolean
    abort: Fn
  }>({
    canAbort: canAbort.value,
    abort: abort
  })

  // 组件卸载时主动中断请求
  onUnmounted(() => {
    const handler = unref(abortHandler)
    if (handler.canAbort) {
      handler.abort()
    }
  })
  return {
    isFetching,
    data,
    error
  }
}
