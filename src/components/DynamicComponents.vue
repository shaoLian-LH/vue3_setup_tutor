<template>
  <component :is="currentComp.component" />
  <button @click="changeComponent">改变组件</button>
</template>

<script lang="ts" setup>
  import { ref, reactive, DefineComponent } from 'vue'
  import Reactivity from '@/components/Reactivity.vue'
  import HelloWorld from '@/components/HelloWorld.vue'

  // 增加约束
  interface IDynamicProps {
    key: number
    component: DefineComponent<{}, {}, any>
  }

  // 声明一个动态组件数组
  const dynamicComponents: IDynamicProps[] = [
    {
      key: 0,
      component: HelloWorld
    },
    {
      key: 1,
      component: Reactivity
    }
  ]

  // 初始化选择
  let currentIndex = ref<number>(0)
  // 这么写的话一定要结构对象（返回一个新的对象，不然数组会被重写）
  let currentComp = reactive<IDynamicProps>({
    ...dynamicComponents[currentIndex.value]
  })

  // 改变组件
  const changeComponent = () => {
    const max = dynamicComponents.length
    currentIndex.value = (currentIndex.value + 1) % max // Ref是线程安全的
    const nextComponent = dynamicComponents[currentIndex.value]
    currentComp.key = nextComponent.key
    currentComp.component = nextComponent.component
  }
</script>
