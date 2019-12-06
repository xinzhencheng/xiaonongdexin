<!--
 * @Author: 郭涛
 * @Date: 2019-11-29 17:46:24
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-06 10:17:25
 * @Description: 
 -->
<template>
  <div class="box">
    <gxherder></gxherder>
    <gxlunbo :id="id"></gxlunbo>
    <gxxinxi :id="id"></gxxinxi>
    <gxyouxuan></gxyouxuan>
    <gxpingjia></gxpingjia>
    <gxxiangqing :id="id"></gxxiangqing>
    <gxbottom :id="id"></gxbottom>
  </div>
</template>
<script>
import gxherder from '../components/gxherder';
import gxlunbo from '../components/gxlunbo';
import gxxinxi from '../components/gxxinxi';
import gxyouxuan from '../components/gxyouxuan';
import gxpingjia from '../components/gxpingjia';
import gxxiangqing from '../components/gxxiangqing';
import gxbottom from '../components/gxbottom';


export default {
  name: 'Squerendingdan',
  props:['id'],
  data () {
    return {
      
    }
  },

  components:{
     gxherder,gxlunbo,gxxinxi,gxyouxuan,gxpingjia,gxxiangqing,gxbottom
  }
}
</script>

<style scoped>
  .box{
    background-color: #f9f9f9;
  }
</style>