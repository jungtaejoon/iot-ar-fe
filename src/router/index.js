import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MainBase from '@/components/MainBase'
import Members from '@/components/content/Members'
import Facilities from '@/components/content/Facilities'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Login,
      meta: {
        bodyClass: 'gray-bg',
        title: 'KEPCO 관리자 페이지 로그인'
      }
    },
    {
      path: '/admin/',
      component: MainBase,
      children: [
        {
          path: 'members',
          component: Members,
          meta: {
            bodyClass: 'fixed-sidebar pace-done',
            title: 'KEPCO 관리자 페이지'
          }
        },
        {
          path: 'facilities',
          component: Facilities,
          meta: {
            bodyClass: 'fixed-sidebar pace-done',
            title: 'KEPCO 관리자 페이지'
          }
        }
      ]
    },
    {
      path: '*',
      component: NotFound,
      meta: {
        bodyClass: 'gray-bg',
        title: '페이지를 찾지 못했습니다.'
      }
    }
  ]
})
