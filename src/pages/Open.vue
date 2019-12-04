<!--
 * @Author: 安菲
 * @Date: 2019-11-26 10:12:21
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-28 19:34:59
 * @Description: 
 -->
<template>
    <div class="bigbox">
        <AopenHea></AopenHea>
        <AopenContent></AopenContent>
    </div>
</template>
<script>
import AopenHea from '../components/AopenHea';
import AopenContent from '../components/AopenContent';
export default {
    name:"HelloWorld",
    data (){
        return{
        }
    },
    components:{
        AopenHea,AopenContent
    },
}
</script>
<style scoped>
.bigbox{
    height: 100%;
}
</style>