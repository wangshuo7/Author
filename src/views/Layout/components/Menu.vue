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
        <el-menu-item index="controls" @click="goControls">
          <el-icon><icon-menu /></el-icon>
          <template #title>{{ $t('menu.controls') }}</template>
        </el-menu-item>
        <el-menu-item index="feedback" @click="goFeedback">
          <el-icon><SwitchFilled /></el-icon>
          <template #title>{{ $t('menu.feedback') }}</template>
        </el-menu-item>
        <el-menu-item index="revenue" @click="goRevenue">
          <el-icon><Key /></el-icon>
          <template #title>{{ $t('menu.revenue') }}</template>
        </el-menu-item>
        <el-menu-item index="discount" @click="goDiscount">
          <el-icon><CreditCard /></el-icon>
          <template #title>{{ $t('menu.discount') }}</template>
        </el-menu-item>
        <el-sub-menu index="personal">
          <template #title>
            <el-icon><setting /></el-icon>
            <span>{{ $t('menu.personal') }}</span>
          </template>
          <el-menu-item index="personal-1" @click="goPersonal"
            >个人信息</el-menu-item
          >
          <el-menu-item index="personal-2" @click="goTransfer"
            >转账</el-menu-item
          >
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
import {
  SwitchFilled,
  Menu as IconMenu,
  Orange,
  Setting,
  CreditCard,
  Key
} from '@element-plus/icons-vue'

import router from '../../../router'
function goSoftware() {
  router.push('/software')
}
function goControls() {
  router.push('/controls')
}
function goFeedback() {
  router.push('/feedback')
}
function goRevenue() {
  router.push('/revenue')
}
function goDiscount() {
  router.push('/discount')
}
function goPersonal() {
  router.push('/personal')
}
function goTransfer() {
  router.push('/personal/transfer')
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
