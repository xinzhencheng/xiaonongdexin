<!--
 * @Author: 郭涛
 * @Date: 2019-11-29 20:11:37
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-29 20:48:54
 * @Description: 
 -->
<template>
    <div id="box">
        <span class="span1">￥<span class="sss1">25.00</span></span>
        <span class="span2">&nbsp;小农推荐&nbsp;</span>
        <span class="span3">已售76件</span>
        <p class="p1">
            香水柠檬（广西武鸣）
        </p>
        <p class="p2">
            【1.5KG全国包邮】，香水柠檬，柠檬中的劳斯莱斯，无籽，果香浓郁，酸爽无比。
        </p>
    </div>
</template>

<script>

</script>

<style scoped lang=scss>
    #box{
        width: 94%;
        padding-top: .15rem;
        padding-bottom: .13rem;
        background-color: #fff;
        margin-bottom: .1rem;
        padding-left: 3%;
        padding-right: 3%;
        .span1{
            color: #ff8a00;
            line-height: .3rem;
            font-size: .16rem;
            .sss1{
                font-size: .26rem;
                font-weight: 900;
            }
        }
        .span2{
            color: #826b41;
            background-color: #ffefcd;
            border: 1px solid #f9f4e1;
            margin-left: .1rem;
            position: relative;
            bottom: .05rem;
        }
        .span3{
            float: right;
            line-height: .3rem;
            color:#646464;
        }
        .p1{
            line-height: .35rem;
            font-size: .18rem;
            font-weight: 900;
            color: #2f2f2f;
        }
        .p2{
            font-size: .14rem;
            color:#9d9d9d;
            text-indent: .1rem;
            
        }
    }
</style>
