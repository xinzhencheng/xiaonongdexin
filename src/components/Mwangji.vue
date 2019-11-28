<!--
 * @Descripttion: ""
 * @version: v1.0.0
 * @Author: mac
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-28 10:50:08
 -->
<template>
    <div class="box"> 
        <div class="mac">
          <i class="el-icon-arrow-left" @click="back()"></i>
          <div class="wangji">忘记密码</div>
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
    width: 100%;
    height: .5rem;
    margin: 0 auto;
    background: white;
    display: flex;
    align-items: center;
    margin-bottom: .4rem    
    /* background-color: blue */
}
.wangji{
    width: 100%;
    height: .4rem;
    text-align: center;
    line-height: .4rem;
    margin-right: .15rem;
    font-size: 18px
}
.el-icon-arrow-left{
  margin-left: .1rem; 
  font-size: 30px;
}
</style>
