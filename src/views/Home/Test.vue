<template>
  <el-dialog v-model="props.testVisible" @close="closeDialog"> 
    <div>neirong</div>
  </el-dialog>
</template>

<script lang="ts" setup>
const props = defineProps<{
  testVisible: boolean
}>()
const emits = defineEmits(['close']);

function closeDialog() {
  emits('close');
}
</script>

<style lang="less" scoped></style>
