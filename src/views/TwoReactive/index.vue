<script lang="ts" setup>
  import { story } from './story'
  const reactiveObj = reactive({
    name: 'xuemf',
    age: 21
  })

  const singleRef = ref('xuemfRef')
  const mulRef = ref({
    nameRef: 'xuemfNameRef',
    ageRef: 21
  })
</script>

<template>
  <StoryLayout title="两个响应式函数？！">
    <template #story>
      <!-- <Markdown :source="story" /> -->
    </template>
    <template #code>
      <div class="container w-full text-center text-black">
        <div class="text-black">
          <p class="text-black">Reactive</p>
          <p class="text-black">reactiveObj.name reactiveObj.age</p>
          <p class="text-black">{{ reactiveObj.name }} {{ reactiveObj.age }}</p>
        </div>
        <div class="text-black">
          <p class="text-black">Single Ref</p>
          <p class="text-black">{{ singleRef }}</p>
        </div>
        <div class="text-black">
          <p class="text-black">Multipart Ref</p>
          <p class="text-black">{{ mulRef.nameRef }} {{ mulRef.ageRef }}</p>
        </div>
      </div>
    </template>
  </StoryLayout>
</template>

<style></style>
