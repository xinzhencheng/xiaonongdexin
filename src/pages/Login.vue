<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-26 11:20:53
 -->
<template>
  <div class="box">
      <Mlogintop></Mlogintop>
      <Mloginlog></Mloginlog>
      <Mloginmiddle></Mloginmiddle>
      
  </div>
</template>

<script>
import Mlogintop from '../components/Mlogintop';
import Mloginlog from '../components/Mloginlog';
import Mloginmiddle from '../components/Mloginmiddle';

export default {
  name: 'Login',
  data () {
    return {
      
    }
  },
  components:{
      Mlogintop,Mloginlog,Mloginmiddle
  }
}
</script>

<style scoped lang="scss">

</style>
