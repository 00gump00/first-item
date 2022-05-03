import {requestCAteList,requestMock,reqFloorList} from '@/api'
const state={
  listData:[],
  mockListData:[],
  mockFloorData:[]
}
const mutations={
  cgl(state,listData){
   state.listData=listData

  },
  getMockData(state,listData){
    state.mockListData=listData

  },
  getFloorData(state,floorData){
    state.mockFloorData=floorData

  }

}
const actions={
 async categorylist({commit}){
   let result= await requestCAteList()
    if(result.code===200){
      commit('cgl',result.data)
      // console.log(result.data);
    }
  },
 async getBannerList({commit}){
   let result= await requestMock()
   console.log(result);
   if(result.code==200){
     commit('getMockData',result.data)
     console.log(result.data);
   }


  },
  async getFloorList({commit}){
   let result= await reqFloorList()
   if(result.code==200){
     commit('getFloorData',result.data)
    //  console.log(result.data);
   }
  }

}
const getters={}
export default{
  state,
  mutations,
  actions,
  getters
}