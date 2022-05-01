<template>
    <div>
        <el-menu
        style="width: 200px; min-height: calc(100vh-50px)"
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Menu /></el-icon>
            <span>HouseHold</span>
          </template>
            <el-menu-item index="1-1">Split</el-menu-item>
            <el-menu-item index="1-2">Payment</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><Menu /></el-icon>
          <span>Gourps</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><Menu /></el-icon>
          <span>Friends</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
import {Menu} from"@element-plus/icons-vue";
export default{
    name:"Aside",
    components: {
        Menu
    }
}
</script>

<style scoped>

</style>
