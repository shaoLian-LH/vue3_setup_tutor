interface ICatalogItemProps {
  title: string
  id: string
  children?: ICatalogItemProps[]
}

export const Catalog: ICatalogItemProps[] = [
  {
    title: '生命周期',
    id: 'lifeCycle',
    children: [
      {
        title: 'vue2生命周期',
        id: 'lifeCycle'
      },
      {
        title: 'vue3.0.x',
        id: 'lifeCycle/vue3optionsSetup'
      },
      {
        title: 'vue3.0.x与setup',
        id: 'lifeCycle/vue3OptionsWithCompositionSetup'
      },
      {
        title: 'vue3 Setup',
        id: 'lifeCycle/vue3Composition'
      }
    ]
  },
  {
    title: '基础用法',
    id: 'baseUsage',
    children: [
      {
        title: '选择式API下',
        id: 'baseUsage/optionsApi'
      },
      {
        title: '3.0.x ~ 3.1.x',
        id: 'baseUsage/compositionApi'
      },
      {
        title: 'setup script',
        id: 'baseUsage/setupScript'
      }
    ]
  },
  {
    title: '三个Ref',
    id: 'threeRefs',
    children: [
      {
        title: 'ref的基础使用',
        id: 'threeRefs/howToUseRef'
      },
      {
        title: 'ref的浅层解包',
        id: 'threeRefs/refShallowUnPackage'
      },
      {
        title: 'toRef和ToRefs',
        id: 'threeRefs/toRefAndToRefs'
      },
      {
        title: 'ref下的todoList',
        id: 'threeRefs/todoListWithRef'
      }
    ]
  },
  {
    title: '业务逻辑',
    id: 'logicUnderProxy',
    children: [
      {
        title: '简单的computed',
        id: 'logicUnderProxy/computed'
      },
      {
        title: 'watch',
        id: 'logicUnderProxy/watch'
      },
      {
        title: 'watchEffect',
        id: 'logicUnderProxy/watchEffect'
      }
    ]
  },
  {
    title: '有生命周期的函数',
    id: 'hook',
    children: [
      {
        title: 'useTodoList',
        id: 'hookArea/todoList'
      },
      {
        title: 'useArticle',
        id: 'hookArea/table'
      }
    ]
  }
]
