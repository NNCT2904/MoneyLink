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
            <el-form-item
                    v-for="(domain, index) in dynamicValidateForm.domains"
                    :key="domain.key"
                    :label="'Domain' + index"
                    :prop="'domains.' + index + '.value'"
                    :rules="{
                    required: true,
                    message: 'domain can not be null',
                    trigger: 'blur',
                }">
            <el-input v-model="domain.value" />
            <el-button class="mt-2" @click.prevent="removeDomain(domain)"
            >Delete</el-button>
        </el-form-item>
        </el-form-item>
        <el-form-item>
              <formtest />
        </el-form-item>
    </div>
    <el-form-item>

    </el-form-item>
    </el-form>
</template>

<script>

import formtest from '@/components/formtest.vue'
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
      formtest
    //Biaodantest
    //'enter-group-members-form': GroupMembers
    },
  methods: {

   addMember () {
      if (this.groupMemberName) {
        this.groupMembers.push({name: this.groupMemberName})
        this.groupMemberName = ''
      }
    }
  }
}
</script>

<style scoped>
  
</style>
