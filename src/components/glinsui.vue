<!--
 * @Author: 郭涛
 * @Date: 2019-11-28 14:33:28
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-04 10:36:20
 * @Description: 
 -->
<template>
    <div id="box">
        <div class="boxx2">
            <img src="../assets/img/fuli.png" alt="">
        </div> 
        <div class="boxx2">
            <img src="../assets/img/gongying.png" alt="">
        </div> 
        <div class="boxx3">
            <img src="../assets/img/gonggaotu.png" alt="">
            |
            <span class="lili">
                推荐好友即可享受1.1元购平台活动商品
            </span>
            
             <span class="span2">
                | 更多
             </span>
        </div>
        <div class="boxx4">
            <img src="../assets/img/yinhang.png" alt="">
        </div>
        <div class="boxx5">
            <img src="../assets/img/dite.png" alt="">
            <img src="../assets/img/lihe.png" alt="">
            <img src="../assets/img/haodian.png" alt="">
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang=scss>
#box{
    width: 100%;
    background-color: #f9f9f9;
    .boxx2{
        width:44%;
        float: left;
        padding-top: .05rem;
        padding-bottom: .06rem;
        margin-left: 4%;
        img{
            width: 100%;
            border-radius: 6px;
        }
    }
    .boxx3{
        width: 94%;
        padding-left: 3%;
        .lili{
            font-size: 14px;
            display: inline-block;
            width: 70%;
        }
        .span2{
            float: right;
        }
        img{
            width: 16%;
            height: .16rem;
        }
    }
    .boxx4{
        width: 94%;
        padding-top: .17rem;
        padding-left: 3%;
        img{
            width: 100%;
        }
    }
    .boxx5{
        width: 94%;
        padding-left: 3%;
        padding-bottom: .2rem;
        display: flex;
        justify-content: space-between;
        padding-top: .15rem;
        img{
            width: 30%;
        }
    }
}

</style>