import Vue from 'vue'
import Router from 'vue-router'
import Cinema from './views/Cinema.vue'
import Movie from './views/Movie.vue'
import Mine from './views/Mine.vue'

import NowRelease from './components/NowRelease.vue'
import FutureRelease from './components/FutureRelease.vue'
import CityList from './components/CityList.vue'
import Search from './components/Search.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movie',
      name: 'movie',
      component: Movie,
      children:[
        {
          path:'/',
          component: NowRelease
        },
        {
          path:'futureRelease',
          component: FutureRelease
        },
        {
          path:'cityList',
          component: CityList
        },
        {
          path:'search',
          component: Search
        },
      ]
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: Cinema
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/',
      redirect: '/movie'
    }
  ]
})
