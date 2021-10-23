<script lang="ts" setup>
  import { watch } from 'vue'
  import { useUserInfo } from '@/hooks/useUserInfo'
  const userRef = useUserInfo()
  watch([userRef], () => {})
</script>

<template>
  <div>可变值与不可变值</div>
  <p>{{ userRef.name }}</p>
  <p>{{ userRef.role }}</p>
</template>

<style lang="less" scoped></style>
