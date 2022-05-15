<template>
    <div>
        <el-menu
        style="width: 200px; min-height: calc(100vh-50px)"
        class="el-menu-vertical-demo"
        router>
          <el-menu-item  index="household">
            <el-icon><HomeFilled /></el-icon>
            <span>HouseHold</span>
          </el-menu-item>
          <el-menu-item index="groups">
            <el-icon><Menu /></el-icon>
            <span>Gourps</span>
          </el-menu-item>
          <el-menu-item index="friends">
            <el-icon><UserFilled /></el-icon>
            <span>Friends</span>
          </el-menu-item>
          <el-sub-menu index="test">
            <template #title>
              <el-icon><setting /><Menu /></el-icon>test
            </template>
            <el-sub-menu index="Group 1">
              <template #title>Group 1</template>
              <el-menu-item index="3-1">GroupOption 1</el-menu-item>
              <el-menu-item index="3-2">GroupOption 2</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="Group 2">
              <template #title>Group 2</template>
              <el-menu-item index="3-3">GroupOption 3</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
    </div>
</template>

<script>
import {HomeFilled,UserFilled,Menu} from"@element-plus/icons-vue";
export default{
    name:"Aside",
    components: {
        HomeFilled,
        UserFilled,
        Menu
    },
}
</script>

<style scoped>

</style>
