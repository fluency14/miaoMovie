<template>
  <div class="nav-header">
    <span>{{$route.path==='/movie'?'电影':$route.path==='/cinema'?'影院':'我的'}}</span>
  </div>
</template>

<script>
  export default {
    name: 'NavHeader', 
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss">
  @import './../assets/css/base.scss';
  .nav-header{
    width:100%;
    height: rem(50px);
    background:#e54847;
    font-size:rem(20px);
    color:#ffffff;
    text-align :center;
    line-height:rem(50px);
    position: fixed;
    top:0;
  }
  
</style>