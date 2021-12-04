<script lang="ts" setup>
  interface IMarkdownProps {
    source: string
  }
  const props = defineProps<IMarkdownProps>()
</script>

<template>
  <Markdown html linkify :source="props.source" />
</template>

<style></style>
