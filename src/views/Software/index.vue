<template>
  <session>
    <div class="query">
      <el-form :form="queryForm" label-width="50px" @submit.prevent>
        <el-form-item :label="$t('table.title')">
          <el-input
            @keyup.enter="query"
            v-model="queryForm.title"
            clearable
            placeholder="请输入标题"
          ></el-input>
          <el-button style="margin: 0 20px" type="primary" @click="query">{{
            $t('button.query')
          }}</el-button>
          <el-button @click="onClear">{{ $t('button.clear') }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </session>
  <session>
    <HModel>
      <template #head>
        <span style="font-weight: bolder">{{ $t('menu.software') }}</span>
        <div>
          <el-button type="primary" @click="onAddSoftware">添加</el-button>
        </div>
      </template>
      <template #body>
        <el-table
          v-loading="loading"
          :data="tableData"
          style="width: 100%"
          border
        >
          <el-table-column label="ID" width="100">
            <template #default="{ row }">{{ row.game_id }}</template>
          </el-table-column>
          <el-table-column :label="$t('table.title')" width="200">
            <template #default="{ row }">{{ row.title }}</template>
          </el-table-column>
          <el-table-column label="简介" width="200">
            <template #default="{ row }">{{ row.jianjie }}</template>
          </el-table-column>
          <el-table-column label="价格" width="250">
            <template #default="{ row }">{{ row.price }}</template>
          </el-table-column>
          <!-- <el-table-column label="打折">
          <template #default="{ row }">{{ row.dazhe }}</template>
        </el-table-column> -->
          <el-table-column label="促销价格" width="250">
            <template #default="{ row }">{{ row.cuxiao_price }}</template>
          </el-table-column>
          <el-table-column :label="$t('table.min_price')" width="300">
            <template #default="{ row }">{{ row.min_price }}</template>
          </el-table-column>
          <el-table-column :label="$t('table.ctime')" width="300">
            <template #default="{ row }">{{ formatTime(row.ctime) }}</template>
          </el-table-column>
          <el-table-column :label="$t('table.utime')" width="300">
            <template #default="{ row }">{{ formatTime(row.uptime) }}</template>
          </el-table-column>
          <el-table-column
            fixed="right"
            :label="$t('table.operate')"
            min-width="470"
          >
            <template #default="{ row }">
              <div style="display: flex">
                <el-button @click="editLanguage(row)" type="success">{{
                  $t('button.edit')
                }}</el-button>
                <el-button @click="delLanguage(row)" type="danger">{{
                  $t('button.del')
                }}</el-button>
                <el-button @click="addVersion(row)">版本</el-button>
                <el-button @click="editNotice(row)">编辑公告</el-button>
                <el-button @click="goFeedback(row)">反馈</el-button>
                <el-button @click="goDiscount(row)">折扣</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <template #foot>
        <div class="pagination">
          <el-pagination
            background
            layout="total,prev, pager, next, sizes"
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
  </session>
  <el-dialog
    style="padding: 0 30px"
    v-model="dialogVisible"
    :title="
      operation === '添加'
        ? $t('button.add')
        : operation === '编辑'
        ? $t('button.edit')
        : '编辑公告'
    "
    :width="operation !== '编辑公告' ? '800px' : '500px'"
  >
    <div v-if="operation !== '编辑公告'">
      <el-form :model="form" label-width="100px">
        <el-form-item :label="$t('table.title')">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="form.jianjie"></el-input>
        </el-form-item>
        <el-form-item :label="$t('table.icon')">
          <el-input v-model="form.icon"></el-input>
        </el-form-item>
        <el-form-item :label="$t('table.doc_url')">
          <el-input v-model="form.doc_url"></el-input>
        </el-form-item>
        <el-form-item label="游戏平台">
          <el-select
            multiple
            v-model="pingtai_id"
            placeholder="请选择游戏平台"
            style="width: 500px"
          >
            <el-option
              v-for="item in platforms"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="游戏语言">
          <el-select
            filterable
            multiple
            v-model="lang_id"
            placeholder="请选择游戏语言"
            style="width: 500px"
          >
            <el-option
              v-for="item in languages"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="游戏分类">
          <el-select
            multiple
            v-model="cate_id"
            placeholder="请选择游戏分类"
            style="width: 500px"
          >
            <el-option
              v-for="item in categories"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="系统要求">
          <el-input type="textarea" v-model="form.xitong_yaoqiu"></el-input>
        </el-form-item>
        <el-form-item label="最低开播余额">
          <el-input v-model="form.min_price"></el-input>
        </el-form-item>
        <el-form-item label="固定售价">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="促销价格">
          <el-input v-model="form.cuxiao_price"></el-input>
        </el-form-item>
        <el-form-item label="游戏天数">
          <el-input v-model="form.days"></el-input>
        </el-form-item>
        <el-form-item required label="分成比例">
          <el-input-number
            controls-position="right"
            :min="0"
            :max="20"
            v-model="form.divide"
          ></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-radio-group v-model="form.is_xianxia">
            <el-radio label="1">线上</el-radio>
            <el-radio label="2">线下</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-radio-group v-model="form.is_dongjie">
            <el-radio label="1">不冻结</el-radio>
            <el-radio label="2">冻结</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="套餐">
          <div style="width: 100%">
            <el-button @click="addPackage" type="primary">添加套餐</el-button>
          </div>
          <div v-for="(item, index) in form.taocan" :key="index" class="taocan">
            <div>{{ `套餐${index + 1}` }}</div>
            <div style="display: flex; align-items: center">
              <el-input v-model="item.tdays" placeholder="套餐天数"></el-input
              >天
            </div>
            <div>
              <el-input v-model="item.tprice" placeholder="套餐价格"></el-input
              >云豆
            </div>
            <el-button @click="removePackage(index)">删除套餐</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div v-else>
      <el-form :model="noticeForm">
        <el-form-item label="公告">
          <el-input v-model="noticeForm.gonggao" type="textarea" />
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">{{
          $t('button.cancel')
        }}</el-button>
        <el-button type="primary" @click="confirm">{{
          $t('button.confirm')
        }}</el-button>
      </span>
    </template>
  </el-dialog>
  <Discount
    :discountVisible="disVisible"
    :gameId="dis_game_id"
    :gameName="dis_game_name"
    @close="closeDisDialog"
  ></Discount>
  <Version :versionVisible="verVisible" :gameId="ver_game_id" :gameName="ver_game_name" @close="closeVerDialog"></Version>
