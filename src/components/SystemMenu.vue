<template>
  <div class="logo">Logo</div>
  <n-menu v-model="expandedKeys" mode="vertical" :options="menuOptions" />
</template>

<script lang="ts" setup>
  import { h, ref } from 'vue'
  import { RouterLink } from 'vue-router'
  const expandedKeys = ref(['recently-call'])

  const renderALink = (href: string, name: string) => {
    return h(
      RouterLink,
      {
        to: {
          path: href
        }
      },
      { default: () => name }
    )
  }

  const menuOptions = [
    {
      label: '基础方法',
      key: 'recently-call',
      children: [
        {
          label: () => renderALink('/Reactivity', '响应式'),
          key: 'Reactivity'
        },
        {
          label: () => renderALink('/PropsAndEmit', 'Props和Emit'),
          key: 'PropsAndEmit'
        },
        {
          label: () => renderALink('/SlotsAndAttrs', '插槽和属性'),
          key: 'SlotsAndAttrs'
        }
      ]
    },
    {
      label: '思想',
      key: 'thinks',
      children: [
        {
          label: () => renderALink('/OrthogonalComp', '正交的组件'),
          ket: 'OrthogonalComp'
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
