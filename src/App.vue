<!--
 * @Author: 马川
 * @Date: 2019-11-23 12:08:12
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-28 11:08:17
 * @Description: 
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
       background: #f9f9f9 
    }
    /* #app { 
      margin-top: 5px;
    } */
    ul,li{
      list-style: none;
    }
    a{
      text-decoration: none;
      color:#333;
      display: block;
    }
   
</style>
