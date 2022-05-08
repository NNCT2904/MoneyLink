<template>
    <div style="height: 50px; line-height: 50px; border-bottom: 1px solid #ccc; display: flex">
    <img alt="Vue logo" src="../assets/logo.png">
    <div style="width: 200px; padding-left: 30px; font-weight: bold; ">MoneyLink</div>
    <div style="flex: 1"></div>
    <div v-if="this.$store.state.ifFrameShow" style="width: 100px">
        <el-dropdown>
            <span class="el-dropdown-link">
           <br>Hi,Tommy <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
        <template #dropdown>
            <el-dropdown-menu>
            <el-dropdown-item>Profile</el-dropdown-item>
            <el-dropdown-item>Settings</el-dropdown-item>
            <el-dropdown-item>Log out</el-dropdown-item>
        </el-dropdown-menu>
    </template>
</el-dropdown>
    </div>
    </div>
</template>

<script>
import {ArrowDown} from"@element-plus/icons-vue";
export default {
    name:"Header",
    components:{
        ArrowDown
    }
}
</script>

<style>

</style>
