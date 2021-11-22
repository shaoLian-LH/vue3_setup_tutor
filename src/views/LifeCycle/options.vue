<template>
  <p>options API的生命周期</p>
</template>

<script lang="ts">
  export default {
    name: 'options',
    props: {
      msg: String
    },
    beforeCreate() {
      console.log('beforeCreate')
    },
    created() {
      console.log('created')
    },
    beforeMount() {
      console.log('beforeMount')
    },
    mounted() {
      console.log('mounted')
    },
    beforeUpdate() {
      console.log('beforeUpdate')
    },
    updated() {
      console.log('updated')
    },
    beforeUnmount() {
      console.log('beforeUnmount')
    },
    unmounted() {
      console.log('unmounted')
    }
  }
</script>

<style></style>
