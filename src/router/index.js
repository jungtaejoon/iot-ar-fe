import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MainBase from '@/components/MainBase'
import MembersDatatable from '@/components/datatable/MembersDatatable'
import FacilitiesDatatable from '@/components/datatable/FacilitiesDatatable'
import DatatableContainer from '@/components/datatable/DatatableContainer'
import NotFound from '@/components/NotFound'

Vue.use(Router)

const datatableCommonMeta = {
  title: 'KEPCO 관리자 페이지',
  requiresAuth: true,
  listTitle: ''
}

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      alias: '/login',
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
          path: '',
          component: DatatableContainer,
          children: [
            {
              path: 'members',
              component: MembersDatatable,
              meta: {...datatableCommonMeta, listTitle: '사원'}
            },
            {
              path: 'facilities',
              component: FacilitiesDatatable,
              meta: {...datatableCommonMeta, listTitle: '설비'}
            }
          ]
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
