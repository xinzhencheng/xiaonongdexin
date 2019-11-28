<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-28 10:49:17
 -->
<template>
  <div class="box">
      <Mwangji></Mwangji>
      <Mwangji1></Mwangji1>
  </div>
</template>

<script>

import Mwangji from '../components/Mwangji';
import Mwangji1 from '../components/Mwangji1';
export default {
  name: 'Zhuce',
  data () {
    return {
      
    }
  },
  components:{
      Mwangji,Mwangji1
  }
}
</script>

<style scoped lang="scss">

</style>
