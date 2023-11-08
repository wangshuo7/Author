<template>
  <div class="left">
    <div class="logo">
      <img class="logo-img" src="@/assets/huLogo1.jpg" alt="" />
    </div>
    <div>
      <el-menu default-active="1" class="el-menu-vertical-demo">
        <el-menu-item index="software" @click="goSoftware">
          <el-icon><Orange /></el-icon>
          <template #title>{{ $t('menu.software') }}</template>
        </el-menu-item>
        <el-sub-menu index="personal">
          <template #title>
            <el-icon><setting /></el-icon>
            <span>{{ $t('menu.personal') }}</span>
          </template>
          <el-menu-item index="personal-1" @click="goInfo">{{
            $t('info')
          }}</el-menu-item>
          <el-menu-item index="personal-2" @click="goTransfer">{{
            $t('transfer')
          }}</el-menu-item>
        </el-sub-menu>
        <!-- <el-menu-item index="personal" @click="goPersonal">
          <el-icon><setting /></el-icon>
          <template #title>{{ $t('menu.personal') }}</template>
        </el-menu-item> -->
      </el-menu>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Orange, Setting } from '@element-plus/icons-vue'

import router from '../../../router'
function goSoftware() {
  router.push('/software')
}
function goInfo() {
  router.push('/info')
}
function goTransfer() {
  router.push('/transfer')
}
</script>
<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
  height: 100%;
  border-right: 2px solid #dcdfe6;
}
.left {
  width: 100%;
  height: 100vh;
  border-right: 2px solid #dcdfe6;
  display: flex;
  flex-direction: column;
  .logo {
    height: 70px;
    background-color: orange;
    border-bottom: 1px solid skyblue;
    .logo-img {
      display: block;
      width: 35%;
      overflow: hidden;
      margin: 0 auto;
    }
  }
}
:deep(.el-menu) {
  border: none;
}
</style>
