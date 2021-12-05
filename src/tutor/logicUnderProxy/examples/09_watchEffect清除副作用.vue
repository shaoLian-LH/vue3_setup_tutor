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
      const name = ref('ffcs');
      const age = ref(33);

      const stop = watchEffect((onInvalidate) => {
        const timer = setTimeout(() => {
          console.log(age.value);
        }, 2000)

        // 在这个函数中清除额外的副作用
        onInvalidate(() => {
          clearTimeout(timer);
        })
      });

      const changeName = () => name.value = "xtc"
      const changeAge = () => {
        age.value++;
        if (age.value > 33) {
          stop();
        }
      }

      return {
        name,
        age,
        changeName,
        changeAge
      }
    }
  }
</script>

<style scoped>

</style>