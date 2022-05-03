<template>
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>
        <li class="prev " :class="{'disabled':(endNo<=this.buttonNum)}">
          <a  @click="$emit('back',pageNo-1)">«上一页</a>
        </li>
        <li class="active">
          <a href="" v-show="endNo>buttonNum">1</a>
        </li>
        <li class="dotted"><span v-show="endNo>buttonNum+1">...</span></li>
        <li class="active">
          <a
          
            v-for="(pageNum, index) in endNo"
            :key="index"
            v-if="pageNum >= starNo"
            @click="$emit('back',pageNum)"
            >{{ pageNum }}</a
          >
        </li>

        <li class="dotted"><span v-show="endNo<this.totalPages-1">...</span></li>
        <li class="active" v-show="endNo<this.totalPages">
          <a >{{this.totalPages}}</a>
        </li>
        <li class="next" :class="{'disabled':(endNo>=this.totalPages)}">
          <a  @click="$emit('back',pageNo+1)">下一页»</a>
        </li>
      </ul>
      <div><span>共10页&nbsp;</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonNum: 5,
    };
  },
  props: ["pageNo", "pageSize", "total", "totalPages"],
  name: "PageNation",
  computed: {
    // 结束按钮页数
    endNo() {
      if (this.pageNo + parseInt(this.buttonNum / 2)>=this.totalPages) {
        return this.totalPages;
      }else if(this.pageNo + parseInt(this.buttonNum / 2)<=this.buttonNum){
        return this.buttonNum
      }

       
    },
    //开始按钮页码数
    starNo() {
      
      return this.pageNo - parseInt(this.buttonNum / 2);
    },
  },
  // updated() {
  //   console.log(this.totalPages, this.total);
  // },
  methods: {
    
  },
};
</script>

<style scoped lang="less">
.sui-pagination {
  margin: 18px 0;

  ul {
    margin-left: 0;
    margin-bottom: 0;
    vertical-align: middle;
    width: 600px;
    float: left;

    li {
      line-height: 18px;
      display: inline-block;

      a {
        position: relative;
        float: left;
        line-height: 18px;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #e0e9ee;
        margin-left: -1px;
        font-size: 14px;
        padding: 9px 18px;
        color: #333;
      }

      &.active {
        a {
          background-color: #fff;
          color: #e1251b;
          border-color: #fff;
          cursor: default;
        }
      }

      &.prev {
        a {
          background-color: #fafafa;
        }
      }

      &.disabled {
        a {
          color: #999;
          cursor: default;
        }
      }

      &.dotted {
        span {
          margin-left: -1px;
          position: relative;
          float: left;
          line-height: 18px;
          text-decoration: none;
          background-color: #fff;
          font-size: 14px;
          border: 0;
          padding: 9px 18px;
          color: #333;
        }
      }

      &.next {
        a {
          background-color: #fafafa;
        }
      }
    }
  }

  div {
    color: #333;
    font-size: 14px;
    float: right;
    width: 100px;
    line-height: 36px;
  }
}
</style>