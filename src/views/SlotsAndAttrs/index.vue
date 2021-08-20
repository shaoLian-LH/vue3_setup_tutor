<template>
  <SlotsAndAttrs 
    :style="childStyles"
    class="mb-10"
    id="slots-attrs-main-node"
    mode="custom"
  >
    <div>
      占据默认的slot
    </div>
    <template #custom>
      <div>自定义custom的slot</div>
    </template>
    <template v-slot:dataSlot="childSlotObj">
      <span 
        v-for="item in childSlotObj.data"
        :key="item.key"
      >
        {{ `${item.msg} ` }}
      </span>
   </template>
  </SlotsAndAttrs>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import SlotsAndAttrs from '@/components/SlotsAndAttrs.vue';

const childStyles = reactive({
  height: '100px',
  width: 'auto'
})


</script>

<style lang="less" scoped>
.mb-10 {
  margin-bottom: 10px;
}
#slots-attrs-main-node {
  background-color: black;
  color: white;
  line-height: 20px;
  font-size: 14px;
}
</style>