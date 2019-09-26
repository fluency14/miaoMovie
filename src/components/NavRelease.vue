<template>
  <div class="nav-release">
    <router-link tag="div" to="/movie/cityList" class="nav-release-city">
      上海
      <i class="iconfont icon-sanjiao1"></i>
    </router-link>
    <div class="nav-release-time">
      <router-link tag="div" to="/movie/" class="nav-release-now nav-release-times-items">正在热映</router-link>
      <router-link tag="div" to="/movie/futureRelease" class="nav-release-future nav-release-times-items">即将上映</router-link>
    </div>
    <router-link tag="div" to="/movie/search" class="nav-release-search"><i class="iconfont icon-fangdajing"></i></router-link>
  </div>
</template>

<script>
  export default {
    name: 'NavRelease', 
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss">
  @import './../assets/css/base.scss';
  .nav-release{
    position: fixed;
    top: rem(50px);
    width: 100%;
    height: rem(45px);
    border: rem(1px) solid #e6e6e6;
    display: flex;
    align-items: center;
    text-align: center;
    background: #ffffff;
    .nav-release-city{
      flex: 1;
    }
    .nav-release-time{
      flex: 4;
      display: flex;
      align-items: center;
      text-align: center;
      .nav-release-now,.nav-release-future{
        flex: 1;
        width: rem(88px);
        height: rem(41px);
        line-height: rem(44px);
        border-bottom: rem(2px) solid #ffffff;
      }
      .nav-release-now{
        margin-left: rem(25px);
        margin-right: rem(30px);
      }
      .nav-release-times-items.router-link-exact-active{
        border-bottom: rem(2px) solid #e54847;
      }
    }
    .nav-release-search{
      flex:1
    }
  }
</style>