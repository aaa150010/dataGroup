<template>
<!--  <el-container>-->
<!--    &lt;!&ndash;    头部&ndash;&gt;-->
<!--    <el-header>-->
<!--      <f-header></f-header>-->
<!--    </el-header>-->
<!--    &lt;!&ndash;    主体部分&ndash;&gt;-->
<!--    <el-main>-->
<!--&lt;!&ndash;      <el-container style="height: 100%">&ndash;&gt;-->
<!--        &lt;!&ndash;        主体部分侧边菜单导航&ndash;&gt;-->
<!--&lt;!&ndash;        <el-aside :width="store.asideWidth">&ndash;&gt;-->
<!--          <f-menu></f-menu>-->
<!--&lt;!&ndash;        </el-aside>&ndash;&gt;-->
<!--        &lt;!&ndash;        二级路由导航&ndash;&gt;-->
<!--        <el-main>-->
<!--          &lt;!&ndash;          顶部导航栏路由&ndash;&gt;-->
<!--          <f-tag-list></f-tag-list>-->
<!--          &lt;!&ndash;          二级路由&ndash;&gt;-->
<!--          <router-view v-slot="{ Component }">-->
<!--            <transition name="scale" mode="out-in">-->
<!--              <component :is="Component" />-->
<!--            </transition>-->
<!--          </router-view>-->
<!--        </el-main>-->
<!--&lt;!&ndash;      </el-container>&ndash;&gt;-->
<!--    </el-main>-->
<!--  </el-container>-->
  <div style="width: 100vw;height: 100vh">
<!--    上面部分-->
    <div style="width: 100%;height: 7vh;background-color:red;">
      <f-header></f-header>
    </div>
<!--    下面部分-->
    <div style="width: 100vw;height: 90vh">
      <div style="display: flex;height: 93vh;background-color:rgb(243, 244, 246);">
<!--        左边菜单栏-->
        <div>
          <f-menu></f-menu>
        </div>
<!--        右边二级路由-->
        <div style="margin-left: 20px;box-sizing: border-box;width: 100%;">
<!--          taglist-->
          <div style="background-color:#fff">
            <f-tag-list></f-tag-list>
          </div>
<!--          二级路由-->
          <div style="margin-top: 10px;background-color:#fff;">
            <router-view v-slot="{ Component }">
              <transition name="scale" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useStore} from "@/pinia/index.js";
const store  = useStore()
import FHeader from './components/FHeader.vue'
import FMenu from './components/FMenu.vue'
import FTagList from './components/FTagList.vue'
</script>
<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
