import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// layouts
import BasicLayout from '@/layouts/BasicLayout.vue'
// views
// 生命周期
import LifeCycle from '@/tutor/lifecycle/vue2.vue'
import LifeCycleVueOptionsSetup from '@/tutor/lifecycle/vue3OptionsSetup.vue'
import LifeCycleVueOptionsWithComposition from '@/tutor/LifeCycle/vue3OptionsWithCompositionSetup.vue'
import LifeCycleComposition from '@/tutor/LifeCycle/vue3Composition.vue'
// 基础使用
// todoList案例
import optionsTodoList from '@/tutor/baseUsage/options/index.vue'
import compositionTodoList from '@/tutor/baseUsage/composition/index.vue'
import setupScriptTodoList from '@/tutor/baseUsage/setupScript/index.vue'
// 3个ref
// 这个地方先讲PPT或者README.md
import RefBase from '@/tutor/refGroup/howToUseRef.vue'
import RefShallowUnPackage from '@/tutor/refGroup/refShallowUnPackage.vue'
import HowToUseToRefAndToRefs from '@/tutor/refGroup/HowToUseToRefAndToRefs.vue'
import TodoListWithRef from '@/tutor/refGroup/todo/index.vue'
// 响应式下的业务逻辑
import WatchBaseUse from '@/tutor/logicUnderProxy/watch/index.vue'
import WatchEffectUse from '@/tutor/logicUnderProxy/watchEffect/index.vue'
import ComputedBaseUse from '@/tutor/logicUnderProxy/computed.vue'
// hook
import HookTodoList from '@/tutor/hookArea/todoList/index.vue'
import HookTable from '@/tutor/hookArea/table/index.vue'

const formatPathAndName = (pathName: string) => {
  const target = pathName.replace(/^\/*/, '')
  return {
    path: `/${target}`,
    name: target
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'BasicLayout',
    component: BasicLayout,
    children: [
      // 生命周期
      {
        ...formatPathAndName('lifeCycle'),
        component: LifeCycle
      },
      {
        ...formatPathAndName('lifeCycle/vue3optionsSetup'),
        component: LifeCycleVueOptionsSetup
      },
      {
        ...formatPathAndName('lifeCycle/vue3OptionsWithCompositionSetup'),
        component: LifeCycleVueOptionsWithComposition
      },
      {
        ...formatPathAndName('lifeCycle/vue3Composition'),
        component: LifeCycleComposition
      },
      // 基础使用
      // todoList案例
      {
        ...formatPathAndName('baseUsage/optionsApi'),
        component: optionsTodoList
      },
      {
        ...formatPathAndName('baseUsage/compositionApi'),
        component: compositionTodoList
      },
      {
        ...formatPathAndName('baseUsage/setupScript'),
        component: setupScriptTodoList
      },
      // 三个ref
      {
        ...formatPathAndName('threeRefs/howToUseRef'),
        component: RefBase
      },
      {
        ...formatPathAndName('threeRefs/refShallowUnPackage'),
        component: RefShallowUnPackage
      },
      {
        ...formatPathAndName('threeRefs/toRefAndToRefs'),
        component: HowToUseToRefAndToRefs
      },
      {
        ...formatPathAndName('threeRefs/todoListWithRef'),
        component: TodoListWithRef
      },
      // 响应式下的业务逻辑
      {
        ...formatPathAndName('logicUnderProxy/computed'),
        component: ComputedBaseUse
      },
      {
        ...formatPathAndName('logicUnderProxy/watch'),
        component: WatchBaseUse
      },
      {
        ...formatPathAndName('logicUnderProxy/watchEffect'),
        component: WatchEffectUse
      },
      // hook
      {
        ...formatPathAndName('hookArea/todoList'),
        component: HookTodoList
      },
      {
        ...formatPathAndName('hookArea/table'),
        component: HookTable
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
