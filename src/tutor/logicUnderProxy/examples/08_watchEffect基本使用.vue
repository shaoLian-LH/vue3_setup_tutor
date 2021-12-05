<template>
  <div>
    <h2>{{name}}-{{age}}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
  import { ref, watchEffect } from 'vue';

  export default {
    setup() {
      // watchEffect: 自动收集响应式的依赖
      const company = ref('ffcs');
      const department = ref('xtc');

      const changeName = () => company.value = "kobe"
      const changeAge = () => department.value++
      // 第一次就进行监听
      watchEffect(() => {
        console.log("name:", company.value, "age:", department.value);
      });

      return {
        company,
        department,
        changeName,
        changeAge
      }
    }
  }
</script>

<style scoped>

</style>