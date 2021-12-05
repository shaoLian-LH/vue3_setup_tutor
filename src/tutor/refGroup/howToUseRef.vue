<script lang="ts" setup>
  import { ref } from 'vue'
  let numberRef = ref(100)
  const increment = () => {
    numberRef.value++
  }
</script>

<template>
  <StoryLayout title="简单使用ref" :just-tip="true">
    <template #story>
      <div class="container flex content-center justify-center items-center">
        <span class="text-black mr-2">当前计数: {{ numberRef }}</span>
        <a-button type="primary" @click="increment">+1</a-button>
      </div>
    </template>
  </StoryLayout>
</template>

<style scoped></style>
