<script lang="ts" setup>
  import { useFeatureX } from '@/hooks/useFeatureX'
  const { x, y } = useFeatureX()
</script>
<template>
  <p>tp Refs - {{ x }} {{ y }}</p>
  <!-- <p>as Refs - {{ nameRef }} {{ ageRef }}</p> -->
</template>

<style></style>
