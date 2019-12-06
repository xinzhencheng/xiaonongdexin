<!--
 * @Author: 郭涛
 * @Date: 2019-11-29 20:11:37
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-05 17:53:13
 * @Description: 
 -->
<template>
    <div id="box">
        <b>小农优选</b>
        <div class="youxuan">
            <div class="xhh">
                <img src="../../static/img/youxuan1.png" alt=""><br>
                <span>产自广西</span>
            </div>
            <div class="xhh">
                <img src="../../static/img/youxuan2.png" alt=""><br>
                <span>产地直发</span>
            </div>
            <div class="xhh">
                <img src="../../static/img/youxuan3.png" alt=""><br>
                <span>包邮服务</span>
            </div>
        </div>
        <div class="fuwu">
            <b>服务</b>
            <span>48小时之内发货</span>
            <span>服务费率11%</span>
        </div>
        <div class="yixuan">
            <b>已选</b>
            <span>3斤每箱《全国包邮》,送运营险</span>
            <img src="../assets/img/dian.png" alt="">
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang=scss>
    #box{
        width: 100%;
        background-color: #fff;
        margin-bottom: .1rem;
        b{
            font-size: .17rem;
            line-height: .5rem;
            display:inline-block;
            padding-left: 3%;
            padding-right: 3%; 
        }
        .youxuan{
            display:flex;
            border-bottom: 3px solid #f9f9f9;
            padding-left: 3%;
            padding-right: 3%; 
            .xhh{
                width: .7rem;
                padding: .1rem 0 .2rem 0;
                img{
                    width: .3rem;
                    padding-left: .2rem;
                }
                span{
                    display: inline-block;
                    width: 100%;
                    text-align: center;
                    line-height: .3rem;
                    font-size: .14rem;
                }
            }
        }
        .fuwu{
            line-height: .5rem;
            border-bottom: 3px solid #f9f9f9;
            span{
                font-size: .14rem;
                margin-right: .2rem;
            }
        }
        .yixuan{
            line-height: .5rem;
            border-bottom: .07rem solid #f9f9f9;
            span{
                font-size: .14rem;
                margin-right: .2rem;
            }
            img{
                float: right;
                height: .5rem;
            }
        }
    }
</style>
