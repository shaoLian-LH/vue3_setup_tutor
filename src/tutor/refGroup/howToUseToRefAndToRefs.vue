<script lang="ts" setup>
  import {
    reactive,
    toRefs
    // toRef
  } from 'vue'
  const info = reactive({ name: 'worker', age: 18 })
  // 1.toRefs: 将reactive对象中的所有属性都转成ref, 建立响应式引用
  let { name, age } = toRefs(info)
  // 2.toRef: 对其中一个属性进行转换ref, 建立链接
  // let { name } = info
  // let age = toRef(info, 'age')

  const changeAge = () => {
    age.value++
  }
</script>

<template>
  <StoryLayout title="Reactive搭配toRef与toRefs" :just-tip="true">
    <template #story>
      <div
        class="
          container
          flex flex-col
          content-center
          justify-center
          text-black
          align-center
          w-1/12
        "
      >
        <p class="text-black mr-4">{{ name }} - {{ age }}</p>
        <a-button size="small" type="primary" @click="changeAge">
          修改age
        </a-button>
      </div>
    </template>
  </StoryLayout>
</template>

<style scoped></style>
