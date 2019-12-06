<!--
 * @Author: 郭涛
 * @Date: 2019-11-29 17:46:24
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-06 10:49:39
 * @Description: 
 -->
<template>
  <div class="box">
    <gxherder></gxherder>
    <gxlunbo1 :id="id"></gxlunbo1>
    <gxxinxi1 :id="id"></gxxinxi1>
    <gxyouxuan></gxyouxuan>
    <gxpingjia></gxpingjia>
    <gxxiangqing1 :id="id"></gxxiangqing1>
    <gxbottom></gxbottom>
  </div>
</template>
<script>
import gxherder from '../components/gxherder';
import gxlunbo1 from '../components/gxlunbo1';
import gxxinxi1 from '../components/gxxinxi1';
import gxyouxuan from '../components/gxyouxuan';
import gxpingjia from '../components/gxpingjia';
import gxxiangqing1 from '../components/gxxiangqing1';
import gxbottom from '../components/gxbottom';


export default {
  name: 'Squerendingdan',
  props:['id'],
  data () {
    return {
      
    }
  },

  components:{
     gxherder,gxlunbo1,gxxinxi1,gxyouxuan,gxpingjia,gxxiangqing1,gxbottom
  }
}
</script>

<style scoped>
  .box{
    background-color: #f9f9f9;
  }
</style>