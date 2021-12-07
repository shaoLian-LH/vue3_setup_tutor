<script lang="ts" setup>
  import TodoList from './todoList.vue'
</script>
<template>
  <StoryLayout title="使用Watch" :just-tip="true">
    <template #story>
      <div
        class="
          container
          flex flex-row
          content-center
          justify-center
          items-center
          w-full
        "
      >
        <TodoList />
      </div>
    </template>
  </StoryLayout>
</template>

<style></style>
