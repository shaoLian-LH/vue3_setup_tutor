<template>
  <div>
    <a-input
      :value="props.name"
      @input="$emit('update:name', $event.target.value)"
    />
    <a-input
      :value="props.age"
      @input="$emit('update:age', Number($event.target.value))"
    />
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'
  interface IUserInfoProps {
    name?: string
    age?: number
  }
  const props = defineProps<IUserInfoProps>()
</script>

<style>
  p {
    color: white;
  }
</style>
