<!--
 * @Descripttion: ""
 * @version: v1.0.0
 * @Author: mac
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-30 17:59:08
 -->
<template>
    <div class="box"> 
        <div class="mac">
          <i class="el-icon-close" @click="back()"></i>
        </div>
    </div>  
</template>

<script>

export default {
  name: 'Mlogintop',
  data () {
    return {
      
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.box{
  background: white;
  width: 100%;
  height: .3rem;
}
.mac{
    width: 85%;
    margin: 0 auto;
    height: .3rem;
    display: flex;
    align-items: center;    
    /* background-color: blue */
}
.el-icon-close{
  font-size: 22px;
}
</style>
