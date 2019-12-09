<!--
 * @Author: 安菲
 * @Date: 2019-11-26 10:12:21
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-04 17:55:44
 * @Description:
 -->
<template>
    <div class="bigbox">
        <Acommodity></Acommodity>
        <gFooter></gFooter>
    </div>
</template>
<script>
import Acommodity from '../components/Acommodity';
import gFooter from '../components/gFooter';
export default {
    name:"HelloWorld",
    data (){
        return{
        }
    },
    components:{
        Acommodity,gFooter
    },
}
</script>
<style scoped>
.bigbox{
    height: 100%;
}
</style>
