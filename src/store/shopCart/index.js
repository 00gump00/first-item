import { reqCartList, reqDeleteCar, reqFixIschecked } from "@/api"
const state = {
  cartListData: [],
}
const mutations = {
  cartList(state, data) {
    state.cartListData = data

  }
}
const actions = {
  async getCartList({ commit }) {
    let result = await reqCartList()
    console.log('getCartList');
    console.log(result);
    if (result.code == 200) {
      commit('cartList', result.data)
    }
  },
  async getNewCartList({ commit }, skuId) {
    let result = await reqDeleteCar(skuId)
    console.log('getNewCartList');
    console.log(result);
  },
  //修改复选框状态
  async getNewCartState({ commit }, { skuId, isChecked }) {
    console.log(skuId, isChecked);
    let result = await reqFixIschecked(skuId, isChecked)
    console.log('getNewCartState');
    console.log(result);
  },
  deleteCheckedCart({getters,dispatch}){
    let promises=[];
    getters.cartInfoList.cartInfoList.forEach(element => {
      // console.log(element);
    let promise = element.isChecked==1? dispatch('getNewCartList',element.skuId):''
    promises.push(promise)
    })
    return Promise.all(promises)

  },
  //
  changeAllState({getters,dispatch},target){
    let promises=[];
    getters.cartInfoList.cartInfoList.forEach(element => {
      // console.log(element);
      let isChecked=target.checked?'1':'0'
      let skuId=element.skuId
      console.log(skuId,isChecked);
    let promise = dispatch('getNewCartState',{skuId,isChecked},)
    promises.push(promise)
    })
    return Promise.all(promises)
  }

}
const getters = {
  cartInfoList(state) {
    return state.cartListData[0] || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}