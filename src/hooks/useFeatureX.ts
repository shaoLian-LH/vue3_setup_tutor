'use strict'
import { reactive, toRefs } from 'vue'

export const useFeatureX = () => {
  const state = reactive({
    x: 1,
    y: 1
  })
  // 返回时转换为ref
  // 使用方在结构的时候可以不丢失数据的响应性
  return toRefs(state)
}
