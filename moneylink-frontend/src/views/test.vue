<template>
    <Aside/>
    
    <el-button @click="openByParentMethod ">打开</el-button>

    <test-dialog  ref="testDom"  v-model:visible="flag" ></test-dialog>

</template>



<script>
import Aside from "@/components/Aside";
import TestDialog from "@/components/TestDialog"
import { reactive, toRefs, ref, onMounted, watch } from "vue"


export default {
    setup() {
     const testDom = ref(null)
     const openByParentMethod = () => {
        testDom.value.dialogVisble = true
        }
    const closeByParentMethod= () => {
      testDom.value.dialogVisble = false
        }
    return {
      testDom,
      openByParentMethod,
      closeByParentMethod,
        }
    },
    name: 'test',
    components: {
    Aside,
    TestDialog,
},
    data(){
        
    }
    

}
</script>
<style>

</style>