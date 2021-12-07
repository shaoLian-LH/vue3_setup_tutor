<script lang="ts" setup>
  const firstNameRef = ref('ffcs')
  const lastNameRef = ref('xtc')
  // 1.用法一: 传入一个getter函数
  // computed的返回值是一个ref对象
  // const fullName = computed(() => firstNameRef.value + ' ' + lastNameRef.value)

  // 2.用法二: 传入一个对象, 对象包含getter/setter
  const fullName = computed({
    get: () => firstNameRef.value + ' ' + lastNameRef.value,
    set(newValue) {
      console.log('computed new value - ', newValue)
      const names = newValue.split(' ')
      firstNameRef.value = names[0]
      lastNameRef.value = names[1]
    }
  })

  const changeName = () => {
    fullName.value = 'FFCS XTC'
  }
</script>
<template>
  <StoryLayout title="使用Watch" :just-tip="true">
    <template #story>
      <div
        class="
          container
          flex flex-col
          content-center
          justify-center
          items-center
          w-full
        "
      >
        <div class="w-5/12 my-2">
          <a-input v-model:value="firstNameRef"></a-input>
        </div>
        <div class="w-5/12 my-2">
          <a-input v-model:value="lastNameRef"></a-input>
        </div>
        <div>
          <span class="text-black mr-8">Computed：{{ fullName }}</span>
          <a-button type="primary" @click="changeName">
            <span>更改</span>
          </a-button>
        </div>
      </div>
    </template>
  </StoryLayout>
</template>

<style></style>
