import { getgoodsInfo,addSkuNum } from '@/api'
import {getuuid} from '@/utils/uuid_token'
const state = {
  goodsData: {},
  //得到临时身份
  uuid:getuuid()

}
const mutations = {
  GETGOODSINFO(state, data) {
    state.goodsData = data
  }
}
const actions = {
  async getGoodsData({ commit }, skuId) {
    let result = await getgoodsInfo(skuId)
    if (result.code == 200) {
      commit('GETGOODSINFO', result.data)
      console.log('getGoodsData');
      console.log(result.data);
    }
  },
  async addToShopCart({commit},{skuId,skuNum}){
   let result=await addSkuNum(skuId,skuNum)
  //  console.log(result);
  if(result.code==200){
    return 'ok'
  }else{
    return Promise.reject(new Error('fail'))
  }
    
  
   
  }
  

}
const getters = {
  categoryView(state) {
    //{}防止警告
    return state.goodsData.categoryView || {}
  },
  skuInfo(state) {
    //{}防止警告
    return state.goodsData.skuInfo || {}
  },
  spuSaleAttrList(state) {
    //{}防止警告
    return state.goodsData.spuSaleAttrList || []
  },
 
}
export default {
  state,
  mutations,
  actions,
  getters
}