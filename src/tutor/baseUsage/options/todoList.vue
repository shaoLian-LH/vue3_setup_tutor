<script lang="ts">
  import { defineComponent } from 'vue'
  interface IThing {
    id: number
    content: string
  }
  export default defineComponent({
    props: {
      searchTip: {
        type: String,
        default: () => '我想要'
      }
    },
    data() {
      return {
        thing: undefined as undefined | string,
        list: [] as IThing[]
      }
    },
    methods: {
      // 增加一个事件
      submitAThing() {
        if (this.thing) {
          const currentMax = this.list.length
            ? Math.max(...this.list.map((conf) => conf.id)) + 1
            : 0
          this.list.push({
            id: currentMax,
            content: this.thing
          })
          this.thing = undefined
        }
      },
      // 移除一个事件
      removeAThing(id: number) {
        this.list = this.list.filter((conf) => conf.id !== id)
      }
    }
  })
</script>

<template>
  <div class="container w-auto flex flex-col justify-center content-center">
    <div class="container flex flex-row w-9/12 justify-between items-center">
      <span class="text-black w-2/12">{{ searchTip }}</span>
      <a-input
        class="w-7/12"
        placeholder="来添加点什么"
        v-model:value="thing"
      />
      <a-button class="ml-8 w-1/12" @click="submitAThing" type="primary">
        添加
      </a-button>
    </div>
    <div class="container w-9/12">
      <a-list v-if="list.length" item-layout="horizontal" :data-source="list">
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
                <a-button type="primary" danger @click="removeAThing(item.id)">
                  <span>删除</span>
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
