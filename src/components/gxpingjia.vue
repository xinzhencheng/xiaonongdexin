<!--
 * @Author: 郭涛
 * @Date: 2019-11-30 16:00:04
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-02 11:37:38
 * @Description: 
 -->
<template>
    <div id="box">          
        <div class="pingjiatop" id="pingjia">
            <span class="span1">农货评价(9)</span>
            <span class="span2">查看评价<img src="../assets/img/xingqingyoujt.png" alt="" class="img1"></span>
        </div>
        <div class="pingjiabottom">
            <img src="../assets/img/touxiang.png" alt="">
            <div class="pingjia2">
                <p class="p1"> 天阳 </p>
                <img src="../assets/img/huangxx.png" alt="">
                <img src="../assets/img/huangxx.png" alt="">
                <img src="../assets/img/huangxx.png" alt="">
                <img src="../assets/img/huangxx.png" alt="">
                <img src="../assets/img/huangxx.png" alt="">
                <p class="p2"> 2019.07.11 13:00:28</p>
                <p class="p3">默认好评</p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang=scss>
    #box{
        background-color: #fff;
        width: 94%;
        padding-left: 3%;
        border-bottom: 0.1rem solid #f9f9f9;
        padding-right: 3%;
        .pingjiatop{
            font-size: .17rem;
            line-height: .5rem;
            height: .5rem;
            font-weight: 900;
            border-bottom: 1px solid #dadada;
            .span1{
                float: left;
            }
            .span2{
                float:right;
                color:#12bd57;
                .img1{
                    width: .24rem;
                    position: relative;
                    top:3px;
                }
            }
        }
        .pingjiabottom{
            height: 1.2rem;
            line-height: .36rem;
            margin-top: .15rem;
            img{
                width: .3rem;
                height: .3rem;
                float: left;
            }
            .pingjia2{
                margin-left: .45rem;
                .p1{
                    font-size: .17rem;
                    color: #2f2f2f;
                    font-weight: 900;
                }
                .p2{
                    font-size: .14rem;
                    color:#8c8c8c;
                }
                .p3{
                    font-size: .18rem;
                    color:#272727;
                }
                img{
                    width:.18rem;
                    height: .18rem;
                    float: right;
                    display: inline-block;
                    position: relative;
                    bottom: .28rem;
                }
            }
        }
    }
</style>
