<!--
 * @Author: 安菲
 * @Date: 2019-11-26 10:12:21
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-26 11:30:58
 * @Description: 
 -->
<template>
    <div class="bigbox">
        <AshopHeader></AshopHeader>
        <Acommodity></Acommodity>
    </div>
</template>
<script>
import AshopHeader from '../components/AshopHeader';
import Acommodity from '../components/Acommodity';
export default {
    name:"HelloWorld",
    data (){
        return{

        }
    },
    components:{
       AshopHeader,Acommodity
    }
}
</script>
<style scoped>
.bigbox{
    height: 100%;
}
</style>