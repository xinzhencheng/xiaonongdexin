<!--
 * @Author: 郭涛
 * @Date: 2019-12-03 09:15:07
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-03 10:27:10
 * @Description: 
 -->
<template>
    <div id="box">
        <img src="../assets/img/kaitonghuiyuan.png" alt="" class="img1">
        <div class="hhh1">
            <div class="ppp1 ppp2">
                <p class="p1">优惠券</p>
                <p class="p2"><span class="span1">0</span>个未使用</p>
            </div>
            <div class="ppp1 ppp3">
                <p class="p1">礼品卡</p>
                <p class="p2"><span>0</span>张</p>
            </div>
            <div class="ppp1 ppp4">
                <p class="p1">收藏</p>
                <p class="p2"><span>0</span>个</p>
            </div>
        </div>
    </div>   
</template>

<script>

</script>

<style scoped lang=scss>
   #box{
       width: 90%;
       padding-left: 5%;
       padding-right: 5%;
       .img1{
           width: 100%;
           position: relative;
           bottom:.6rem;
       }
       .hhh1{
           width: 100%;
           height: .7rem;
           position: relative;
           bottom: .5rem;
           display: flex;
           justify-content: space-between;
           .ppp1{
               width: 32%;
               height: 100%;
               background-color: #fff;
               background-size: 100% 100%;
               border-radius: 10px;
               .p1{
                   font-size: .16rem;
                   margin-top:.1rem;
                   margin-left: .1rem;
                   line-height: .24rem;
               }
               .p2{
                   line-height: .32rem;
                   font-size:.12rem;
                   color:#8d8d8d;
                   margin-left:.1rem; 
                   .span1{
                       color:#e04c30;
                    }
                    span{
                        font-size: .16rem;
                        font-weight: 900;
                        color:#282828;
                        margin-right: 3px;
                    }
                }
               
           }
           .ppp2{
               background-image: url(../assets/img/ic_my_coupon_back.png);
           }
           .ppp3{
               background-image: url(../assets/img/ic_my_gift_back.png);
           }
           .ppp4{
               background-image: url(../assets/img/ic_my_collect_back.png);
           }
       }
   }
</style>