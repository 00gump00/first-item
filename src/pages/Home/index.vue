<template>
  <div>
    <typeNve></typeNve>
    <listContainer></listContainer>
    <recommend></recommend>
    <rank></rank>
    <like></like>
    <floor v-for="(floor,index) in floorData" :key="floor.id" :list="floor"></floor>
    <brand></brand>
  </div>
</template>

<script>
import listContainer from './listContainer/index'
import recommend from './recommend/index'
import rank from './rank/index'
import like from './like/index'
import floor from './flood/index'
import brand from './brand/index'
import {mapState} from 'vuex'
export default {
  mounted(){
     this.$store.dispatch('getFloorList')
     //获取用户信息
    //  this.$store.dispatch('getUserInfo')
     
  },
  name:'home',
  components:{
    listContainer,
    recommend,
    rank,
    like,
    floor,
    brand
  },
  
  
  computed:{
    // mockData:(state)=>{
    //     return state.home.mockListData
    ...mapState({
      floorData:(state)=>{return state.home.mockFloorData}
    })
  }
  
  

}
</script>

<style>

</style>