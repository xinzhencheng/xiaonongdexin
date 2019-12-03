<!--
 * @Author: 郭涛
 * @Date: 2019-12-03 10:46:19
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-03 11:17:10
 * @Description: 
 -->
<template>
    <div id="box">
        <p>我的功能</p>
        <div class="pp1">
            <img src="../assets/img/ic_my_bankcard.png" alt="">
            <span>银行卡</span>
        </div>
        <div class="pp1">
            <img src="../assets/img/ic_my_recommend.png" alt="">
            <span>推介有礼</span>
        </div>
        <div class="pp1">
            <img src="../assets/img/ic_address.png" alt="">
            <span>收货地址</span>
        </div>
        <div class="pp1">
            <img src="../assets/img/ic_message.png" alt="">
            <span>我的通知</span>
        </div>
        <div class="pp1">
            <img src="../assets/img/ic_kefu_green.png" alt="">
            <span>小农管家</span>
        </div>
        <div class="pp1">
            <img src="../assets/img/ic_help.png" alt="">
            <span>帮助中心</span>
        </div>
        <div class="pp1">
            <img src="../assets/img/ic_aboutus.png" alt="">
            <span>关于我们</span>
        </div>
    </div>   
</template>

<script>

</script>

<style scoped lang=scss>
   #box{
       width: 90%;
       height: 3.4rem;
       padding-right: 5%;
       padding-left: 5%;
       background-color: #fff;
       position: relative;
       bottom:.36rem;
       p{
           font-size: .16rem;
           color:#000;
           line-height: .5rem;
       }
       .pp1{
           width: 33.33%;
           height: .9rem;
           float: left;
           img{
               width: 30%;
               padding-left: 35%;
               padding-right: 35%;
               padding-top: .18rem;
           }
           span{
               width: 100%;
               display: inline-block;
               font-size: .16rem;
               text-align: center;
               line-height: .3rem;
               padding-bottom: .18rem;
           }
       }
   }
</style>