</template>

<script lang="ts">
export default {
  name: 'Software'
}
</script>
<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import {
  getSoftwareList,
  addSoftware,
  editSoftware,
  delSoftware,
  editGameNotice
} from '../../api/software'
import Moment from 'moment'
import HModel from '../../components/HModel/index.vue'
import { ElMessage } from 'element-plus'
import { useGlobalStore } from '../../store/globalStore'
import router from '../../router'
import Discount from './discount1.vue'
import Version from './version1.vue'
const globalStore = useGlobalStore()

const platforms = ref<any>() // 获取平台
const languages = ref<any>() // 获取语言
const categories = ref<any>() // 获取分类
const queryForm = ref<any>({
  title: ''
})
const noticeForm = ref<any>({
  gonggao: ''
}) // 公告
const tableData = ref<any>()
const dialogVisible = ref<boolean>()
const operation = ref<string>('') // 操作 add \ edit \ version
const editId = ref<number>() // 编辑时所用id
const loading = ref<boolean>(false)
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
// 添加套餐
function addPackage() {
  form.value?.taocan?.push({ tprice: '', tdays: '' })
}
// 删除套餐
function removePackage(index: any) {
  form.value.taocan.splice(index, 1)
}
// 添加表单
const form = ref<any>({
  title: '',
  icon: '',
  doc_url: '',
  game_pingtai_id: null,
  game_lang_id: null,
  game_cate_id: null,
  xitong_yaoqiu: '',
  min_price: '',
  price: '',
  cuxiao_price: '',
  days: '',
  divide: null,
  is_xianxia: '1',
  is_dongjie: '1',
  taocan: []
})
// 添加
function onAddSoftware(row: any) {
  operation.value = '添加'
  dialogVisible.value = true
  editId.value = row.game_id
}
// 编辑
function editLanguage(row: any) {
  operation.value = '编辑'
  setTimeout(() => {
    form.value.title = row.title
    form.value.jianjie = row.jianjie
    form.value.icon = row.icon
    form.value.doc_url = row.doc_url
    form.value.game_pingtai_id = row.game_pingtai_id
      ? row.game_pingtai_id.split(',').map(Number)
      : null
    form.value.game_lang_id = row.game_lang_id
      ? row.game_lang_id.split(',').map(Number)
      : null
    form.value.game_cate_id = row.game_cate_id
      ? row.game_cate_id.split(',').map(Number)
      : null
    form.value.xitong_yaoqiu = row.xitong_yaoqiu
    form.value.min_price = row.min_price
    form.value.price = row.price
    form.value.cuxiao_price = row.cuxiao_price
    form.value.days = row.days
    form.value.divide = Number(row.divide)
    form.value.is_xianxia = row.is_xianxia.toString()
    form.value.is_dongjie = row.is_dongjie.toString()
    form.value.taocan = row.taocan
  }, 50)
  dialogVisible.value = true
  editId.value = row.game_id
}
const verVisible = ref<boolean>(false)
const ver_game_id = ref<any>()
const ver_game_name = ref<any>()
// 添加版本
function addVersion(row: any) {
  // router.push({
  //   name: 'Version',
  //   query: {
  //     id: row.game_id,
  //     name: row.title
  //   }
  // })
  ver_game_id.value = row.game_id
  ver_game_name.value = row.title
  verVisible.value = true
}
function closeVerDialog() {
  verVisible.value = false
}
// 反馈列表
function goFeedback(row: any) {
  router.push({
    name: 'Feedback',
    query: {
      id: row.game_id,
      name: row.title
    }
  })
}

