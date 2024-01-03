<template>
  <el-dialog
    :title="gameName"
    v-model="props.versionVisible"
    @close="closeVersionDialog"
  >
    <session>
      <el-form inline>
        <el-form-item label="游戏版本">
          <el-input v-model="game_version"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="query()">查询</el-button>
          <el-button @click="clear">清空</el-button>
        </el-form-item>
      </el-form>
    </session>
    <session>
      <HModel>
        <template #head>
          <span style="font-weight: bolder">游戏版本</span>
          <div>
            <el-button type="primary" @click="dialogVisible = true"
              >添加</el-button
            >
          </div>
        </template>
        <template #body>
          <el-table :data="tableData" style="width: 100%" :loading="loading">
            <el-table-column label="ID">
              <template #default="{ row }">{{ row.game_version_id }}</template>
            </el-table-column>
            <el-table-column label="版本号">
              <template #default="{ row }">{{ row.banbenhao }}</template>
            </el-table-column>
            <el-table-column label="下载地址">
              <template #default="{ row }">
                {{ row.xiazai_url }}
              </template>
            </el-table-column>
            <el-table-column label="更新内容">
              <template #default="{ row }">{{ row.content }}</template>
            </el-table-column>
            <el-table-column label="创建时间">
              <template #default="{ row }">{{
                formatTime(row.ctime)
              }}</template>
            </el-table-column>
          </el-table>
        </template>
        <template #foot>
          <div class="pagination">
            <el-pagination
              background
              layout="total, prev, pager, next"
              :current-page.sync="currentPage"
              :page-size="pageSize"
              :page-sizes="[10, 20, 30]"
              :total="totalItems"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            >
            </el-pagination>
          </div>
        </template>
      </HModel>
      <el-dialog
        v-model="dialogVisible"
        :title="$t('button.add')"
        :close-on-click-modal="false"
        @close="cancel"
        width="500px"
      >
        <div>
          <el-form :model="form" label-width="75px">
            <el-form-item label="版本号">
              <el-input v-model="form.banbenhao" />
            </el-form-item>
            <el-form-item label="上传游戏">
              <!-- <el-input v-model="form.xiazai_url" /> -->
              <div style="width: 100%">
                <el-upload
                  :before-upload="beforeUpload"
                  :auto-upload="false"
                  :on-change="onChange"
                  :limit="1"
                  :on-exceed="handleExceed"
                  ref="uploadRef"
                  :before-remove="handleRemove"
                >
                  <el-button type="primary">点击上传</el-button>
                  <template #tip>
                    <div class="el-upload__tip">
                      <!-- <el-progress :percentage="50" /> -->
                    </div>
                  </template>
                </el-upload>
              </div>
            </el-form-item>
            <div style="width: 50%; margin-left: 80px; margin-bottom: 20px">
              <el-progress
                v-if="percent !== 0"
                :percentage="Math.floor(percent)"
              />
            </div>
            <el-form-item label="更新内容">
              <el-input v-model="form.content" type="textarea" />
            </el-form-item>
          </el-form>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="cancel">{{ $t('button.cancel') }}</el-button>
            <el-button type="primary" @click="confirm">{{
              $t('button.confirm')
            }}</el-button>
          </span>
        </template>
      </el-dialog>
    </session>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { getGameVersion, addGameVersion, getToken } from '../../api/software'
