<template>
  <div class="logo">Logo</div>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="expandedKeys"
    mode="vertical"
    :options="menuOptions"
  >
    <a-sub-menu v-for="item in menuOptions" :key="item.key">
      <template #title>{{ item.label }}</template>
      <a-menu-item
        v-for="child in item.children"
        :key="child.key"
        @click="
          () => {
            handleClick(child.key)
          }
        "
      >
        {{ child.label }}
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  const expandedKeys = ref<string[]>(['recently-call'])
  const selectedKeys = ref<string[]>([])
  const router = useRouter()
  const handleClick = (key: string) => {
    router.push(`/${key}`)
  }
  const menuOptions = [
    {
      label: '基础方法',
      key: 'recently-call',
      children: [
        {
          label: '响应式',
          key: 'Reactivity'
        },
        {
          label: 'Props和Emit',
          key: 'PropsAndEmit'
        },
        {
          label: '插槽和属性',
          key: 'SlotsAndAttrs'
        }
      ]
    },
    {
      label: '思想',
      key: 'thinks',
      children: [
        {
          label: '正交的组件',
          key: 'OrthogonalComp'
        }
      ]
    }
  ]
</script>

<style lang="less" scoped>
  .logo {
    position: relative;
    background-color: transparent;
    color: white;
    font-size: 24px;
    padding: 12px 24px;
  }
</style>
