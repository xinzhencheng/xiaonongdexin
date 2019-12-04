<!--
 * @Author: 安菲
 * @Date: 2019-11-26 10:12:21
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-28 19:34:59
 * @Description: 
 -->
<template>
    <div class="bigbox">
        <Acommodity></Acommodity>
    </div>
</template>
<script>
import Acommodity from '../components/Acommodity';
export default {
    name:"HelloWorld",
    data (){
        return{
        }
    },
    components:{
        Acommodity
    },
}
</script>
<style scoped>
.bigbox{
    height: 100%;
}
</style>