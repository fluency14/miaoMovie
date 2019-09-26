<template>
  <div class="nav-footer">
    <router-link tag="div" to="/movie" class="nav-footer-items" >
        <i class="iconfont icon-dianying"></i>
        <p>电影</p>
    </router-link>
    <router-link tag="div" to="/cinema" class="nav-footer-items">
        <i class="iconfont icon-yingyuan"></i>
        <p>影院</p>
    </router-link>
    <router-link tag="div" to="/mine" class="nav-footer-items">
        <i class="iconfont icon-wode"></i>
        <p>我的</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'NavFooter', 
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss">
  @import './../assets/css/base.scss';
  .nav-footer{
    background: #ffffff;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: rem(50px);
    border-top: rem(0.5px) solid #d8d8d8;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .nav-footer-items{
      flex: 1;
      i{
        font-size: 22px;
      }
      p{
        font-size: 12px;
      }
    }
    .nav-footer-items.router-link-active{
      color: #e54847;
    }
  }
</style>