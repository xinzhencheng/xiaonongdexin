<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-29 20:27:15
 -->
<template>
  <div class="box">
      <MxtszTOP></MxtszTOP>
      <Mgerenxinxi></Mgerenxinxi>
      
  </div>
</template>

<script>
import MxtszTOP from '../components/MxtszTOP';
import Mgerenxinxi from '../components/Mgerenxinxi';

export default {
  name: 'Zhuce',
  data () {
    return {
      
    }
  },
  components:{
      MxtszTOP,Mgerenxinxi
  }
}
</script>

<style scoped lang="scss">

</style>
