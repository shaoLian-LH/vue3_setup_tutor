<script lang="ts">
  import { defineComponent } from 'vue'
  import TodoList from './todoList.vue'

  export default defineComponent({
    components: { TodoList }
  })
</script>

<template>
  <StoryLayout title="Vue2下的todoList" :just-tip="true">
    <template #story>
      <TodoList search-tip="添加代办" />
    </template>
  </StoryLayout>
</template>

<style></style>
