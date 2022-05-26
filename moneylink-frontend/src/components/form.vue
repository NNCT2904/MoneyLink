<template>
    <el-form :model="form" label-width="550px">
    <div style="width: 120%">
        <el-form-item label="Group name:">
            <el-input v-model="form.name" 
                    placeholder="For which event do you want to split expenses?"/>
        </el-form-item>
        <el-form-item label="Currency:" >
            <el-select v-model="form.currency" placeholder="What currency did you pay in?">
                <el-option label="AUD ($)" value="$" />
                <el-option label="CNY (¥)" value="¥" />
            </el-select>
        </el-form-item>
        <el-form-item label="Group Members:">
            
        </el-form-item>
    </div>
    </el-form>
</template>

<script>

import GroupMembers from '@/components/GroupMembers'
import GroupBillSplitterService from '@/services/groupbillsplitterservice'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'CreatePageForm',
  
  data () {
    return {
        form: {
        name: '',
        currency: {},
        postEventLoading: false,
        groupEventId: '',
        }
      
      
      
      
    }
  },
  components: {
    //Biaodantest
    //'enter-group-members-form': GroupMembers
    },
  methods: {
   
  }
}
</script>

<style scoped>
  
</style>