import Moment from 'moment'
import HModel from '../../components/HModel/index.vue'
// import router from '../../router'
import { ElMessage, UploadInstance } from 'element-plus'
import * as Qiniu from 'qiniu-js'
import { v4 as uuidv4 } from 'uuid'
// import md5 from 'md5'
// const observable = Qiniu.upload(file, key, token, putExtra, config)
// const uploadUrl = ref<string>('')
const game_version = ref<any>()
const uploadRef = ref<UploadInstance>()
const percent = ref<number>(0)
const file = ref<any>()
function onChange(e: any) {
  file.value = e.raw
  uploadData.value.key = `${String(uuidv4()).replace(
    /-/g,
    ''
  )}_${new Date().getTime()}_${game_id.value}.zip`
}
function handleRemove() {
  percent.value = 0
}
function getPercent(response: any, _file: any) {
  percent.value = response.total.percent
}
const uploadData = ref<any>({
  token: '', // 凭证
  key: '' // 文件名
})
const game_id = ref<any>()
const game_name = ref<any>()
const tableData = ref<any>()
const loading = ref<boolean>(false)
const dialogVisible = ref<boolean>(false)
const props = defineProps<{
  versionVisible: boolean
  gameId: number | undefined
  gameName: string | undefined
}>()
const emits = defineEmits(['close'])
function closeVersionDialog() {
  emits('close')
}
const form = ref<any>({
  banbenhao: '',
  xiazai_url: '',
  content: ''
})
// 分页相关
const currentPage = ref<number>(1) // 当前页
const pageSize = ref<number>(10) // 每页显示条数
const totalItems = ref<number>(0) // 总数据条数
// 当每页显示条数发生变化时触发
function handleSizeChange(newSize: number) {
  pageSize.value = newSize
  currentPage.value = 1 // 切换每页显示条数时，重置到第一页
  query()
}

// 当页码发生变化时触发
function handleCurrentChange(newPage: number) {
  currentPage.value = newPage
  query()
}
// 查询
async function query() {
  try {
    loading.value = true
    const res = await getGameVersion({
      page: currentPage.value,
      banbenhao: game_version.value,
      game_id: game_id.value
    })
    tableData.value = res?.data?.list
    totalItems.value = res?.data?.count
    loading.value = false
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}
// 清空
function clear() {
  game_version.value = ''
}
let subscription: any
// 弹出框确认
async function confirm() {
  if (!form.value.banbenhao) {
    return ElMessage.error('版本号不能为空')
  }
  const result: any = await getToken()
  if (result.code === 200) {
    uploadData.value.token = result.data.token
    const observable = Qiniu.upload(
      file.value,
      uploadData.value.key,
      uploadData.value.token
    )
    subscription = observable.subscribe({
      next: (response: any) => {
        getPercent(response, file)
      },
      error: (error: any) => {
        console.error('七牛云上传失败', error)
      },
      complete: async (e: any) => {
        form.value.xiazai_url = `http://cdn.huyouyun.cn/${e.key}`
        const res: any = await addGameVersion({
          game_id: game_id.value,
          ...form.value
        })
        if (res.code === 200) {
          ElMessage.success('添加成功')
          dialogVisible.value = false
          query()
        }
      }
    })
  } else {
    ElMessage.error('获取七牛云上传凭证失败')
  }
}
// 弹出框取消
function cancel() {
  if (subscription) {
    subscription.unsubscribe()
  }
  dialogVisible.value = false
  // subscription.unsubscribe()
}
// 文件超出限制
function handleExceed() {
  ElMessage.warning('最多上传一个文件')
}
// async function getUploadToken() {
//   const res = await getToken()
//   console.log(res)
//   // const data = await res.json();
//   // return res.token;
// }
async function beforeUpload(file: any) {
  const isZip = file.type === 'application/zip'
  if (!isZip) {
    ElMessage.error('只能上传zip格式的压缩包文件')
    return false
  }
  // 返回 true 允许上传，false 停止上传
  return true
}
watch(
  () => dialogVisible.value,
  () => {
    form.value = {}
    percent.value = 0
    uploadRef.value?.clearFiles()
  }
)
watch(
  () => props.versionVisible,
  (nVal) => {
    if (nVal) {
      game_id.value = props.gameId
      game_name.value = props.gameName
      // console.log(game_name.value)
      query()
    }
  }
)
// onMounted(() => {
//   game_id.value = router.currentRoute.value.query.id
//   game_name.value = router.currentRoute.value.query.name
//   query()
// })

// 时间格式化
function formatTime(time: number) {
  return time ? Moment(time * 1000).format('YYYY-MM-DD HH:mm:ss') : '-'
}
</script>

<style lang="less" scoped>
.pagination {
  margin-top: 20px;
  margin-right: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
