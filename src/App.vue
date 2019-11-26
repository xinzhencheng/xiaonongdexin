<!--
 * @Author: 安菲
 * @Date: 2019-11-25 20:05:01
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-26 21:53:29
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
      background: #f5f5f5;
      height: 100%;
    }
    ul,li{
      list-style: none;
    }
    a{
      text-decoration: none;
      color:#333;
      display: block;
    }
</style>
