<!--
 * @Author: 郭涛
 * @Date: 2019-12-02 15:49:27
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-02 19:12:28
 * @Description: 
 -->
<template>
    <div id="box">
        <div class="box">
            <span class="span1">我的订单</span>
            <img src="../assets/img/ic_more_gray.png" alt="" class="img1">
            <span class="span2">查看全部订单</span>
        </div>
        <div class="bootom">
            <div class="d1">
                <img src="../assets/img/daizhifu.png" alt=""><br/>
                <span>待支付</span>
            </div>
            <div class="d1">
                <img src="../assets/img/daifahuo.png" alt=""><br/>
                <span>待发货</span>
            </div>
            <div class="d1">
                <img src="../assets/img/daishouhuo.png" alt=""><br/>
                <span>待收货</span>
            </div>
            <div class="d1">
                <img src="../assets/img/yiwancheng.png" alt=""><br/>
                <span>已完成</span>
            </div>
            <div class="d1">
                <img src="../assets/img/shouhoufuwu.png" alt=""><br/>
                <span>售后服务</span>
            </div>
        </div>
    </div>   
</template>

<script>

</script>

<style scoped lang=scss>
    #box{
        width: 90%;
        height: 1.3rem;
        border-radius: 8px;
        background-color: #fff;
        position: relative;
        left: 5%;
        bottom:.75rem;
        .box{
            width: 94%;
            margin-left: 3%;
            margin-right: 3%;
            border-bottom: 1px solid #e9e9e9;
            span{
                line-height: .45rem;
                font-size: .16rem;
            }
            .span1{
                color:#333333;
            }
            .span2{
                float: right;
                margin-right: .03rem;
            }
            .img1{
                float: right;
                height: .16rem;
                position: relative;
                top:.15rem;
            }
        }
        .bootom{
            width: 94%;
            position: relative;
            top:.14rem;
            padding-right: 3%;
            padding-left: 3%;
            display: flex;
            .d1{
                width: 20%;
                img{
                    width: 50%;
                    margin-left: 25%;
                    margin-right: 25%;
                }
                span{
                    width: 100%;
                    display: inline-block;
                    text-align: center;
                    line-height: .25rem;
                }
            }
            
        }
    }
</style>