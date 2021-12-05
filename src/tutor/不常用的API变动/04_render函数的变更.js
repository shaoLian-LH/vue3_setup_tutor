// // vue2中的写法
// export default {
//   data() {
//     return {
//       count: 0
//     }
//   },
//   methods: {
//     increment() {
//       this.count++
//     }
//   },
//   render(h) {
//     return h(
//       'div', {
//       onClick: this.increment
//     },
//       this.count
//     )
//   }
// }

// vue3中的render写法
import { h, reactive } from 'vue'
export default {
  setup (props, { slots, attrs, emit }) {
    const state = reactive({
      count: 0
    })

    function increment () {
      state.count++
    }

    // 返回渲染函数
    return () =>
      h(
        'div',
        {
          onClick: increment
        },
        state.count
      )
  }
}