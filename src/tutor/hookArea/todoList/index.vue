<script lang="ts" setup>
  import TodoList from './todoList.vue'
</script>

<template>
  <StoryLayout title="hook加持的todoList" :just-tip="true">
    <template #story>
      <TodoList />
    </template>
  </StoryLayout>
</template>

<style></style>
