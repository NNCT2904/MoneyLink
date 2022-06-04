<template>
  <div>
  <div id="Aside">
    <Aside />
    <div style="width:100%; height:100%">
    <div style="margin: 10px; margin-left:5%">
      <el-input v-model="searchTable" placeholder="Enter your key words" style="width:20%"></el-input>
      <el-button type="primary" style="margin: 5px">Search</el-button>
      <el-button type="primary" @click="dialogBill = true" class="addBtn">Add Bill</el-button>
      <el-button type="primary" @click="dialogDeleteBill = true" class="addBtn">Delete Bill</el-button>
      <el-button type="primary" @click="dialogAddUser = true" class="addBtn">Add Members</el-button>
      <el-button type="primary" @click="dialogUser = true" class="addBtn">Delete Members</el-button>
    </div>
    <el-dialog
  title="Add Bill"
  v-model="dialogBill"
  width="30%">
  <el-form ref="form1" :model="form1" label-width="120px">
  <el-form-item label="Name">
    <el-input v-model="form1.name" placeholder="any"></el-input>
  </el-form-item>
  <el-form-item label="Amount">
    <el-input v-model="form1.amount" placeholder="any"></el-input>
  </el-form-item>
  <el-form-item label="User to Pay">
    <el-input v-model="form1.user" placeholder="member0"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="createBill()">Create</el-button>
  </el-form-item>
</el-form>
</el-dialog>
<el-dialog
  title="Delete Bill"
  v-model="dialogDeleteBill"
  width="30%">
  <el-form ref="form3" :model="form3" label-width="120px">
  <el-form-item label="Name">
    <el-input v-model="form3.name" placeholder="bill0"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="deleteBill()">Delete</el-button>
  </el-form-item>
</el-form>
</el-dialog>
<el-dialog
  title="Delete Members"
  v-model="dialogUser"
  width="30%">
  <el-form ref="form2" :model="form2" label-width="120px">
  <el-form-item label="Name">
    <el-input v-model="form2.name" placeholder="member0"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="deleteMember()">Delete</el-button>
  </el-form-item>
</el-form>
</el-dialog>
<el-dialog
  title="Add Members"
  v-model="dialogAddUser"
  width="30%">
  <el-form ref="form4" :model="form4" label-width="120px">
  <el-form-item label="Name">
    <el-input v-model="form4.name" placeholder="any"></el-input>
  </el-form-item>
  <el-form-item label="Email">
    <el-input v-model="form4.email" placeholder="any"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="addMember()">Add</el-button>
  </el-form-item>
</el-form>
</el-dialog>
    <el-table :data="tableData" stripe style="width: 100%" >
    <el-table-column prop="bill" align="center" label="Bill Name" />
    <el-table-column prop="members" align="center" label="Members Name" />
    <el-table-column fixed="right" label="Action">
        <el-button
          @click="splitBill()"
          type="text"
          size="small"
        >
        Split the bill
        </el-button>
    </el-table-column>
  </el-table>
  </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import Aside from "@/components/Aside";
