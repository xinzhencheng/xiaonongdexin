<!--
 * @Author: 司娟
 * @Date: 2019-11-26 16:38:52
 * @LastEditors: 司娟
 * @LastEditTime: 2019-12-05 10:16:37
 * @Description: file content
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
    return {
      reload:this.reload
    };
  },
  data(){
    return {
      isRouterAlive:true
    };
  },
  methods:{
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function(){
        this.isRouterAlive=true;
      })
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
}
body{
  font-size: 14px;
  height: 100%;
  background: #f9f9f9;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
  color:#333;
  display: block;
}
em,i{
  font-style: normal;
}
</style>
