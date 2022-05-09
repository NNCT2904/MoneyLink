<template>
  <div>
    {{ this.msg }}
  </div>
</template>

<script>
import axios from "axios";
import qs from 'qs'
export default {
  name: "Test",
  data() {
    return {
      msg: "",
      user:'111'
    };
  },
  created() {
    const params = {
  name: '333'
}
axios
  .post('http://localhost:3001/test',{name:333})

  .then(function (response) {
    alert(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>