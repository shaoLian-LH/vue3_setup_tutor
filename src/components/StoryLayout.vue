<script lang="ts" setup>
  enum modeEnum {
    story = 'Story',
    code = 'Code'
  }
  const modeRef = ref<modeEnum>(modeEnum.story)
  const handleModeChange = (value: boolean) => {
    if (value) {
      modeRef.value = modeEnum.code
    } else {
      modeRef.value = modeEnum.story
    }
  }
  interface IStoryLayoutProps {
    title: string
  }
  const props = defineProps<IStoryLayoutProps>()
</script>
<template>
  <div class="container w-full flex flex-nowrap flex-col p">
    <div class="container flex w-full p-2 justify-between">
      <div class="text-left inline-block">
        <span class="text-2xl text-black"># {{ props.title }}</span>
      </div>
      <div class="text-right flex justify-center inline-block pr-8">
        <span class="text-base text-black mr-4">{{ modeRef }}</span>
        <a-switch @change="handleModeChange" :checked="modeRef === 'Code'" />
      </div>
    </div>
    <div class="container w-full p-16">
      <div class="text-left" v-show="modeRef === 'Story'">
        <slot name="story"></slot>
      </div>
      <div class="text-left" v-show="modeRef === 'Code'">
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>
