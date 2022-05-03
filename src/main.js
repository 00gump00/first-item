import Vue from 'vue'

import App from './App.vue'
//导入路由
import router from '@/router/index.js'
//typeNve
import typeNve from '@/components/typeNve'
import Carousel from '@/components/Carousel'
import PageNation from '@/components/pageNation'
//导入store
import store from './store/index'
//引入mock/
import './mock/mockServe.js'
import 'nprogress/nprogress.css'
//引入moc/css
import 'swiper/css/swiper.css'
// 统一管理接口
import *as api from '@/api'
//引入element-ui
import {button,MessageBox} from 'element-ui'




Vue.component(typeNve.name,typeNve)

Vue.component(Carousel.name,Carousel)
Vue.component(PageNation.name,PageNation)
Vue.use(button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

  


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
    Vue.prototype.$api =api
  },
  //路由注册信息，当这里书写router时，组件上 开始有了route和router属性
 router,
 //组件实例身上会有$store属性
 store
}).$mount('#app')
