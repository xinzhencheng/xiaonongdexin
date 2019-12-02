<!--
 * @Author: 郭涛
 * @Date: 2019-11-29 17:46:24
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-02 11:43:00
 * @Description: 
 -->
<template>
  <div class="box">
    <gxherder></gxherder>
    <gxlunbo></gxlunbo>
    <gxxinxi></gxxinxi>
    <gxyouxuan></gxyouxuan>
    <gxpingjia></gxpingjia>
    <gxxiangqing></gxxiangqing>
    <gxbottom></gxbottom>
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