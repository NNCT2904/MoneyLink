<template>
  <div>
  <div id="Aside">
    <Aside />
    <div style="width:100%; height:100%">
    <div style="margin: 10px; margin-left:30%">
      <el-input v-model="searchTable" placeholder="Enter your key words" style="width:20%"></el-input>
      <el-button type="primary" style="margin: 5px">Search</el-button>
      <el-button type="primary" @click="dialogBill = true" class="addBtn">Add Bill</el-button>
      <el-button type="primary" @click="dialogDeleteBill = true" class="addBtn">Delete Bill</el-button>
      <el-button type="primary" @click="dialogUser = true" class="addBtn">Edit Members</el-button>
    </div>
    <el-dialog
  title="Add Bill"
  v-model="dialogBill"
  width="30%">
  <el-form ref="form1" :model="form1" label-width="120px">
  <el-form-item label="Name">
    <el-input v-model="form1.name"></el-input>
  </el-form-item>
  <el-form-item label="Amount">
    <el-input v-model="form1.amount"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
</el-dialog>
<el-dialog
  title="Delete Bill"
  v-model="dialogDeleteBill"
  width="30%">
  <el-form ref="form3" :model="form3" label-width="120px">
  <el-form-item label="Name">
    <el-input v-model="form3.name"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Delete</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
</el-dialog>
<el-dialog
  title="Edit Members"
  v-model="dialogUser"
  width="30%">
  <el-form ref="form2" :model="form2" label-width="120px">
  <el-form-item label="Name">
    <el-input v-model="form2.name"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button type="primary">Delete</el-button>
  </el-form-item>
</el-form>
</el-dialog>
    <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="household" align="center" label="Household" width="250"/>
    <el-table-column prop="bill" align="center" label="Bill"/>
    <el-table-column prop="members" align="center" label="Members">
    </el-table-column>
    <el-table-column fixed="right" label="Action" width="120">
      <template>
        <el-button
          @click="Split()"
          type="text"
          size="small"
        >
        Split the bill
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
  </div>
  </div>
</template>

<script>
import Aside from "@/components/Aside";
export default {
  created() {
    this.$store.state.ifFrameShow=true
  },
  name: 'houseHold',
  components: {
    Aside
  },
  data(){
    searchTable: ''
    var bill=sessionStorage.getItem('billName0')+', '
    for(var i=1;i<sessionStorage.getItem('bill_length');i++){
      bill=bill+sessionStorage.getItem('billName'+i)+', ';
    }
    var member=sessionStorage.getItem('memberName0')+', '
    for(var i=1;i<sessionStorage.getItem('member_length');i++){
      member=member+sessionStorage.getItem('memberName'+i)+', ';
    }
    return{
      form1: {
          name: '',
          amount: '',
        },
      form2: {
          name: '',
        },
      form3: {
          name: '',
        },
      tableData:[
  {
    household: sessionStorage.getItem('user_email'),
    bill: bill,
    members: member,
  },
],
dialogBill: false,
dialogDeleteBill: false,
dialogUser: false,
    }
  },
}
</script>

<style>
</style>
