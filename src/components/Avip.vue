<!--
 * @Author: 安菲
 * @Date: 2019-11-28 19:53:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-03 10:04:18
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="sea">
        <div class="sea_top">
            <i class="el-icon-arrow-left" @click="back()"></i>
            <p>会员中心</p>
        </div>
        <div class="sea_person">
            <div class="img">
                <img src="" alt="">
            </div>
            <div class="name">
                <p class="m">AieRHui</p>
                <p>您还不是平台会员</p>
            </div>
        </div>
    </div>
    <div class="Open"  v-if="!show">
        <div class="open_xinxi">
            <div class="box">
                <p class="zsp">钻石会员</p>
                <p @touchstart="hj">黄金会员</p>
            </div>
            <div class="zuanshi">
                <span><img src="../assets/imgs/ic_diamond_card.png" alt=""> 钻石权益</span>
                <ul>
                    <li>
                        <img src="../assets/imgs/ic_left_1.png" alt=""> 
                        <p>尊享全网商品</p>   
                    </li>
                    <li>
                        <img src="../assets/imgs/ic_left_2.png" alt=""> 
                        <p>独享钻石商品</p>   
                    </li>
                    <li>
                        <img src="../assets/imgs/ic_left_3.png" alt=""> 
                        <p>私人订制</p>   
                    </li>
                    <li>
                        <img src="../assets/imgs/ic_left_4.png" alt=""> 
                        <p>免费服务</p>   
                    </li>
                    <li>
                        <img src="../assets/imgs/ic_right_3.png" alt=""> 
                        <p>售后优先</p>   
                    </li>
                    <li>
                        <img src="../assets/imgs/ic_right_4.png" alt=""> 
                        <p>专属客服</p>   
                    </li>
                </ul>
                <div class="money">
                    <p>钻石会员</p>
                    <p>￥<b>1000.0</b>/年</p>
                </div>
            </div>
        </div>
        <div class="ok zsbtn">
            <p>我已同意<span>《小农的心用户协议》</span></p>
            <router-link to="/Open">
                <div class="bingo">
                    立即开通
                </div>
            </router-link>
        </div>
    </div>
    <div class="Open" v-if="show">
        <div class="open_xinxi">
            <div class="box">
                <p @touchstart="zs">钻石会员</p>
                <p class="hjp">黄金会员</p>
            </div>
            <div class="huangjin">
                <span><img src="../assets/imgs/ic_gold_card.png" alt=""> 黄金权益</span>
                <ul>
                    <li>
                        <img src="../assets/imgs/ic_left_1.png" alt=""> 
                        <p>尊享全网商品</p>   
                    </li>
                    <li>
                        <img src="../assets/imgs/ic_left_2.png" alt=""> 
                        <p>独享钻石商品</p>   
                    </li>
                    <li>
                        <img src="../assets/imgs/ic_left_3.png" alt=""> 
                        <p>私人订制</p>   
                    </li>
                    <li>
                        <img src="../assets/imgs/ic_left_4.png" alt=""> 
                        <p>免费服务</p>   
                    </li>
                </ul>
                <p class="pp">温馨提示：金卡会员不享有钻石商品权益</p>
                <div class="money">
                    <p>黄金会员</p>
                    <p>￥<b>299.0</b>/年</p>
                </div>
            </div>
        </div>
        <div class="ok hjbtn">
            <p>我已同意<span>《小农的心用户协议》</span></p>
            <router-link to="/Open2">
                <div class="bingo2">
                    立即开通
                </div>
            </router-link>
        </div>
    </div>
    <div class="jieshao">
        <img src="../assets/imgs/1.jpg">
    </div>
</div>
</template>
<script>


