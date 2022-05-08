<template>
  <div class="login_container">
    <div class="login_box">
      <!-- logo -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- Login form -->
      <el-form label-width="0px" class="login_form">
        <el-row>
        <el-form-item style="margin-right:5px">
          <el-input class="login_input" id="SignUpFirstName" placeholder="First Name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input class="login_input" id="SignUpLastName" placeholder="Last Name"></el-input>
        </el-form-item>
        </el-row>
        <el-form-item >
          <el-col :span="11" class="login_input">
            <el-date-picker 
            type="date"
            placeholder="Birthday"
            v-model="form.date1"
            style="width: 100%;">   
            </el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-select class="login_input" v-model="form.region" placeholder="Please select your location">
            <el-option label="Melbourne" value="locationMelbourne"></el-option>
            <el-option label="Sydney" value="locationSydney"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input class="login_input" id="login_email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input class="login_input" id="login_password" placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input class="login_input" id="login_password" placeholder="Pleaese enter your password again"></el-input>
        </el-form-item>
        <el-row justify="center">
          <el-form-item class="login_btn">
            <el-button  type="primary" round plain size="large">Sgin Up</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      },
    },
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100vh;
}
.login_box {
  width: 450px;
  height: 450px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
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
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.login_btn {
  display: flex;
  justify-content: flex-end;
}
.login_input{
    border: 1px solid rgb(155, 151, 151);
}
</style>