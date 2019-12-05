<!--
 * @Author: 司娟
 * @Date: 2019-11-28 14:31:02
 * @LastEditors: 司娟
 * @LastEditTime: 2019-12-05 10:49:34
 * @Description: file content
 -->
<template>
  <div class="box">
    <Sback type="搜索商品"></Sback>
    <Stop></Stop>
    <Sliebiao></Sliebiao>
  </div>
</template>
<script>
// import Vue from 'vue';
// Vue.component(Popup.name, Popup);
// import { Popup } from 'mint-ui';
import Sback from '../components/Sback';
import Stop from '../components/Stop';
import Sliebiao from '../components/Sliebiao';

export default {
  name: 'Ssousuo',
  // props:['id'],
  data () {
    return {
      isshow:false
    }
  },
  components:{
     Sback,Stop,Sliebiao
  },
  methods:{
   
  },
  mouted(){
    // if(this.id==undefined){
    //   this.isshow==false;
    // }else{
    //   this.isshow=true;
    // }
  }
}
</script>

<style scoped>



</style>