<template>
<div class="fheader">
<!--  logo-->
  <div class="logo">
    <div  class="logoFont">
      <el-icon size="25" class="mr-2"><eleme-filled /></el-icon>
      <span style="margin-left: 5px">数据治理</span>
    </div>
  </div>
<!--  图标右边部分-->
  <div class="rightBox">
<!--    左边收缩和刷新-->
    <div class="box1">
<!--      收缩-->
      <el-icon size="20" class="icon-btn" @click="handleAsideMenu" color="#fff">
        <fold v-if="isopen"/>
        <expand v-else/>
      </el-icon>
<!--      刷新-->
      <el-tooltip
          class="item"
          effect="dark"
          content="刷新"
          placement="bottom"
      >
        <el-icon size="20" style="margin-left: 20px" @click="handleRefresh" color="#fff"><refresh /></el-icon>
      </el-tooltip>
    </div>
<!--    右边个人信息-->
    <div class="box2">
      <!--      联系我们-->
      <el-tooltip
          class="item"
          effect="dark"
          content="联系我们"
          placement="bottom"
      >
        <el-icon size="20" class="icon-btn"  color="#fff">
          <Promotion />
        </el-icon>
      </el-tooltip>
      <!--      全屏-->
      <el-tooltip
          class="item"
          effect="dark"
          :content="isFullscreen ? '退出全屏':'全屏'"
          placement="bottom"
      >
        <el-icon size="20" style="margin:0 20px 0 20px" @click="toggle" color="#fff"><FullScreen /></el-icon>
      </el-tooltip>
<!--      个人信息退出登录-->
      <el-dropdown @command="handleCommand">
        <div style="color: #fff;display: flex;justify-content: center;align-items: center">
          <el-avatar :size="25" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <span style="margin-left: 5px">admin</span>
          <el-icon>
            <arrow-down />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="resetPassword">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</div>
</template>
<script setup>
import {useStore} from "@/pinia/index.js";
import {computed} from "vue";
import {useFullscreen} from "@vueuse/core";
const { isFullscreen, enter, exit, toggle } = useFullscreen()
const store=useStore()
// 展开/收起侧边菜单
const handleAsideMenu = ()=> store.handleAsideMenu()
const isopen = computed(()=>store.asideWidth == "250px")
// 刷新
const handleRefresh = ()=> location.reload()

// 头像下拉菜单选中
const handleCommand = (command)=>{
  switch (command) {
    case "logout":
      // showModal("是否要退出登录").then(()=>{
      //   showFullLoading()
      //   logout().finally(()=>{
      //     store.dispatch("logout")
      //     router.push("/login")
      //     toast("退出登录成功")
      //     hideLoading()
      //   })
      // })
      console.log('退出登录')
      break;
    case "resetPassword":
      // formDrawerRef.value.open()
      console.log('修改密码')
      break;
    default:
      break;
  }
}
</script>
<style scoped>
.fheader{
  height: 100%;
  background-color: rgb(67, 56, 202);
  display: flex;
  .logo{
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logoFont{
      font-size: 1.25rem;
      font-weight: 100;
      color: rgba(224, 231, 255);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .rightBox{
    width: calc(100% - 250px);;
    display: flex;
    justify-content: space-between;
    .box1{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .box2{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .dropDown{
        vertical-align: center;
      }
    }
  }
}
:focus-visible {
  outline: none;
}
</style>