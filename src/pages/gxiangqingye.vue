<!--
 * @Author: 郭涛
 * @Date: 2019-11-29 17:46:24
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-07 10:13:50
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
    <gxbottom1 :id="id"></gxbottom1>
  </div>
</template>
<script>
import gxherder from '../components/gxherder';
import gxlunbo1 from '../components/gxlunbo1';
import gxxinxi1 from '../components/gxxinxi1';
import gxyouxuan from '../components/gxyouxuan';
import gxpingjia from '../components/gxpingjia';
import gxxiangqing1 from '../components/gxxiangqing1';
import gxbottom1 from '../components/gxbottom1';


export default {
  name: 'Squerendingdan',
  props:['id'],
  data () {
    return {
      
    }
  },
  methods:{
  },

  components:{
     gxherder,gxlunbo1,gxxinxi1,gxyouxuan,gxpingjia,gxxiangqing1,gxbottom1
  }
}
</script>

<style scoped>
  .box{
    background-color: #f9f9f9;
  }
</style>