export default {
    name:"denglu1",
    data (){
        return {
           show:false
        }
    },
     methods:{
      back(){
          this.$router.go(-1);
      },
      changecolor(index){
        this.chang = index;
         this.$emit('changemsg',index);
        },
      zs:function(){
        this.show=!this.show;
      },
      hj:function(){
        this.show=!this.show;
      }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.waibox{
    width: 100%;
}
.sea{
    padding: 2px 16px 0 8px;
    background-color: rgb(248, 211, 107);
    width:100%;
    position:fixed;
    top:0;
    left:0;
    z-index: 10;
    .sea_top{
        display: flex;
        width: 100%;
        height: .4rem;
        align-items: center;
        i{
            font-size: .28rem;
            color: rgb(255, 255, 255);
            margin-right: 1.2rem;
        }   
        p{
            font-size: .2rem;
            color: white;
        }
    }
    .sea_person{
        width: 100%;
        height: 1rem;
        display: flex;
        align-items: center;
        color:rgb(83, 65, 53);
        .img{
            width:.6rem;
            height: .6rem;
            border-radius: 50%;
            margin:0 16px;
            border:1px solid white;
        }
        .m{
            font-size: 16px;
            line-height: .3rem;
        }
        p{
            font-size:12px;
            line-height: .2rem;
        }
    }
}
.Open{
    width: 94%;
    margin:1.6rem auto .2rem;
    .open_xinxi{
        width:100%;
        .box{
            width:100%;
            height: .43rem;
            display: flex;
            align-items: center;
            p{
                width:50%;
                height: .46rem;
                line-height: .45rem;
                text-align: center;
                font-size:.18rem;
                font-weight: bolder;
                z-index: 2;
                color:rgb(83, 65, 53);
            }
            .zsp{
                border:1px solid rgb(134, 104, 83);
                border-radius: 6px 6px 0 0;
                background-color: rgb(255, 255, 255);
                border-bottom: none;
                color:black;
            }
            .hjp{
                border:1px solid rgb(134, 104, 83);
                border-radius: 6px 6px 0 0;
                border-bottom: none;
                background-color: rgb(255, 255, 255);
                color:rgb(83, 65, 53);
            }
        }
        
    }
    .ok{
        width:100%;
        text-align: center;
        p{
            color:rgb(133, 133, 133);
            margin: 16px 0;
            span{
                color:rgb(47, 196, 10);
            }
        }
        .bingo{
            width:1.7rem;
            height: .5rem;
            line-height: .5rem;
            background-color: rgb(14, 4, 105);
            border-radius: 25px;
            margin:0 auto;
            color:rgb(250, 225, 156);
            font-size:18px;
        }
        .bingo2{
            width:1.7rem;
            height: .5rem;
            line-height: .5rem;
            background-color: rgb(255, 200, 82);
            border-radius: 25px;
            margin:0 auto;
            color:rgb(68, 56, 22);
            font-size:18px;
        }
    }
    
}
.zuanshi,.huangjin{
    height: 3rem;
    border-radius: 3px;
    border:1px solid rgb(134, 104, 83);
    background-color: #fff;
    .pp{
        color:red;
        font-size: 12px;
        line-height: .5rem;
        margin-top:30px;
        text-align: center;
    }
    span{
        margin-top:5px;
        line-height: .4rem;
        display: flex;
        align-items: center;
        color:rgb(114, 84, 65);
        img{
        width:.2rem;
        margin:0 5px;
        }
    }
    ul{
        li{
            display: inline-block;
            width: 24%;
            height: .75rem;
            text-align: center;
            padding-top:14px;
            p{
            color: rgb(73, 52, 40);
            font-size: 13px;
            }
            img{
                width:.3rem;
                margin-bottom: 10px;
            }
        }
    }
    .money{
        width: 90%;
        height: .42rem;
        background-color: rgb(255, 253, 232);
        border:1px solid rgb(230, 223, 139);
        border-radius: 10px;
        margin:0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 10px;
        p{
            font-size: 14px;
            display: inline-block;
        }
        p:last-child{
            font-size:18px;
        }
    }
}
.jieshao{
        width: 100%;
        background-color: #fff;
        img{
            width: 96%;
            margin-left:8px;
            margin-bottom: 10px;
        }
    }

</style>