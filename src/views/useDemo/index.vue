<script lang="ts" setup>
  import { useMousePosition } from 'hooks/useMousePosition'
  const { x, y } = useMousePosition()
</script>

<template>
  <p>x: {{ x }}</p>
  <p>y: {{ y }}</p>
</template>
