<!--
 * @Author: 安菲
 * @Date: 2019-11-26 10:12:21
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-28 19:54:56
 * @Description: 
 -->
<template>
    <div class="bigbox">
        <Avip></Avip>
    </div>
</template>
<script>
import Avip from '../components/Avip';
export default {
    name:"HelloWorld",
    data (){
        return{
        }
    },
    components:{
        Avip
    },
}
</script>
<style scoped>
.bigbox{
    height: 100%;
}
</style>