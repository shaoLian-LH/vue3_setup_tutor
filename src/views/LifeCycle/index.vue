<template>
  <Options :msg="msg" v-if="visible"></Options>
  <Composition :msg="msg" v-if="!visible"></Composition>
  <button @click="changeMsg"></button>
  <button @click="changeVisible"></button>
</template>

<script lang="ts" setup>
  import Options from './options.vue'
  import Composition from './composition.vue'
  import { ref } from 'vue'

  const msg = ref('hello')
  const changeMsg = () => {
    msg.value = 'hello!!!!'
  }
  const visible = ref(true)
  const changeVisible = () => {
    visible.value = true
  }
</script>

<style></style>
