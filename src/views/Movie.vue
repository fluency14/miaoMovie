<template>
  <div class="nav">
    <nav-release/>
    <router-view/>
  </div>
</template>

<script>
import NavRelease from'./../components/NavRelease'
  export default {
    name: 'movieRouter', 
    components: {
      NavRelease,
    },
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss">
  @import './../assets/css/base.scss';
  .nav{
    width: 100%;
    // height: rem(1000px);
    padding-top: rem(97px);
  }
</style>