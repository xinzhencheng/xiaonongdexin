<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-27 21:55:57
 -->
<template>
  <div class="box">
      <Mloginlog></Mloginlog>
      <Mzhuce></Mzhuce>
      
  </div>
</template>

<script>
import Mloginlog from '../components/Mloginlog';
import Mzhuce from '../components/Mzhuce';

export default {
  name: 'Zhuce',
  data () {
    return {
      
    }
  },
  components:{
      Mloginlog,Mzhuce
  }
}
</script>

<style scoped lang="scss">

</style>
