import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail/'
import addCart from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'

const routes= [
  {path:'*',redirect:'/home'},
  {path:'/home',component:Home ,meta:{show:true}},
  {path:'/search/:keyword?',component:Search,meta:{show:false},name:'search'},
  {path:'/login',component:Login,meta:{show:false}},
  {path:'/register',component:Register,meta:{show:false}},
  {path:'/detail/:key?',component:Detail,meta:{show:true}},
  {path:'/addCartSuccess',component:addCart,meta:{show:true},name:'addCartSuccess'},
  {path:'/ShopCart',component:ShopCart,meta:{show:true},name:'ShopCart'},
  {path:'/Trade',component:Trade,meta:{show:true},name:'Trade'},
  {path:'/Pay',component:Pay,meta:{show:true},name:'Pay'}
]
export default routes
