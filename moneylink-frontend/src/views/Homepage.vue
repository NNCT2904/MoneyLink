<template>
<div style="height: 100%">
  <el-row class="somemorepadding"  style="padding: 30px 30px 5px 30px; margin: 0px 0px 30px 0px; height: 50%; background: #1890ff; display: flex; flex-direction: column-reverse">
      <h2 style="color: #dddddd; font-family: 'Cantarell'; font-size: 150%; text-align: center">
        Money Link makes it easy to settle shared expenses with your friends!
      </h2>
      <h1 style="color: #eeeeee; font-family: 'Cantarell'; font-size: 450%; text-align: center; margin-bottom: 10px">
        <b>Money link</b>
      </h1>
    </el-row>
    <el-row style="text-align: center; padding: 1% 40%">
      <div style="font-family: 'Cantarell'; font-size: 115%">
        <label style="font-size: 120%; margin-right: 20px">
          <b>Get started:</b>
        </label>
        <el-button type="primary" size="large" @click="createNewGroupEvent">Create a new Group</el-button>
      </div>
    </el-row>
    <el-row style="font-family: 'Cantarell'; text-align: justify; font-size: 115%; margin-top: 40px">
      <el-col :offset=7 :span=10>
        You and your friends went on a holiday together?
        You cooked something fancy as a group?
        You had a big party and had to buy a lot of drinks?
        Either way, you now have a big pile of open bills and it's going to be quite a chaos to find out who has to pay
        how much money to who in order to settle all expenses.
        <br><br>
        With <b>Money link</b>, splitting the bills becomes much easier!
        You simply enter who participated and what expenses the people had, and you will get a list of transactions
        which settle all the debts.
        You can also add expenses which are not shared by the whole group, but only a part of the group.
      </el-col>
    </el-row>
</div>

</template>



<script>


export default { 
    name: 'Home',
    components: {

},
methods: {
    createNewGroupEvent () {
      this.$router.push({name: 'CreateGroupEvent'})
    }
  },
  created () {
    document.title = 'Money link: Split Expenses with your Friends'
  },
    data(){
        
    }
    

}
</script>
<style>

</style>