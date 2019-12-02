<!--
 * @Author: 郭涛
 * @Date: 2019-11-26 19:39:02
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-29 17:46:51
 * @Description: 
 -->

<template>
  <div class="box">
    <gsousuokuang></gsousuokuang>
    <glunbotu></glunbotu>
    <gfenlei></gfenlei>
    <glinsui></glinsui>
    <ghuiyuanzunxiang></ghuiyuanzunxiang>
    <grementuijie></grementuijie>
    <gFooter></gFooter>
  </div>
</template>
<script>
import gsousuokuang from '../components/gsousuokuang';
import glunbotu from '../components/glunbotu';
import gfenlei from '../components/gfenlei';
import glinsui from '../components/glinsui';
import ghuiyuanzunxiang from '../components/ghuiyuanzunxiang';
import grementuijie from '../components/grementuijie';
import gFooter from '../components/gFooter';




export default {
  name: 'Squerendingdan',
  data () {
    return {
      
    }
  },
  components:{
     gsousuokuang,glunbotu,gfenlei,glinsui,ghuiyuanzunxiang,grementuijie,gFooter
  }
}
</script>

<style scoped>



</style>