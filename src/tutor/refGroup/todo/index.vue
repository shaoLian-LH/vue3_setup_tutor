<script lang="ts" setup>
  import TodoListSetupMethod from './todoListSetupMethod.vue'
  import TodoListSetupScript from './todoListSetupScript.vue'
</script>

<template>
  <StoryLayout title="Ref加持的todoList" :just-tip="true">
    <template #story>
      <TodoListSetupMethod searchTip="vue3.0~3.1" />
      <TodoListSetupScript searchTip="vue3.2" />
    </template>
  </StoryLayout>
</template>

<style></style>
