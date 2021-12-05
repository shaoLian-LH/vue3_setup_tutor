<template>
  <div>
    <!-- <h2 ref="title">标题</h2> -->
  </div>
</template>

<script>
  import { ref, watchEffect } from 'vue';

  export default {
    setup() {
      const title = ref(null);

      watchEffect(() => {
        console.log(title.value);
      }, {
        flush: "sync"
      })
      
      return {
        title
      }
    }
  }
</script>

<style scoped>

</style>