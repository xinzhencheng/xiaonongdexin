<!--
 * @Author: 司娟
 * @Date: 2019-12-02 15:43:42
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-06 15:54:32
 * @Description: file content
 -->
<template>
  <div class="box" @touchmove="handleTouchmove">
    <div class="bdiv" v-show="ismit">{{id}}</div>
      <div class="tubiao">
        <i @click="shan" class="el-icon-close"></i>
      </div>
        <div class="content">
          <img :src="this.goods.img" alt="">
          <div class="jieshao">
            <span class="biaoti">{{this.goods.biaoti}}</span>
            <i>￥{{this.goods.jiaqian}}</i>
            <p>
              <span>库存：{{this.goods.kucun}}件</span>
              <em>销量：{{this.goods.xiaoliang}}件</em>
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
          <input type="button" value="确定" @click="tijiano()">
        </div>   
  </div>
</template>
<script>
import axios from 'axios';
import { Toast } from 'mint-ui';

export default {
  name: 'Stanchuang',
  // inject:["reload"],
  props:['id'],
  data () {
    return { 
       goods:{},
       counter:1,
       isYellow:true  
    }
  },
  computed:{
    ismit(){
       console.log("子组件"+this.id);
     axios.get('http://localhost:3000/rementuijies/'+this.id)
     .then(res=>{ 
         this.goods = res.data;
         console.log(this.goods+"------------");
     })
     .catch(err=>{
         console.log(err);
     });
    }
  },
  created(){
     //从后端获取数据     
    
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
            this.counter++;
        },
        shan(){
          // this.reload();
          this.$emit('change',false);//$emit 能够触发事件  
        },
         handleTouchmove (e) {
            e.preventDefault()
        },
         tijiano(){
             axios({
                    method:"post",
                    url:"http://localhost:3000/foods",
                    data:{
                        id:this.id,
                        shop: "小农的心自营店",
                        img:this.goods.img,
                        name:this.goods.biaoti,
                        price:this.goods.jiaqian,
                        count:this.counter,
                        weight:this.goods.xiaoliang

                    }
                })
                .then((res)=>{
                    console.log(res.data)
                    console.log("添加成功")
                     Toast("添加成功")
                    
                })
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
.box{
    width:94%;
    // height: 2rem;
    padding:0 3%;
    // max-height:4.8rem;
    min-height: 3.7rem;
    background: #ffffff;
     border-radius: .1rem .1rem 0 0;
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
        margin: .15rem 0;
      }
      ul{
        li{
          height: .35rem;
          display: inline-block;
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
      height: .6rem;
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