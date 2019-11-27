<!--
 * @Descripttion: ""
 * @version: v1.0.0
 * @Author: mac
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-26 11:46:22
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

.mac{
    width: 85%;
    margin: 0 auto;
    height: .42rem;
    display: flex;
    align-items: center;    
    /* background-color: blue */
}
.el-icon-close{
  font-size: 22px;
}
</style>
