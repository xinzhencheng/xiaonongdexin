<!--
 * @Author: 司娟
 * @Date: 2019-11-28 14:31:02
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-06 17:08:23
 * @Description: file content
 -->
<template>
  <div class="box">
    <Sback type="搜索商品"></Sback>
    <Stop v-on:changemsg="func"></Stop>
    <Sliebiaoq v-if="isif" :input="input"></Sliebiaoq>
  </div>
</template>
<script>
// import Vue from 'vue';
// Vue.component(Popup.name, Popup);
// import { Popup } from 'mint-ui';
import Sback from '../components/Sback';
import Stop from '../components/Stop';
import Sliebiaoq from '../components/Sliebiaoq';
import { Toast } from 'mint-ui';

export default {
  name: 'Ssousuo',
  // props:['id'],
  data () {
    return {
      // isshow:false,
      input:"",
      isif:false
    }
  },
  components:{
     Sback,Stop,Sliebiaoq
  },
  methods:{
    func(zhi){
      if(zhi==""){
        this.isif=false;
         Toast({
                message: '搜索的内容不能为空',
                position: 'bottom',
                duration: 3000
              });
      }else{
        this.isif=true;
        this.input=zhi;
        console.log(this.input);
      }
    }   
  },
 
}
</script>

<style scoped>



</style>