<!--
 * @Descripttion: ""
 * @version: v1.0.0
 * @Author: 马川
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-29 15:18:17
 -->
<template>
  <div class="box">
        <Mordertop class="dasdaddwdff"></Mordertop>
        <Mnav></Mnav>
  </div>
</template>

<script>
import Mordertop from '../components/Mordertop';
import Mnav from '../components/Mnav';

export default {
  name: 'Login',
  data () {
    return {
      
    }
  },
  components:{
      Mordertop,Mnav,
  }
}
</script>

<style scoped lang="scss">
    .dasdaddwdff{
      width: 100%;
      position: fixed;
      top: 0;
    }

</style>
