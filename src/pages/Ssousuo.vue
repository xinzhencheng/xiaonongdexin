<!--
 * @Author: 司娟
 * @Date: 2019-11-28 14:31:02
<<<<<<< HEAD
 * @LastEditors: 司娟
 * @LastEditTime: 2019-12-05 10:49:34
=======
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-06 15:39:15
>>>>>>> c740e988a63222a755162fa04fd3d910ff97c476
 * @Description: file content
 -->
<template>
  <div class="box">
    <Sback type="搜索商品"></Sback>
<<<<<<< HEAD
    <Stop></Stop>
    <Sliebiao></Sliebiao>
=======
    <Stop v-on:changemsg="func"></Stop>
    <Sliebiaoq v-if="isif" :input="input"></Sliebiaoq>
>>>>>>> c740e988a63222a755162fa04fd3d910ff97c476
  </div>
</template>
<script>
// import Vue from 'vue';
// Vue.component(Popup.name, Popup);
// import { Popup } from 'mint-ui';
import Sback from '../components/Sback';
import Stop from '../components/Stop';
<<<<<<< HEAD
import Sliebiao from '../components/Sliebiao';
=======
import Sliebiaoq from '../components/Sliebiaoq';
import { Toast } from 'mint-ui';
>>>>>>> c740e988a63222a755162fa04fd3d910ff97c476

export default {
  name: 'Ssousuo',
  // props:['id'],
  data () {
    return {
<<<<<<< HEAD
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
=======
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
 
>>>>>>> c740e988a63222a755162fa04fd3d910ff97c476
}
</script>

<style scoped>



</style>