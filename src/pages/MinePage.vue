<!--
 * @Author: 郭涛
 * @Date: 2019-11-29 17:46:24
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-03 10:46:01
 * @Description: 
 -->
<template>
  <div class="box">
    <gMwode1></gMwode1>
    <gMwode2></gMwode2>
    <gMwode3></gMwode3>
    <gMwode4></gMwode4>
    <gFooter></gFooter>
  </div>
</template>
<script>
import gMwode1 from '../components/gMwode1';
import gMwode2 from '../components/gMwode2';
import gMwode3 from '../components/gMwode3';
import gMwode4 from '../components/gMwode4';
import gFooter from '../components/gFooter';

export default {
  name: 'Squerendingdan',
  data () {
    return {
      
    }
  },
  components:{
     gFooter,gMwode1,gMwode2,gMwode3,gMwode4
  }
}
</script>

<style scoped>
  .box{
    background-color: #f9f9f9;
  }
</style>