
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './path.js'
//导入store
import store from '@/store/index'
//使用插件
Vue.use(VueRouter)

//配置路由


let router= new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },

})
router.beforeEach(async(to,from,next)=>{
 
  if(store.state.user.token){
    if(to.path=='/login'){
      next(false)
    }else{
      if(store.state.user.userinfo.length>0){
        next()
      }else{
        //派发用户信息请求
          try {
          await store.dispatch('getUserInfo')
          next()
          } catch (error) {
            //token失效
            store.dispatch('logoutaction')
            next('/login')
          }
      }
        
      

    }
    
    
  }else{
    next()
  }
})


export default router
  



