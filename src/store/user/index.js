import {reqGetCode,reqRegist,reqLogin,reqGetuserInfo,reqLogout,reqGetAdress} from '@/api'
const state={
  code:'',
  token:localStorage.getItem('token'),
  userinfo:[],
  address:[]

}
const mutations={
  verifyCode(state,data){
    state.code=data
  },
  USERINFO(state,data){
    state.userinfo=data
  },
  //清除数据
  CLEAR(state){
    state.token='',
    state.userinfo=undefined,
    localStorage.removeItem('token')
  },
  //用户地址
  SUERADDRESS(state,data){
    state.address=data
  }

  
}
const actions={
 async getVerifyCode({commit},phone){
    let result= await reqGetCode(phone)
    if(result.code==200){
      commit('verifyCode',result.data)
    }
    
   },
  async over({commit},user){

   let result=await reqRegist(user)
   console.log(result);
   },
   //首次登录,获取token
   async logFirst({commit},user){
     
   let result= await reqLogin(user)
  
   
  //  console.log(result);
  if(result.code==200){
    // console.log('获取token');
    localStorage.setItem('token',result.data.token)
    
  }else{
    Promise.reject(new Error('fail'))
  }
  


   },
   //获取用户信息
  async getUserInfo({commit}){
   let result=await reqGetuserInfo()
  //  console.log('getUserInfo');
   console.log(result);
  if(result.code==200){
    commit('USERINFO',result.data)
  }else{
    return Promise.reject(new Error('fail'))
  }

   },
   //退出登录
   async logoutaction({commit}){
   let result =await reqLogout()
   if(result.code==200){
     commit('CLEAR')
   }
  //  console.log(result);


   },
   //获取用户地址信息
   async useraddress({commit}){
   let result=await  reqGetAdress()
   if(result.code==200){
     commit('SUERADDRESS',result.data)
     console.log(result);

   }
   },
   //获取订单号
   getPayNum(){
     
   }

}
const getters={
  
}
export default{
  state,
  mutations,
  actions,
  getters
}