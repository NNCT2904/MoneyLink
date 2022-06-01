<template>
  <div>
  <div id="Aside">
    <Aside />
    <div style="width:100%; height:100%">
    <div style="margin: 10px; margin-left:30%">
      <el-input v-model="searchTable" placeholder="Enter your key words" style="width:20%"></el-input>
      <el-button type="primary" style="margin: 5px">Search</el-button>
      <!--test-dialog type="primary" ref="testDom"  v-model:visible="flag" :btname='btname' :title='title' ></test-dialog-->
      <el-button type="primary" @click="dialogFormVisible = true">add</el-button>


    </div>
    <el-table :data="tableData" stripe style="width: 100%" ref="multipleTable" tooltip-effect="dark">
    <el-table-column label="No." type="index"  width="80px" align="center"></el-table-column>
    <el-table-column prop="id" align="center" label="Friend ID" width="250" ></el-table-column>
    <el-table-column prop="amount" align="center" label="Households with this firend" ></el-table-column>
    <el-table-column prop="description" align="center" label="Groups with this friend" ></el-table-column>
    <el-table-column >
    <template v-slot="scope">       
          <el-button type="danger" v-if="!scope.row.editing"  @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
    </template> 
    </el-table-column>
  </el-table>
  <el-dialog v-model="dialogFormVisible">
  <template #title>Add friend</template>
    <el-form :model="form">
      <el-form-item label="id" style="width:300px" >
        <el-input v-model="form.id" autocomplete="off" placeholder="Please enter a name or email"/>
      </el-form-item>
      <el-form-item label="amount" style="width:300px" >
        <el-input v-model="form.amount" autocomplete="off" placeholder="Please enter an amounts"/>
      </el-form-item>
      <el-form-item label="Group" style="width:300px">
        <el-select v-model="form.description" placeholder="Please select a group">
          <el-option label="Coles Uid111" value="Coles Uid111" />
          <el-option label="BigW Uid112"  value="BigW Uid112"/>
          <el-option label="Kmart Uid113"  value="Kmart Uid113"/>
          <el-option label="Myki Uid114"  value="Myki Uid114"/>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="saveBook"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
  </div>
  </div>
  </div>
</template>

<script>
import Aside from "@/components/Aside";
import TestDialog from "@/components/TestDialog"
export default {
  created() {
    this.$store.state.ifFrameShow=true
  },
  name: 'friends',
  
  components: {
    Aside,
    TestDialog,
  },
  data(){
    searchTable: ''
    return{
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
      },
      tableData:[
  {
    id: 'Amy',
    amount: '10',
    description: 'Coles Uid111',
  },
  {
    id: 'Billy',
    amount: '20',
    description: 'BigW Uid112',
  },
  {
    id: 'Cindy',
    amount: '30',
    description: 'Kmart Uid113',
  },
  {
    id: 'David',
    amount: '30',
    description: 'Myki Uid114',
  },
]
    }
  },
  methods:{
    handleDelete(index){ //删除行数
            this.tableData.splice(index, 1)
        },
        saveBook(){
      this.tableData.push({
      id: this.form.id,
      amount: this.form.amount,
      description: this.form.description,
      });
    this.dialogFormVisible = false;
    },
  
  }
  
}
</script>

<style>

</style>

