<!--
 * @Author: 安菲
 * @Date: 2019-11-28 19:53:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-04 14:42:26
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="sea">
        <i class="el-icon-arrow-left" @click="back()"></i>
        <p>在线支付</p>
    </div>
</div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
    name:"AopenHea",
    data (){
        return {
            cancelButtonText:false
        }
    },
     methods:{
        back(){
        MessageBox({
            title: '',
            message: '您还没有支付，是否放弃购买?',
            showCancelButton: true,
            confirmButtonText:'继续支付',
            cancelButtonText:'取消支付'
        })
        .then(action=>{
            if(action=='confirm'){
                console.log('继续购买')
            }else{
                console.log('回退')
                this.$router.go(-1);
            }
        })
            
        }
     }
}
</script>

<style lang="scss" scoped="" type="text/css">
.waibox{
    width: 100%;
}
.sea{
    padding: 2px 16px 0 10px;
    background-color: rgb(255, 255, 255);
    width:100%;
    position:fixed;
    top:0;
    left:0;
    z-index: 10;
    display: flex;
    height: .4rem;
    align-items: center;
     i{
            font-size: .26rem;
            margin-right: 1.2rem;
        }   
        p{
            font-size: .18rem;
        }
    }
</style>