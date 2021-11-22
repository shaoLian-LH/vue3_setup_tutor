import { ref, onMounted, onUnmounted, Ref } from 'vue'
export interface IMousePositionFallBack {
  x: Ref<number>
  y: Ref<number>
}
export const useMousePosition = (): IMousePositionFallBack => {
  const x = ref(0)
  const y = ref(0)

  const update = (event: MouseEvent) => {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y }
}
