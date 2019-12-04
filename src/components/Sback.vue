<!--
 * @Author: 司娟
 * @Date: 2019-11-25 21:20:23
 * @LastEditors: 司娟
 * @LastEditTime: 2019-12-02 11:05:41
 * @Description: file content
 -->
<template>
  <div class="box">
    <div class="kong"></div>
    <div class="title">
      <i class="el-icon-arrow-left" @click="back()"></i>
      <span>{{type}}</span>
    </div>   
  </div>
</template>

<script>
export default {
  name: 'Back',
  props:['type'],
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  width: 100%;
  height: .68rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index:1;
}
.kong{
  height:.19rem;
  background: #fcfcfc;
}
.title{
  height: .49rem;
  line-height: .49rem;
  font-size: .2rem;
  color: #333333;
  background: #ffffff;
}
.el-icon-arrow-left{
  font-size: .2rem;
  color: #666666;
  margin-left: .3rem;
  margin-right: 1.04rem;
}
</style>
