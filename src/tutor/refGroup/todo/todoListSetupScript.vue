<script lang="ts" setup>
  import { defineProps, ref } from 'vue'
  interface IThing {
    id: number
    content: string
  }
  // props
  const props = defineProps({
    searchTip: {
      type: String,
      default: () => '我想要'
    }
  })
  // data
  const thingRef = ref<string | undefined>(undefined)
  const listRef = ref<IThing[]>([])
  // 增加一个事件
  const submitAThing = () => {
    if (thingRef.value) {
      const currentMax = listRef.value.length
        ? Math.max(...listRef.value.map((conf) => conf.id)) + 1
        : 0
      listRef.value.push({
        id: currentMax,
        content: thingRef.value
      })
      thingRef.value = undefined
    }
  }
  // 移除一个事件
  const removeAThing = (id: number) => {
    listRef.value = listRef.value.filter((conf) => conf.id !== id)
  }
</script>

<template>
  <div class="container w-auto flex flex-col justify-center content-center">
    <div class="container flex flex-row w-9/12 justify-between items-center">
      <span class="text-black w-2/12">{{ props.searchTip }}</span>
      <a-input
        class="w-7/12"
        placeholder="来添加点什么"
        v-model:value="thingRef"
      />
      <a-button class="ml-8 w-1/12" @click="submitAThing" type="primary">
        添加
      </a-button>
    </div>
    <div class="container w-9/12">
      <a-list
        v-if="listRef.length"
        item-layout="horizontal"
        :data-source="listRef"
      >
        <template #renderItem="{ item }">
          <a-list-item>
            <div
              class="
                container
                flex flex-row
                w-full
                justify-start
                content-center
              "
            >
              <div class="container w-7/12">
                {{ item.content }}
              </div>
              <div class="container w-4/12 flex flex-row">
                <a-button
                  type="primary"
                  danger
                  size="small"
                  @click="removeAThing(item.id)"
                >
                  <span class="text-black">删除</span>
                </a-button>
              </div>
            </div>
          </a-list-item>
        </template>
      </a-list>
      <div v-else class="container flex py-4 justify-center content-center">
        加点什么
      </div>
    </div>
  </div>
</template>

<style></style>
