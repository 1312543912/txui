import Vue from 'vue'
import Router from 'vue-router'
//导入组件
//单选按钮组件
import raido from '@/components/direction/radio/tx-radio-text'
//messagebox提示框组件
// import messagebox from '@/components/direction/messagebox/tx-messagebox-text'
//actionsheet组件
// import  actionsheet from '@/components/direction/ActionSheet/tx-actionsheet-text'
//amap组件
import  amap from '@/components/direction/amap/tx-map'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'amap',
      component: amap
    }
  ]
})
