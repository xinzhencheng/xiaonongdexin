<!--
 * @Author: 安菲
 * @Date: 2019-11-28 19:53:51
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-28 21:11:50
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="sea">
        <i class="el-icon-arrow-left" @click="back()"></i>
        <p>新增地址</p>
    </div>
</div>
</template>
<script>
export default {
    name:"AnewaddressHea",
    data (){
        return {
        }
    },
     methods:{
      back(){
          this.$router.go(-1);
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
            font-size: .19rem;
        }
    }
</style>