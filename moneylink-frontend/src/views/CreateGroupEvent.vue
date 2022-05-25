<template>
<el-row class="somemorepadding"  style="padding: 30px 30px 5px 30px; margin: 0px 0px 30px 0px; background: #1890ff">
      <el-col :offset=1>
        <h1 class="leftaligned" style="white-space: nowrap">
          <label style="color: #eeeeee; font-family: 'Cantarell'; font-size: 120%">
            Create new Group Event
          </label>
        </h1>
      </el-col>
    </el-row>
    <el-row>
      <CreatePageForm />
    </el-row>

</template>

<script>

import CreatePageForm from '@/components/form.vue'
import GroupBillSplitterService from '@/services/groupbillsplitterservice'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'CreatePage',
  
  data () {
    return {
     
      
    }
  },
  components: {
    //Biaodantest
    CreatePageForm
    },
  methods: {
    // Create event and let members component push members to it
    createEvent () {
      this.$v.$touch()
      this.$refs.enterGroupMembersForm.$v.$touch()
      if (this.$v.$error || this.$refs.enterGroupMembersForm.$v.$error) {
        this.$message.destroy()
        this.$message.error('Please enter valid data!', 3)
        return
      }

      this.postEventLoading = true
      GroupBillSplitterService.postGroupEvent({name: this.name, currencyPrefix: this.currency.currency})
        .then(event => {
          this.groupEventId = event.data.data._id
          this.$refs.enterGroupMembersForm.okPressed(() => {
            this.$router.push({name: 'GroupEvent', params: {id: this.groupEventId}})
          }, this.groupEventId)
        })
        .catch(err => {
          console.log(err)
          this.$message.destroy()
          this.$message.error(`Group Event could not be created: ${err}`, 5)
          this.postEventLoading = false
        })
    },
    addMember () {
      if (this.groupMemberName) {
        this.groupMembers.push({name: this.groupMemberName})
        this.groupMemberName = ''
      }
    }
  },
  created () {
    document.title = 'Create new Group Event | Money link'
  },
  validations: {
    name: {
      required
    },
    // Double nesting necessary for select element to show placeholder
    currency: {
      currency: {
        required
      }
    }
  }
}
</script>

<style scoped>
  
</style>
