<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all" @mouseover="searchShow" @mouseout="unshow">
        全部商品分类
      </h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="sort">
        <div class="sort" v-show="show" @mouseover="searchShow">
          <div class="all-sort-list2" @click="gosearch">
            <div
              class="item"
              :class="{ cur: currentIndex == index }"
              v-for="(c1, index) in catelist"
              :key="c1.categoryId"
            >
              <h3 
              @mouseover="change(index, $event)" @mouseout="getback">
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                  >{{ c1.categoryName }}</a
                >
              </h3>
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex == index ? 'block' : 'none' }"
                @mouseover="change(index, $event)"
                @mouseout="getback"
                data-self="1"
              >
                <div
                  class="subitem"
                  v-for="(c2, index) in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        >{{ c2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em
                        v-for="(c3, index) in c2.categoryChild"
                        :key="c3.categoryId"
                      >
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                          >{{ c3.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import _ from "lodash";
//按需引入
import throttle from "lodash/throttle";
console.log(_);
export default {
  data() {
    return {
      currentIndex: -1,
      show: true,
    };
  },
  name: "typeNve",
  mounted() {
    this.$store.dispatch("categorylist");
    if (this.$route.path ) {
        this.show = false;
      }
  },
  computed: {
    ...mapState({
      catelist: (state) => {
        return state.home.listData;
      },
    }),
  },
  methods: {
    // change(index,e){

    //   if(e.dataSet){
    //     throttle(function(val){
    //       this.currentIndex=val
    //     })
    //   }

    // },
    //禁止使用箭头函数 this可能会受到影响
    change: throttle(function (val, e) {
      this.currentIndex = val;
    }, 50),
    getback() {
      this.currentIndex = -1;
    },
    gosearch(e) {
      let query = {};
      let location = { name: "search" };
      let { categoryname, category1id, category2id, category3id } = e.target.dataset;
        
      // console.log(e.target.dataset);
      if (categoryname) {
        //  query={dataName:categoryname}
        query.categoryName = categoryname;
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else if (category3id) {
          query.category3Id = category3id;
        }
      }

      if(query.categoryName){
        
        if (this.$route.params) {
        location.params = this.$route.params;
        location.query = query;
        this.$router.push(location);
      }
      }
      
      // console.log(location);
      // console.log(this.$route.params);
      
    },
    searchShow() {
      // console.log(this.$route.path);

      this.show = true;
    },
    unshow() {

      if (this.$route.name == "search") {
        this.show = false;
        
      }
    },
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
    .sort-enter {
      height: 0;
    }
    .sort-enter-to {
      height: 45px;
    }
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>