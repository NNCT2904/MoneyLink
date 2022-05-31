<template>
  <div>
  <div id="Aside">
    <Aside />
    <div style="width:100%; height:100%">
    <div style="margin: 10px; margin-left:30%">
      <el-input v-model="searchTable" placeholder="Enter your key words" style="width:20%"></el-input>
      <el-button type="primary" style="margin: 5px">Search</el-button>
      <el-button type="primary" @click="addFlag=true;dialogVisible = true "
          round>Create</el-button>
    </div>
    <el-table
      :data="bookList"
      border
      style="width: 100%"
      stripe
      ref="multipleTable"
      tooltip-effect="dark"
    >
      <el-table-column label="No." type="index"  width="80px" align="center"></el-table-column>
      <el-table-column prop="Name" label="Group name"></el-table-column>
      <el-table-column prop="Author" label="Group Organizer"></el-table-column>
      <el-table-column prop="Type" label="Type"></el-table-column>
      <el-table-column prop="Count" label="Amount"></el-table-column>
      <el-table-column >
       <!--<template slot-scope="scope">
          <el-button type="primary" label="Edit" icon="el-icon-edit"  @click="editBook(scope.row)">Edit</el-button>
        </template> -->
        <template v-slot="scope">
          <el-button type="danger" v-if="!scope.row.editing" icon="el-icon-delete"  @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template> 
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 20]"
      :page-size="size"
      style="float:right"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <el-dialog
      :title="addFlag?'New group':'EditList'"
      
      v-model="dialogVisible"
      :before-close="handleClose"
    >
      <el-form ref="form" label-width="80px">
        <el-form-item label="Name" style="width:300px">
          <el-input v-model="book.Name" placeholder="Please enter gorup name"></el-input>
        </el-form-item>
        <el-form-item label="Organizer" style="width:300px">
          <el-input v-model="book.Author" placeholder="Please enter Group Organizer"></el-input>
        </el-form-item>
        <el-form-item label="Type" style="width:300px">
          <el-input v-model="book.Type" placeholder="Please enter Group Type"></el-input>
        </el-form-item>
        <el-form-item label="Amount" style="width:300px">
          <el-input v-model="book.Count" placeholder="Please enter Amount"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="saveBook">Submit</el-button>
        <el-button type="primary" @click="dialogVisible = false">Cancel</el-button>
      </span>
    </el-dialog>
    <!--<el-dialog
      title="Tpis"
      
      v-model="dialog2Visible"
      :before-close="handleClose"
    >
      <span>Are you sure to delete</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleDel">Submit</el-button>
        <el-button type="primary" @click="dialog2Visible = false">Cancel</el-button>
      </span>
    </el-dialog>-->
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
    
    return{
      dialogVisible: false,
      dialog2Visible: false,
      activeIndex2: "1",
      total: 0,
      size: 5,
      page: 1,
      book: {},
      addFlag: true,
      curId: "",
      bookList:[
  {
    Name: 'aaa',
    Author: 'me',
    Type: 'Coles Uid111',
    Count: '10',
  },
  {
    Name: 'aaa',
    Author: 'me',
    Type: 'Coles Uid111',
    Count: '10',
  },
  {
    Name: 'aaa',
    Author: 'me',
    Type: 'Coles Uid111',
    Count: '10',
  },
  {
    Name: 'aaa',
    Author: 'me',
    Type: 'Coles Uid111',
    Count: '10',
  },
  {
    Name: 'aaa',
    Author: 'me',
    Type: 'Coles Uid111',
    Count: '10',
  },
  
],

    }
  },
 
  methods: {
    handleDelete(index){ //删除行数
            this.bookList.splice(index, 1)
        },
    saveBook(){
      this.bookList.push({
      Name: this.book.Name,
      Author: this.book.Author,
      Type: this.book.Type,
      Count: this.book.Count,
      });

    },
    delBook(row) {
      this.addFlag = false;
      this.dialog2Visible = true;
      this.curId = row.ID;
    },
    handleClose(done) {
      done();
    },
    handleSizeChange(val){
      this.size = val
      this.getBookList()
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getBookList();
    },
  },
  async getBookList() {
      try {
        let res = await axios.post(
          //"",//add back end url here
          qs.stringify({
            page: this.page,
            size: this.size
          })
        );
        this.total = res.data.Data.Total;
        this.bookList = res.data.Data.List;
        
      } catch (e) {
        console.log(e);
      }
    },
    //saveBook() {
     // this.bookList.push({
    // Name: '',
   // Author: '',
    //Type: '',
    //Count: '',
     // });
      //try {
        //let res = await axios.post(
          //"",//add back end url here
          //qs.stringify({
           // id: this.book.ID,
          //  name: this.book.Name,
          //  type: this.book.Type,
           // author: this.book.Author,
          //  count: this.book.Count
         // })
       // );
       // this.dialogVisible = false;
       // this.book = {};
      //  this.$message({
        //  message: res.data.Msg,
       //   type: "success"
       // });
      //  this.getBookList();
     // } catch (e) {
        //console.log(e);
     // }
    //},
    //async handleDel() {
     // try {
      //  let res = await axios.post(
       //   "",//add back end url here
      //   qs.stringify({
       //     id: this.curId
      //    })
      //  );
       // this.curId = "";
     //   this.dialog2Visible = false;
     //   this.$message({
      //    message: res.data.Msg,
     //     type: "success"
     //   });
    //    this.getBookList();
    //  } catch (e) {
    //   console.log(e);
    //  }
  //  },
    
    editBook(row) {
      this.book = row;
      this.dialogVisible = true;
      this.addFlag = false;
    }

}
</script>

<style>

</style>

