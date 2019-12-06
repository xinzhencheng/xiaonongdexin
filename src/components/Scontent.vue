<!--
 * @Author: 司娟
 * @Date: 2019-11-26 17:52:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-05 18:00:03
 * @Description: file content
 -->
<template>
  <div class="box">
        <div class="both dizhi">
            <p class="di1">
                <span>司娟</span>
                <em>18894007545</em>
            </p>
            <p class="di2">
                <i class="el-icon-location-outline"></i>
                <span>陕西西安雁塔区</span>
                <i class="el-icon-arrow-right"></i>
            </p>
            <img src="../assets/img/ic_address_under.png" alt="">    
        </div>
        <ul>
          <li class="both shop" v-for="(shi,index) in shiwu[0]" :key="index">
            <div class="title">
              <i class="el-icon-s-shop"></i>
              <span>{{shi.shop}}</span>
            </div>
            <div class="tu">
              <img :src="shi.img" alt="">
              <div class="miao">
                <p class="a1">{{shi.name}}</p>
                <p class="a2">规格：{{shi.weight}}</p>
                <p class="price">
                  <span>￥{{shi.price}}</span>
                  <em>x{{shi.count}}</em>
                </p>
              </div>
            </div>
            <div class="b1">
              <span>服务费</span>
              <img src="../assets/img/ic_order_help.png" alt="">
              <em>+￥8.58</em>
            </div>
            <div class="b1">
              <span>邮费差价</span>
              <em>￥0.0</em>
            </div>
            <div class="b1">
              <span>优惠券</span>
              <em>暂无可用优惠券</em>
            </div>
            <div class="b2">
              <span>买家留言：</span>
              <input type="text" placeholder="点击这里填写您对商家的留言">
            </div>
            <div class="b3">
              <span>小计：</span>
              <em>{{shi.price*shi.count}}</em>
            </div>
          </li>
        </ul>      
        <div class="both jian">
          <span>礼品卡抵值</span>
          <img src="../assets/img/an1.png" alt="">
          <div>
            <span>可用余额：</span>
            <em>￥0.00</em>
          </div>
        </div>   
  </div>
</template>

<script>
export default {
  name: 'Back',
  data () {
    return {
      shiwu:[],
      num:0,
      addprice:0
    }
  },
  created(){
    this.shiwu=this.$store.state.jie1;
    // let arr=this.shiwu[0];
    // console.log(this.shi.count)
    // for(let i=0;i<arr.length;i++){
    //   let str=0;
    //   console.log(arr.length)
    //   // console.log(str);
    // }
    
  },
  methods:{
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
.box{
  width: 100%;
  min-height:5.5rem;
  background: #f9f9f9;
  margin-top: .68rem;
  overflow: hidden;
  .both{
        margin-top: .1rem;
        margin-left: 2.5%;
        padding-left:2%;
        width: 93%;
        border-radius: .07rem;
        background: #ffffff;
        color: #333333;
  }
  .dizhi{ 
      height: .86rem;     
      .di1{
          margin-bottom: .07rem;
          span{
          display: inline-block;
          font-size: .16rem;
          margin-left: .35rem;
          margin-right: .13rem;
          margin-top: .16rem;
        }
        em{
          font-size: .14rem;
          color: #666666;
        }
      }
      .di2{
          margin-bottom: .09rem;
        .el-icon-location-outline{
          color: #333333;
          font-size: .2rem;
          margin-right: .08rem;
        }
        span{
            font-size: .13rem;
        }
        .el-icon-arrow-right{
            float: right;
            color: #9e9e9e;
            font-size: .14rem;
            margin-top: .06rem;
            margin-right: 2%;
        }
      }
      img{
          width: 100%;
          height: .07rem;
      }           
  }
  .shop{
    font-size:.16rem;
    .title{
      height: .38rem;
      line-height: .38rem;
      span{
        font-size: .14rem;
      }
      .el-icon-s-shop{
          font-size: .16rem;
          color: #999999;
          margin-right: .08rem;
      }
    }
    .tu{
      img{
        width: 26%;
        height: .9rem;
        border-radius:.05rem 0 0 .05rem;
      }
      .miao{
        float:right;
        width: 70%;
        padding:0 2%;
        height:.9rem;
        background: #f5f5f5;
        font-size: .14rem;
        .a2{
          font-size: .12rem;
          color: #666666;
        }
        .price{
          margin-top: .17rem;
          span{
            color: #fc8907;
          }
          em{
            float:right;
          }
        }
      }
    }
    .b1{
      height: .41rem;
      line-height: .41rem;
      width: 98%;
      border-bottom: 1px solid #dddddd;
      span{
        color: #666666;
      }
      img{
        width: .14rem;
        height: .14rem;
        margin-left: .05rem;
      }
      em{
        float: right;
      }
    }
    .b2{
      height: .41rem;
      line-height: .5rem;
       width: 98%;
      border-bottom: 1px solid #dddddd;
      span{
        color: #666666;
      }
      input{
        border:0;
        outline: 0;
        width: 75%;
        height: .2rem;
      }
      input::-webkit-input-placeholder {
        color: #bcbcbc;
        font-size: .16rem;
      }
    }
    .b3{
      height: .42rem;
      line-height: .42rem;
      text-align: right;
      margin-right: 2%;
      span{
        font-size: .14rem;
        color: #666666;
      }
      em{
        color: #fc8600;
      }
    }     
  }
  .jian{
    height: .52rem;
    line-height: .52rem;
    span{
      font-size: .16rem;
      color: #666666;
    }
    img{
        width: .48rem;
        height: .28rem;
        margin-right: 2%;
        margin-left: .08rem;
        float: right;
        margin-top: .1rem;
      }
    div{
      float: right;
      span{
        color: #999999;
        font-size: .14rem;
      }
      em{
        color: #fc8600
      }
    }
  }
}
</style>