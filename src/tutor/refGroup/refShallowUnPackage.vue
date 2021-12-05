<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  let numberRef = ref(100)

  const info = {
    numberRef
  }
  const reactiveInfo = reactive({
    counter: numberRef
  })
  // 局部函数
  const increment = () => {
    numberRef.value++
  }
</script>
<template>
  <StoryLayout title="Ref的浅层解包" :just-tip="true">
    <template #story>
      <div
        class="
          container
          flex flex-col
          content-center
          justify-center
          items-center
        "
      >
        <!-- ref的解包只能是一个浅层解包(info是一个普通的JavaScript对象) -->
        <p class="text-black">numberRef 当前计数: {{ info.numberRef }}</p>
        <!-- 当如果最外层包裹的是一个reactive可响应式对象, 那么内容的ref可以解包 -->
        <p class="text-black">
          reactiveInfo.counter 当前计数: {{ reactiveInfo.counter }}
        </p>
        <a-button type="primary" @click="increment">+1</a-button>
      </div>
    </template>
  </StoryLayout>
</template>

<style scoped></style>
