<!--
 * @Author: 安菲
 * @Date: 2019-11-28 19:53:51
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-28 21:11:50
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
    <div class="Open">
        <div class="open_xinxi">
            <div class="box">
                <p>钻石会员</p>
                <p>黄金会员</p>
            </div>
            <div class="zuanshi">
                <p>钻石权益</p>
                <ul>
                    <li>wdafv</li>
                    <li>wdafv</li>
                    <li>wdafv</li>
                    <li>wdafv</li>
                    <li>wdafv</li>
                    <li>wdafv</li>
                    <li>wdafv</li>
                </ul>
            </div>
            <div class="huangjin"></div>
        </div>
        <div class="ok">

        </div>
        <div class="jieshao">
            <img src="" alt="">
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"denglu1",
    data (){
        return {
           
        }
    },
     methods:{
      back(){
          this.$router.go(-1);
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
    height:7rem;
    background-color: rgb(230, 182, 182);
    margin:1.6rem auto .2rem;
    .open_xinxi{
        width:100%;
        // background-color: rgb(108, 206, 183);
        ul{
            
            li{
                display: inline-block;
                width: 24%;
                height: .75rem;
                line-height: .75rem;
                background: rgb(243, 151, 151);
                text-align: center;
            }
        }
        .box{
            width:100%;
            height: .43rem;
            background-color: rgb(209, 163, 223);
            display: flex;
            align-items: center;
            p{
                width:50%;
                height: .45rem;
                line-height: .45rem;
                text-align: center;
                font-size:.18rem;
                font-weight: bolder;
                border:1px solid rgb(95, 80, 70);
                border-radius: 6px 6px 0 0;
                border-bottom: none;
                background-color: rgb(108, 206, 183);
                z-index: 2;
            }
            p:last-child{
                color:rgb(83, 65, 53);
            }
        }
        .zuanshi{
            height: 2.5rem;
            border:1px solid rgb(83, 65, 53);
            p{
                line-height: .4rem;
            }
        }
    }
    .ok{
        width:100%;
        height: 1.5rem;
        background-color: rgb(119, 108, 206);
    }
}
</style>