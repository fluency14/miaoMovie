<template>
  <div id="app">
    <nav-header/>
    <nav-footer/>
    <router-view/>
  </div>
</template>

<script>

import NavFooter from './components/NavFooter'
import NavHeader from './components/NavHeader'

  export default {
    name: 'app',
    components:{
      NavFooter,
      NavHeader,
    },
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss">
    @import './assets/css/base.scss';
</style>