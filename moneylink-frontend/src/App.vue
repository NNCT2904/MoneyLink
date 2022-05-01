<template>
  <div>
    <Header />
  <div id="Aside">
    <Aside />
    <router-view id="mainBody"/>
  </div>
  </div>
</template>

<style>
#Aside{
  display: flex;
}
#mainBody{
  flex: 1;
}
</style>

<script>
import Header from "@/components/Header";
import Aside from "@/components/Aside";
export default {
  name: "app",
  components: {
    Header,
    Aside
  }
}
</script>
