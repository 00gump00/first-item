<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(Image,index) in skuImage" :key="Image.id">
        <img  :src="Image.imgUrl" @click="getActive(index)" :class="{active:currentIndex==index}">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  export default {
    methods:{
      //放大镜轮播图，排他改色
      getActive(index){
        this.currentIndex=index
        this.$bus.$emit('changeIndex',this.currentIndex)
      }
    },
    data(){
      return {
        currentIndex:-1
      }
    },
    props:['skuImage'],
    name: "ImageList",
    watch:{
      immediate: true,
      skuImage:{        
          handler() {
          this.$nextTick(() => {
            var mySwiper = new Swiper(this.$refs.cur, {
              // direction: 'vertical', // 垂直切换选项
              // loop: true, // 循环模式选项

              // 如果需要分页器
              // pagination: {
              //   el: ".swiper-pagination",
              // },

              // 如果需要前进后退按钮
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },

              // 如果需要滚动条
              // scrollbar: {
              //   el: ".swiper-scrollbar",
              // },
              slidesPerView:2
            });
          });
        },
      }
    },
    
  }
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

        
      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>