import {reqSearchList} from '@/api'
const state={
  searchdata:{},
}
const mutations={
  searchData(state,data){
    state.searchdata=data

  }
}
const actions={
  async getSearchData({commit},params={}){
   let result= await reqSearchList(params)
   if(result.code==200){
     commit('searchData',result.data)
    //  console.log(result.data.goodsList);
   }
  }
}
const getters={
  //如果没有网络，遍历undefined会报错，解决方法，||[]
  goodsList(state){
    return state.searchdata.goodsList||[]
  },
  attrsList(state){
    return state.searchdata.attrsList||[]
  },
  trademarkList(state){
    return state.searchdata.trademarkList||[]
  },
}
export default{
  state,
  mutations,
  actions,
  getters
}