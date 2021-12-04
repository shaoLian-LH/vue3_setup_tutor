<script lang="ts" setup>
  import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
  import { Catalog } from './catalog'
  const props = defineProps<{
    collapsed?: boolean
  }>()
  const emits = defineEmits(['update:collapsed'])
  const expandedKeys = ref<string[]>(['recently-call'])
  const selectedKeys = ref<string[]>([])
  const toggleCollapsed = () => {
    emits('update:collapsed', !props.collapsed)
  }

  const router = useRouter()
  const handleClick = (key: string) => {
    router.push(`/${key}`)
  }
</script>

<template>
  <div class="logo">Logo</div>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="expandedKeys"
    :options="Catalog"
    :inline-collapsed="props.collapsed"
    mode="inline"
    theme="dark"
  >
    <a-sub-menu v-for="item in Catalog" :key="item.id">
      <template #title>{{ item.title }}</template>
      <a-menu-item
        v-for="child in item.children"
        :key="child.id"
        @click="handleClick(child.id)"
      >
        {{ child.title }}
      </a-menu-item>
    </a-sub-menu>
    <a-button
      class="mt-6"
      style="width: 100%"
      type="primary"
      size="large"
      @click="toggleCollapsed"
    >
      <MenuUnfoldOutlined v-show="props.collapsed" />
      <MenuFoldOutlined v-show="!props.collapsed" />
    </a-button>
  </a-menu>
</template>

<style lang="less" scoped>
  .logo {
    position: relative;
    background-color: transparent;
    color: white;
    font-size: 24px;
    padding: 12px 24px;
  }
</style>
