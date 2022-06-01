<template>

 <el-button text @click="dialogFormVisible = true"
    >{{btname}}</el-button
  >

  <el-dialog v-model="dialogFormVisible">
  <template #title>{{title}}</template>
    <el-form :model="form">
      <el-form-item label="Name" :label-width="formLabelWidth" >
        <el-input v-model="form.name" autocomplete="off" placeholder="Please select a name or email"/>
      </el-form-item>
      <el-form-item label="Group" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a group">
          <el-option label="Friends"  />
          <el-option label="group name 2"  />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>

</template>

<script>
import { ref, watch } from "vue"
export default {
    data() {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
        },
        formLabelWidth: '120px',
      }
    },
    props: {
    btname: String,
    title: String,
    show: {
      type: Boolean,
    }
  },
  }

 

</script>

<style scoped>

</style>
