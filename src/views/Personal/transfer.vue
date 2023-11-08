<template>
  <div style="width: 500px">
    <el-form ref="ruleFormRef" :model="form" :rules="rules" label-width="140px">
      <el-form-item label="转账" prop="toid">
        <el-input v-model="form.toid" placeholder="请输入转账id"></el-input>
      </el-form-item>
      <el-form-item label="云豆" prop="tprice">
        <el-input v-model="form.tprice" placeholder="请输入云豆数量"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">确定</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage, FormInstance } from 'element-plus'
import { transferAccounts } from '../../api/personal'
const ruleFormRef = ref<FormInstance>()
const rules = reactive({
  toid: [{ required: true, message: '请填写转账ID', blur }],
  tprice: [{ required: true, message: '请填写云豆数量', blur }]
})
const form = ref<any>({
  toid: '',
  tprice: ''
})
async function submit() {
  ruleFormRef.value?.validate(async (valid) => {
    if (valid) {
      const res: any = await transferAccounts({
        toid: form.value.toid,
        tprice: form.value.tprice
      })
      if (res.code === 200) {
        return ElMessage.success(res.data)
      }
      ElMessage.error(res.data)
    } else {
      // 表单验证未通过
    }
  })
}
function cancel() {
  ruleFormRef.value?.resetFields()
}
</script>

<style lang="less" scoped></style>
