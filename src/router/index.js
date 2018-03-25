import Vue from 'vue'
import Router from 'vue-router'
import Botao from '@/components/Botao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Botao',
      component: Botao
    }
  ]
})