const disVisible = ref<boolean>(false)
const dis_game_id = ref<any>()
const dis_game_name = ref<any>()
// 游戏折扣
function goDiscount(row: any) {
  // router.push({
  //   name: 'Discount',
  //   query: {
  //     id: row.game_id,
  //     name: row.title
  //   }
  // })
  dis_game_id.value = row.game_id
  dis_game_name.value = row.title
  disVisible.value = true
}
function closeDisDialog() {
  disVisible.value = false
}
const lang_id = ref<any>()
const cate_id = ref<any>()
const pingtai_id = ref<any>()

// 弹出框确定
async function confirm() {
  form.value.game_lang_id = (lang_id.value ? lang_id.value : [])?.join(',')
  form.value.game_cate_id = (cate_id.value ? cate_id.value : [])?.join(',')
  form.value.game_pingtai_id = (pingtai_id.value ? pingtai_id.value : [])?.join(
    ','
  )

  if (operation.value == '添加') {
    const res: any = await addSoftware({
      ...form.value
    })
    if (res.code === 200) {
      ElMessage.success('添加成功')
      dialogVisible.value = false
      currentPage.value = 1
      query()
    } else {
      ElMessage.error(res.msg)
    }
  } else if (operation.value == '编辑') {
    const res: any = await editSoftware({
      id: editId.value,
      ...form.value
    })
    if (res.code === 200) {
      ElMessage.success('编辑成功')
      dialogVisible.value = false
      query()
      console.log('error', form.value)
    } else {
      ElMessage.error(res.msg)
    }
  } else {
    const res: any = await editGameNotice({
      id: editId.value,
      gonggao: noticeForm.value.gonggao
    })
    if (res.code === 200) {
      ElMessage.success('编辑公告成功')
      dialogVisible.value = false
      query()
    }
  }
}
// 删除
async function delLanguage(row: any) {
  const res: any = await delSoftware({ ids: [row.game_id] })
  if (res.code === 200) {
    ElMessage.success('删除成功')
    query()
  }
}
// 查询
async function query() {
  try {
    loading.value = true
    const response = await getSoftwareList({
      page: currentPage.value,
      page_size: pageSize.value,
      title: queryForm.value.title
    })
    tableData.value = response?.data?.list
    totalItems.value = response?.data?.count
    loading.value = false
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}
// 清空
function onClear() {
  queryForm.value = {}
}
// 编辑公告
function editNotice(row: any) {
  operation.value = '编辑公告'
  dialogVisible.value = true
  editId.value = row.game_id
  noticeForm.value.gonggao = row.gonggao
}
watch(dialogVisible, () => {
  form.value = {
    title: '',
    jianjie: '',
    icon: '',
    doc_url: '',
    game_pingtai_id: null,
    game_lang_id: null,
    game_cate_id: null,
    xitong_yaoqiu: '',
    min_price: '',
    price: '',
    cuxiao_price: '',
    days: '',
    divide: null,
    is_xianxia: '1',
    is_dongjie: '1',
    taocan: []
  }
})
// 获取列表
onMounted(async () => {
  await globalStore.setLanguage()
  await globalStore.setCategory()
  await globalStore.setPlatform()
  languages.value = globalStore.language
  categories.value = globalStore.category
  platforms.value = globalStore.platform
  query()
})

// 时间格式化
function formatTime(time: number) {
  return time ? Moment(time * 1000).format('YYYY-MM-DD HH:mm:ss') : '-'
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 500px;
  background-color: rgb(214, 211, 211);
  padding: 10px;
}
.pagination {
  margin-top: 20px;
  margin-right: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.query {
  // padding: 20px;
  // padding-bottom: 0;
  .el-input {
    width: 250px;
  }
}
.taocan {
  width: 200px;
  margin: 0 10px 10px 0;
  padding: 10px;
  border: 1px solid #409eff;
  border-radius: 15px;
  .el-input {
    width: 140px;
    margin-right: 5px;
  }
}
</style>
