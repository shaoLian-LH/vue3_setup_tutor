<script lang="ts">
  import { defineComponent } from 'vue'
  import TodoList from './todoList.vue'

  export default defineComponent({
    components: { TodoList }
  })
</script>

<template>
  <StoryLayout title="Vue3.0~3.1下的todoList" :just-tip="true">
    <template #story>
      <TodoList />
    </template>
  </StoryLayout>
</template>

<style></style>
