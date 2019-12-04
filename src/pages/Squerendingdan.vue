<!--
 * @Author: 司娟
 * @Date: 2019-11-25 21:24:46
 * @LastEditors: 司娟
 * @LastEditTime: 2019-11-30 15:30:11
 * @Description: file content
 -->
<template>
  <div class="box">
    <Sback type="确认订单"></Sback>
    <Scontent></Scontent>
    <Sqbottom></Sqbottom>
  </div>
</template>
<script>
import Sback from '../components/Sback';
import Scontent from '../components/Scontent';
import Sqbottom from '../components/Sqbottom';





export default {
  name: 'Squerendingdan',
  data () {
    return {
      
    }
  },
  components:{
     Sback,Sqbottom,Scontent
  }
}
</script>

<style scoped>



</style>