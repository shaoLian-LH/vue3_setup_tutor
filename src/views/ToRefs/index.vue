<!-- <script lang="ts" setup>
  import { reactive, toRefs } from 'vue'
  const state = reactive({
    age: 20,
    name: 'shaoLian'
  })

  const stateAsRefs = toRefs(state) // 响应式对象改为普通对象
  // const { age: ageRef, name: nameRef } = stateAsRefs // 每个属性，都是ref对象
</script> -->
<script lang="ts">
  import { reactive, toRefs } from 'vue'
  export default {
    setup() {
      const state = reactive({
        age: 20,
        name: 'shaoLian'
      })

      const stateAsRefs = toRefs(state) // 响应式对象改为普通对象，普通对象中的每个props是ref引用
      // const { age: ageRef, name: nameRef } = stateAsRefs // 每个属性，都是ref对象
      return stateAsRefs
    }
  }
</script>
<template>
  <p>tp Refs - {{ name }} {{ age }}</p>
  <!-- <p>as Refs - {{ nameRef }} {{ ageRef }}</p> -->
</template>

<style></style>
