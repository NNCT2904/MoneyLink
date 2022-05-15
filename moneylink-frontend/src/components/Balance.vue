<template>
  <aside class="main-aside right">
    <article class="main-aside-text">
      <span class="main-aside-text-title"> Your balance: </span>
      <span class="main-aside-text-owe"> $ 69.21 </span>
    </article>
  </aside>
</template>

<script>
  export default {
    name: 'Balance'
  }
</script>

<style >
  .main-aside {
    width: 15%;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
  }
  
    .main-aside-text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .main-aside-title {
        font-size: 20px;
        font-weight: 500;
        font-weight: 500;
      }

      .main-aside-owe {
        font-size: 24px;
        font-weight: 400;
        line-height: .8;
      }

</style>