<!--
 * @Author: 安菲
 * @Date: 2019-11-26 10:12:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-02 23:28:51
 * @Description: 
 -->
<template>
    <div class="bigbox">
        <AopenHea></AopenHea>
        <AopenContent2></AopenContent2>
    </div>
</template>
<script>
import AopenHea from '../components/AopenHea';
import AopenContent2 from '../components/AopenContent2';
export default {
    name:"HelloWorld",
    data (){
        return{
        }
    },
    components:{
        AopenHea,AopenContent2
    },
}
</script>
<style scoped>
.bigbox{
    height: 100%;
}
</style>