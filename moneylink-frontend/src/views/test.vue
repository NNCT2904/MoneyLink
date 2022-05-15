<template>
<el-container class="layout-container-demo" style="height: 500px">
    <el-aside width="200px">
    <Aside/>
    </el-aside>
    <el-main>
        <Testcard />
        <Balance />
    </el-main>
    
  </el-container>
</template>



<script>
import Aside from "@/components/Aside";
import Testcard from "@/components/TestCard.vue"

import Balance from "@/components/Balance.vue"

export default { 
    name: 'test',
    components: {
    Aside,
    Testcard,
    Balance
},
    data(){
        
    }
    

}
</script>
<style>
.el-main {
  padding: 0;
}
</style>