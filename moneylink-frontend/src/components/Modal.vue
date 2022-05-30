<template>
  <div class="login_container">
    <div class="modal_box">
      <!-- logo -->
   
      <!-- Login form -->
      <el-form label-width="0px" class="modal_form">
        <el-row>
        <el-form-item style="margin-right:5px">
          <el-input v-model="form.event" class="modal_input" id="event" placeholder="Event Name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.amount" class="modal_input" id="amount" placeholder="Amount"></el-input>
        </el-form-item>
        </el-row>
       
        <el-row justify="end">
          <el-form-item class="modal_btn">
            <el-button  type="primary" round plain size="large" @click="createBill()">Create Bill</el-button>
          </el-form-item>

        </el-row>

        <el-row justify="start">
          <el-form-item class="modal_btn">
            <el-button  type="primary" round plain size="large" @click="split()">Get User</el-button>
          </el-form-item>

        </el-row>
        

      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {


  name: "createBill",
  data() {
      
    return {
        form: {
          name:'',
          user:[],
            amount:0,
        },
      }
    },
    methods: {



    split()
{

var amount = this.form.amount

  
   axios.post('http://localhost:3001/api/user')

  .then(function (response) {
    console.log(response);
    if(response.statusText=="Created"){
      alert("Created Bill successfully!")
      return true
    }
    else{
      alert("There is some problem with backend, please try again!")
      return false
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  

}
,


   SendAccount(){



  const headers = {
    "Content-Type": "application/json"
 
  };


          var token =  sessionStorage.getItem('user')
          var obj = JSON.parse(sessionStorage.user)
          console.log(this.form.event)
          console.log(this.form.amount)
          var id =  sessionStorage.getItem('id')


          

   axios.post('http://localhost:3001/api/bill',{name: this.form.event,user: id,amount: this.form.amount},{headers})

  .then(function (response) {
    console.log(response);
    if(response.statusText=="Created"){
      alert("Created Bill successfully!")
      return true
    }
    else{
      alert("There is some problem with backend, please try again!")
      return false
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  },
  createBill(){
   
      this.SendAccount()
    this.$router.push('/')
    
  }
    },
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100vh;
}
.modal_box {
  width: 350px;
  height: 450px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;

  transform: translate(-50%, -50%);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.modal_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.modal_btn {
  display: flex;
  justify-content: flex-end;
}
.modal_input{
    border: 1px solid rgb(155, 151, 151);
}
#signup_link{
  margin-left: 5px;
}
</style>