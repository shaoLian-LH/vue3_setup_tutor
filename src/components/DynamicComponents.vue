<template>
  <component :name="currentComp.name" :is="currentComp.component" />
  <button @click="changeComponent">改变组件</button>
</template>

<script lang="ts" setup>
  import { reactive, DefineComponent } from 'vue'
  import Reactivity from '@/components/Reactivity.vue'
  import HelloWorld from '@/components/HelloWorld.vue'

  // 增加约束
  interface IDynamicProps {
    key: number
    component: DefineComponent<{}, {}, any>
    name: string
  }

  // 声明一个动态组件数组
  const dynamicComponents: IDynamicProps[] = [
    {
      key: 0,
      component: HelloWorld,
      name: 'HelloWorld'
    },
    {
      key: 1,
      component: Reactivity,
      name: 'Reactivity'
    }
  ]

  // 初始化选择
  let currentIndex = $ref<number>(0)
  // 这么写的话一定要结构对象（返回一个新的对象，不然数组会被重写）
  let currentComp = reactive<IDynamicProps>({
    ...dynamicComponents[currentIndex]
  })

  // 改变组件
  const changeComponent = () => {
    const max = dynamicComponents.length
    currentIndex = (currentIndex + 1) % max // Ref是线程安全的
    const nextComponent = dynamicComponents[currentIndex]
    currentComp.key = nextComponent.key
    currentComp.component = nextComponent.component
    currentComp.name = nextComponent.name
  }
</script>
