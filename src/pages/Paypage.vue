<template>
  <div class="waibox">
      <div class="sea">
          <i class="el-icon-arrow-left" @click="back()"></i>
          <p>在线支付</p>
      </div>
      <div class="money">
          ￥<span>{{zong}}</span>
      </div>
      <div class="contents">
          <div class="content">
                  <img src="../assets/imgs/ic_wechat_pay.png" >
                  <span>微信支付</span>
                  <div class="oo">
                       <input type="radio" name="1" checked @click="wx()">
                  </div>
              <div>
              </div>
          </div>
          <div class="content one">
              <img src="../assets/imgs/ic_alipay.png" >
              <span>支付宝支付</span>
              <div class="o">
                  <input type="radio" name="1" @click="zfb()">
              </div>
          </div>
      </div>
      <p>银行卡支付</p>
      <router-link to="/xinzengyinhangka">
          <div class="moren">
              <img src="../assets/imgs/ic_add_card.png" >
              +&nbsp;添加新卡
              <div class="ooo">
                  <i class="el-icon-arrow-right" ></i>
              </div>
          </div>
      </router-link>
      <div class="pass" @click="ok()" v-if="isShow">微信支付￥{{zong}}</div>
      <div class="pass" @click="ok()" v-if="Show">支付宝支付￥{{zong}}</div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
      name:"AopenHea",
      data (){
          return {
              cancelButtonText:false,
              radio: '1',
              isShow:true,
              Show:false,
              zong:this.$store.state.jie1[1]
          }
      },
       methods:{
          back(){
          MessageBox({
              title: '',
              message: '您还没有支付，是否放弃购买?',
              showCancelButton: true,
              confirmButtonText:'继续支付',
              cancelButtonText:'取消支付'
          })
          .then(action=>{
              if(action=='confirm'){
                  console.log('继续购买')
              }else{
                  console.log('回退')
                  this.$router.go(-1);
              }
          })

          },
          wx(){
                  this.isShow=true;
                  this.Show=false
              },
              zfb(){
                  this.isShow=false;
                  this.Show=true
              },
              ok(){
                  this.$toast({
                      message: '支付成功！',
                      duration: 2000
                      })
              }
          }
       }

</script>

<style lang="scss" scoped="" type="text/css">
.waibox{
    width: 100%;
    .money{
        width: 100%;
        height: 1rem;
        display:flex;
        align-items: center;
        justify-content: center;
        margin-top:.5rem;
        span{
            font-size: .3rem;
        }
    }
    p{
        margin: 18px 14px 8px;
        font-size:12px;
    }
.contents{
        width: 90%;
        background-color: #fff;
        border-radius: 10px;
        margin: 0rem auto 10px;
        padding:0 10px;
        .content{
            line-height: .5rem;
            display:flex;
            align-items: center;
            img{
                width:.25rem;
                margin-right: 8px;
            }
            .oo{
                width:2.44rem;
                display: flex;
                justify-content: flex-end;
            }
            .o{
            width:2.3rem;
            display: flex;
            justify-content: flex-end;
        }
        }
        .one{
            border-top:.5px solid rgb(216, 216, 216);
        }
        input[type="radio"]{
            display: flex;
            justify-content: flex-end;
            width: .2rem;
            height: .2rem;
            appearance: none; // 改变元素外观
            border-radius: 50%;
            border: .35px solid rgb(175, 175, 175);
            outline: none;
        }
        input[type="radio"]:checked{ // 复选框选中的样式 使用带有对号的 背景图片打底
            background: url("../assets/imgs/eglass-check.png") repeat;
            background-size: 100%;
            border: none;
        }
    }
    .moren{
        width: 89%;
        height: .45rem;
        background-color: #fff;
        border-radius: 10px;
        margin: 0px auto 10px;
        padding:0 10px;
        display:flex;
        align-items: center;
        img{
            width:.25rem;
            margin-right: 8px;
        }
        .ooo{
            width:2.29rem;
            display: flex;
            justify-content: flex-end;
            i{
                font-size: .2rem;
                color: rgb(117, 117, 117);
            }
        }
    }
    .pass{
        width:90%;
        height: .45rem;
        margin: .3rem auto;
        background-color: rgb(255, 196, 0);
        text-align: center;
        line-height: .45rem;
        color: rgb(255, 255, 255);
        border-radius: 25px;
        font-size:16px;
    }
}
.sea{
    padding: 2px 16px 0 10px;
    background-color: rgb(255, 255, 255);
    width:100%;
    position:fixed;
    top:0;
    left:0;
    z-index: 10;
    display: flex;
    height: .4rem;
    align-items: center;
     i{
            font-size: .26rem;
            margin-right: 1.2rem;
        }
        p{
            font-size: .18rem;
        }
    }
</style>
