import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Hello from '@/components/Hello'
import Ciao from '@/components/Ciao'
import Twitch from '@/components/Twitch'
import oauth from '@/components/oauth'
import Kompass from '@/components/Kompass'
import User from '@/components/User'
import Test from '@/components/Test'
import Company from '@/components/Company'
import { EventBus } from '../event-bus.js'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/ciao',
      name: 'Ciao',
      component: Ciao
    },
    {
      path: '/Twitch',
      name: 'twitch',
      component: Twitch
    },
    {
      path: '/oauth',
      name: 'oauth',
      component: oauth
    },
    {
      path: '/compass',
      name: 'compass',
      component: Kompass
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/company',
      name: 'company',
      component: Company
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})

export default router

router.afterEach((to, from) => {
  console.log('afterEach')

  if (to.path === '/login') {
    // TASK: modalen Login-Dialog anzeigen und bei erfolgreicher Anmeldung dann weiterleiten
    // register modal component
    EventBus.$emit('sending-login-event', 'show modal login dialog')
    /*
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
    */
  } else {
    // next()
  }
})
