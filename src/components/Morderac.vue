<!--
 * @Descripttion: ""
 * @version: v1.0.0
 * @Author: mac
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-29 14:59:38
 -->
<template>
    <div class="box"> 
        <div class="orderaca">     
            <Mordersection></Mordersection>
        </div>
    </div>  
</template>

<script>

import Mordersection from '../components/Mordersection';
export default {
  name: 'Morderac',
  data () {
    return {

    }
  },  
  components:{
      Mordersection
  },
  methods:{

      
  }
}
</script>

<style scoped lang="scss">
   .orderaca{
       width: 100%;
   }
</style>
