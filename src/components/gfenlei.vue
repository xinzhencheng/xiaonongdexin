<!--
 * @Author: 郭涛
 * @Date: 2019-11-28 14:33:28
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-04 18:54:59
 * @Description: 
 -->
<template>
    <div id="box">
        <div class="boxx1">
            <router-link to="/shoppClassify" class="link1">
                <img src="../assets/img/fenlei1.png" alt="">
                <p>新鲜水果</p>
            </router-link>
        </div>
        <div class="boxx1">
            <router-link to="/shoppClassify" class="link1">
                <img src="../assets/img/fenlei2.png" alt="">
                <p>时令蔬菜</p>
            </router-link>
        </div>
        <div class="boxx1">
            <router-link to="/shoppClassify" class="link1">
                <img src="../assets/img/fenlei3.png" alt="">
                <p>鲜蛋肉禽</p>
            </router-link>
        </div>
        <div class="boxx1">
            <router-link to="/shoppClassify" class="link1">
                <img src="../assets/img/fenlei4.png" alt="">
                <p>粮油调味</p>
            </router-link>
        </div>
        <div class="boxx1">
            <router-link to="/shoppClassify" class="link1">
                <img src="../assets/img/fenlei5.png" alt="">
                <p>山珍海味</p>
            </router-link>
        </div>
        <div class="boxx1">
            <router-link to="/shoppClassify" class="link1">
                <img src="../assets/img/fenlei6.png" alt="">
                <p>会员专区</p>
            </router-link>
        </div>
        <div class="boxx1">
            <router-link to="/shoppClassify" class="link1">
                <img src="../assets/img/fenlei7.png" alt="">
                <p>预售专区</p>
            </router-link>
        </div>
        <div class="boxx1">
            <router-link to="/shoppClassify" class="link1">
                <img src="../assets/img/fenlei8.png" alt="">
                <p>礼品卡</p>
            </router-link>
        </div>
        <div class="boxx1">
            <router-link to="/shoppClassify" class="link1">
                <img src="../assets/img/fenlei9.png" alt="">
                <p>自营专区</p>
            </router-link>
        </div>
        <div class="boxx1">
            <router-link to="/shoppClassify" class="link1">
                <img src="../assets/img/fenlei10.png" alt="">
                <p>推荐有礼</p>
            </router-link>
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang=scss>
#box{
    width: 100%;
    height: 2.2rem;
    margin-top: .52rem;
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .boxx1{
        width: 20%;
        height: 1.1rem;
        text-align: center;
        .link1{
             img{
                width: 75%;
                border-radius: 50%;
                margin: .15rem 0 6px 0;
            }
            p{
                font-size: .14rem;
                color: #666666;
            }
        }   
    }
}

</style>