<!--
 * @Author: 司娟
 * @Date: 2019-12-02 15:43:42
 * @LastEditors: 司娟
 * @LastEditTime: 2019-12-03 10:53:45
 * @Description: file content
 -->
<template>
  <div class="box">
      <div class="tubiao">
        <i class="el-icon-close"></i>
      </div>
      <div class="content">
        <img src="../assets/img/pic1.jpg" alt="">
        <div class="jieshao">
          <span class="biaoti">滩羊 礼盒（宁夏盐池）</span>
          <i>￥378.00</i>
          <p>
            <span>库存：199件</span>
            <em>销量：1件</em>
          </p>
        </div>
      </div>
      <div class="guige">
        <p>规格</p>
        <ul>
          <li>礼盒</li>
          <li>礼盒</li>
        </ul>
      </div>
      <div class="bottom">
        <span class="count">购买数量</span>
        <div class="right">
           <span class="btn" v-bind:class="{boxcls:isYellow}" v-on:click="reduceCount">-</span>
           <em>{{counter}}</em>
           <span class="btn" v-on:click="addCount">+</span>
        </div>        
      </div>
      <div class="true">
        <input type="button" value="确定">
      </div>      
  </div>
</template>
<script>
export default {
  name: 'Back',
  data () {
    return {
       counter:1,
       isYellow:true  
    }
  },
 
  methods:{
        reduceCount:function(){
             //this是vue对象
            if(this.counter<=1){
              this.isYellow=true;
                return;
            }
            this.counter--;
        },
        addCount:function(){
          this.isYellow=false;
            // this是vue对象
            // console.log(this);
            this.counter++;
        }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
.box{
    width:94%;
    padding:0 3%;
    .tubiao{
      height: .1rem;
      margin-top: .1rem;
      .el-icon-close{
          font-size: .14rem;
          color: 666666;
          float: right;
      }
    }
    .content{
      height: .85rem;
      // margin-top: .24rem;
      padding-bottom: .22rem;
      border-bottom: 1px solid #dddddd;
      img{
          width: .85rem;
          height: .85rem;
          border-radius: 7px;
          float: left;
          margin-right:.1rem;
        }
      .jieshao{
          float: left;
          height: .85rem;
          .biaoti{
            font-size: .16rem;
            color:#333333;
          }
          i{
            font-size: .16rem;
            display: block;
            margin-top: .08rem;
            margin-bottom: .16rem;
            color: #fc8600;
          }
          p{
            font-size: .14rem;
            color: #9f9f9f;
            span{
              margin-right: .34rem;
            }
          }
      }
    }
    .guige {
      width: 100%;
      padding-bottom:.11rem;
      border-bottom: 1px solid #dddddd;
      p{
        font-size: .15rem;
        color: #333333;
        margin: .16rem 0;
      }
      ul{
        li{
          height: .35rem;
          line-height: .35rem;
          background: #c3eed4;
          padding: 0 .31rem; 
          border-radius: .2rem;
          margin-bottom: .1rem;
          font-size: .13rem;
          color: #11bb55;
        }
      }
    }
    .bottom{
      margin-top: .27rem;
      height: .7rem;
      .count{
        font-size: .15rem;
        color: #333333;
      }
      .right{
        float: right;
        .btn{
        display: inline-block;
        height: .24rem;
        width: .24rem;
        line-height: .24rem;
        border-radius: 50%;
        border:1px solid #666666;
        font-size: .24rem;
        text-align: center;
        color: #666666;
      }
      .boxcls{
        border:1px solid #bcbcbc;
        color: #bcbcbc;
      }
      em{
        font-size: .16rem;
        margin: 0 .21rem;
      }
    }
  }
  .true{
      height: .48rem;
      input{
      display: block;
      height: .38rem;
      width: 100%;
      background: #1ed273;
      color: white;
      border-radius: .2rem;
      border: 0;
      outline: 0;
      font-size: .14rem;
      }  
    }             
}
</style>