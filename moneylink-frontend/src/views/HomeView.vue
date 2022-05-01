<template>
  <div style="padding: 50px">
    <div style="margin: 10px 0">
      
    </div>
    <div style="margin: 10px">
      <el-input v-model="searchTable" placeholder="Enter your key words" style="width: 20%"></el-input>
      <el-button type="primary" style="margin: 5px">Search</el-button>
      <el-button type="primary">Create</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" align="center" label="Date" width="180" sortable/>
    <el-table-column prop="amount" align="center" label="Amount" width="180" />
    <el-table-column prop="description" align="center" label="Description" />
  </el-table>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  data(){
    searchTable: ''
    return{
      tableData:[
  {
    date: '2016-05-03',
    amount: '10',
    description: 'Coles Uid111',
  },
  {
    date: '2016-05-02',
    amount: '20',
    description: 'BigW Uid112',
  },
  {
    date: '2016-05-04',
    amount: '30',
    description: 'Kmart Uid113',
  },
  {
    date: '2016-05-01',
    amount: '30',
    description: 'Myki Uid114',
  },
]
    }
  }
  
}
</script>
