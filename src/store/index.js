import vue from 'vue'
import vuex from 'vuex'
import home from './home/index'
import search from './search/index'
import detail from './detail/index'
import shopCart from './shopCart/index'
import user from './user/index'
import pay from './pay/index'
//组件需要使用
vue.use(vuex)

//对外暴露store实例
export default new vuex.Store({
  modules:{
    home,
    search,
    detail,
    shopCart,
    user,
    pay
  }
})