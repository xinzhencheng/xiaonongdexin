<!--
 * @Author: 安菲
 * @Date: 2019-11-26 10:16:18
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-26 11:32:32
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="sea">
        <p>购物车</p>
        <span>编辑</span>
    </div>
</div>
</template>
<script>
export default {
    name:"AshopHeader",
    data (){
        return {
           
        }
    }
  }

</script>

<style scoped>
.waibox{
    width: 100%;
    background: #ffffff;
    height: .45rem;
    z-index: 10;
    position: fixed;
    top: 0px;
}
.sea{
    line-height: .45rem;
}
p{
    width: 100%;
    text-align: center;
    font-size:.20rem;
}
span{
    position: fixed;
    right: 10px;
    top: 0px;
    color: #6a6a6a;
}
</style>
