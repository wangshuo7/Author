<template>
  <session>
    <div>
      欢迎<el-button style="margin-left: 20px" @click="openDialog" 
        >测试</el-button
      >
    </div>
    <Test :testVisible="visible" @close="closeDialog"></Test>
  </session>
</template>

<script lang="ts">
export default {
  name: 'Home'
}
</script>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { getPersonalInfo } from '../../api/personal'
import Test from './Test.vue'
async function query() {
  await getPersonalInfo()
}
onMounted(() => {
  query()
})
const visible = ref<boolean>(false)
function openDialog() {
  visible.value = true
}
function closeDialog() {
  visible.value = false
}
</script>

<style lang="less" scoped></style>
