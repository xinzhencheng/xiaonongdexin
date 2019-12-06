<!--
 * @Author: 郭涛
 * @Date: 2019-11-29 20:11:37
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-05 17:46:30
 * @Description: 
 -->
<template>
    <div id="box">
        <span class="span1">￥<span class="sss1">{{xinxi.jiaqian}}</span></span>
        <span class="span2">&nbsp;{{xinxi.tiaojian1}}&nbsp;</span>
        <span class="span3">已售{{xinxi.yishou}}件</span>
        <p class="p1">
            {{xinxi.biaoti}}
        </p>
        <p class="p2">
            {{xinxi.neirong}}
        </p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"Search",
    props:['id'],
    data () {
        return {
            xinxi:[

            ],
            // mag:{}
        }
    },
    methods:{    },
    created(){
        axios.get('http://localhost:3000/rementuijies/'+this.id)
        .then(res=>{
            this.xinxi = res.data;
            console.log(res.data)
        })
        .catch(err=>{
        console.log(err);
        })
    }
}
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
