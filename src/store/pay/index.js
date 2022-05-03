import {reqPay} from '@/api'
const state={
  
}
const mutations={
  PAYINFO(state,data){
    state.payinfo=data

  }
}
const getters={}
const actions={
 async getpayinfo( {commit},data,tradeNo){
   let result = await reqPay(data,tradeNo)
   console.log('getpayinfo',result);
   if(result.data==200){
    commit('PAYINFO',result.data)
   }
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}