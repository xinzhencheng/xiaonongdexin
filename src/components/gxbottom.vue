<!--
 * @Author: 郭涛
 * @Date: 2019-11-30 16:00:04
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-04 19:30:47
 * @Description: 
 -->
<template>
    <div id="box">
        <div class="left">
            <img src="../assets/img/ic_detail_kefu.png" alt="">
            <span>客服</span>
        </div>
        <div class="left">
            <img src="../assets/img/gxjshoucang.png" alt="">
            <span>收藏</span>
        </div>
        <div class="left">
            <router-link to='/Squerendingdan'>
                <img src="../assets/img/ic_detail_shopcart.png" alt="">
                <span>购物车</span>
            </router-link>
        </div>
        <input type="button" value="立即购买" class="right1">
        <input type="button" value="加入购物车" class="right2">
    </div>
</template>

<script>

</script>

<style scoped lang=scss>
   #box{
       width: 94%;
       height: .6rem;
       border-top: 1px solid #dadada;
       background-color: #fff;
       padding-left: 3%;
       padding-right: 3%;
       position: fixed;
       bottom: 0;
       left: 0;
       .left{
           float: left;
           width: .5rem;
           padding-top: .1rem;
           img{
               width: .25rem;
               padding-left: .125rem;
               color:#575757;
               padding-right: .125rem;
           }
           span{
               width:100%;
               display: inline-block;
               text-align: center;
               color:#575757;
               font-size: .15rem;
           }
       }
        input{
           float:right;
           width: .9rem;
           height: .4rem;
           margin-top: .1rem;
           font-size: .15rem;
           border: 0;
           outline:none;
           text-align: center;
       }
       .right1{
           border-radius:0 .2rem .2rem 0; 
           background-color: #ffba38;
           color:#ffffe3;
       }
       .right2{
           border-radius:.2rem 0 0 .2rem;
           background-color: #fff;
           color: #1caf54;
           border:2px solid #419f6d;
           border-right: 0;
       }
   }
</style>
