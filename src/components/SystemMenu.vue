<template>
  <div class="logo">Logo</div>
  <a-menu theme="dark" mode="inline" v-model:openKeys="menuKeys.openKeys" v-model:selectedKeys="menuKeys.selectedKeys">
    <a-sub-menu :key="option.key" v-for="option in menuOptions">
      <template #title>{{ option.label }}</template>
      <a-menu-item :key="item.key" v-for="item in option.children">
        <router-link :to="item.href">{{ item.label }}</router-link>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'

  const menuKeys = reactive({
    openKeys: ['recently-call'],
    selectedKeys: []
  })

  const menuOptions = [
    {
      label: '基础方法',
      key: 'recently-call',
      children: [
        {
          label: '响应式',
          key: 'Reactivity',
          href: '/Reactivity'
        },
        {
          label: '动态组件',
          key: 'Dynamic',
          href: '/Dynamic'
        },
        {
          label: '属性与事件',
          key: 'PropsAndEmit',
          href: '/PropsAndEmit'
        },
        {
          label: '插槽与特性',
          key: 'SlotsAndAttrs',
          href: '/SlotsAndAttrs'
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