import emailjs from '@emailjs/browser';
import apiKeys from '../../.env';
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
    var bill="bill0: "+sessionStorage.getItem('bill0Name')+', '
    for(var i=1;i<sessionStorage.getItem('bill_length');i++){
      bill=bill+"bill"+i+": "+sessionStorage.getItem('bill'+i+"Name")+', ';
    }
    var member="member0: "+sessionStorage.getItem('member0Name')+', '
    for(var i=1;i<sessionStorage.getItem('member_length');i++){
      member=member+"member"+i+": "+sessionStorage.getItem('member'+i+"Name")+', ';
    }
    return{
      form1: {
          name: '',
          amount: '',
          user:'',
        },
      form2: {
          name: '',
        },
      form3: {
          name: '',
        },
      form4: {
          name: '',
          email:'',
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
dialogAddUser: false,
    }
  },
  methods:{
    update(){
   axios.post('http://localhost:3001/api/login',{email: sessionStorage.getItem('user_email')})

  .then(function (response) {
    if(response.statusText=="OK")
    {
      sessionStorage.setItem('bill_length',response.data[0].bills.length)
      sessionStorage.setItem('member_length',response.data[0].members.length)
      for (var i=0;i<response.data[0].bills.length;i++){
        sessionStorage.setItem('bill'+i,response.data[0].bills[i]._id)
      }
      for (var i=0;i<response.data[0].members.length;i++){
        sessionStorage.setItem('member'+i,response.data[0].members[i]._id)
      }
      for (var i=0;i<response.data[0].bills.length;i++){
        sessionStorage.setItem('bill'+i+'Name',response.data[0].bills[i].name)
      }
      for (var i=0;i<response.data[0].members.length;i++){
        sessionStorage.setItem('member'+i+'Name',response.data[0].members[i].username)
      }
      setTimeout(function(){
        window.location.reload()
      },1500)
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  },
    createBill(){
      axios.post('http://localhost:3001/api/household/addbill',{userId:sessionStorage.getItem(this.form1.user),householdId:sessionStorage.getItem('user_id'),name:this.form1.name,amount:this.form1.amount})
      .then(res => {
  console.log(res)
  if(res.statusText=="OK"){
    this.sendEmail('You have successfully created the bill '+this.form1.name+" for "+this.form1.amount+" dollars under user: "+sessionStorage.getItem(this.form1.user+'Name'),sessionStorage.getItem('user_name'))
    alert("Created Sucessfully!")
    this.update()
  }
})
.catch(function (error) {
    console.log(error);
  });
    },
    deleteBill(){
      axios.delete('http://localhost:3001/api/bill', {	
  data: {
    _id: sessionStorage.getItem(this.form3.name)
  }})
.then(res => {
  console.log(res)
  if(res.statusText=="OK"){
    this.sendEmail('You have successfully deleted the bill '+sessionStorage.getItem(this.form3.name+'Name'),sessionStorage.getItem('user_name'))
    alert("Delete Sucessfully!")
     this.update()
  }
})
.catch(function (error) {
    console.log(error);
  });
    },
    
    deleteMember(){
      axios.delete('http://localhost:3001/api/user', {	
  data: {
    _id: sessionStorage.getItem(this.form2.name)
  }
}).then(res => {
  console.log(res)
  if(res.statusText=="OK"){
    this.sendEmail('You have successfully deleted the member '+sessionStorage.getItem(this.form2.name+'Name'),sessionStorage.getItem('user_name'))
    alert("Delete Sucessfully!")
    this.update()
  }
})
.catch(function (error) {
    console.log(error);
  });
    },
  addMember(){
      axios.post('http://localhost:3001/api/user',{username:this.form4.name,email:this.form4.email})
      .then(res => {
  console.log(res)
  if(res.statusText=="Created"){
    axios.post('http://localhost:3001/api/household/addMember',{householdId:sessionStorage.getItem('user_id'),userId:res.data._id})
    .then(res =>{
      console.log(res)
      if(res.statusText=="OK"){
        this.sendEmail('You have successfully added the member '+this.form4.name+" with email "+this.form4.email,sessionStorage.getItem('user_name'))
        alert('Add successfully!')
        this.update()
      }
    })
  }
})
.catch(function (error) {
    console.log(error);
  });
    },
  splitBill(){
    axios.get('http://localhost:3001/api/household/debtCalculate?_id='+sessionStorage.getItem('user_id'))
    .then(res=>{
      console.log(res)
      sessionStorage.setItem('result',res.data)
      alert(res.data)
    })
  },
  sendEmail(message,name){
    var templateParams = {
    to_name: name,
    message: message,
};
 
emailjs.send(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, templateParams,apiKeys.USER_ID)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }
  }
}


</script>

<style>

</style>
