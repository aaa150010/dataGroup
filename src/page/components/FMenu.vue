<template>
    <div class="fmenu" :style="{ width:store.asideWidth }">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>用户管理</span>
          </template>
            <el-menu-item index="1-4-2">
              <el-icon><Operation /></el-icon>
              角色管理1
            </el-menu-item>
          <el-menu-item index="1-4-1">
            <el-icon><Comment /></el-icon>
            角色管理2
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><Share /></el-icon>
          <template #title>权限管理</template>
        </el-menu-item>
      </el-menu>
    </div>
</template>
<script setup>
import {computed} from 'vue'
import {useStore} from "@/pinia/index.js";
const store=useStore()
// 是否展开菜单
const isCollapse = computed(()=>!(store.asideWidth == "250px"))
</script>
<style scoped>
.fmenu{
  height: 100%;
  background-color: #fff;
  transition: all 0.5s ease;
}
.fmenu::-webkit-scrollbar {
  width: 0px;
}
.el-menu{
  border:0!important;
}
</style>