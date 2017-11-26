import Vue from 'vue'
import Router from 'vue-router'
//导入组件
//单选按钮组件
import radio from '@/components/direction/radio/tx-radio-text'
//messagebox提示框组件
import messagebox from '@/components/direction/messagebox/tx-messagebox-text'
import pop from '@/components/direction/pop/tx-pop-text'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'radio',
      component: pop
    }
  ]
})
