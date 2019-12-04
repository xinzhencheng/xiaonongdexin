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
      height: 100%;
    }
    body{
      font-size: 14px;
      height: 100%;
    }
    #app { 
      margin-top: 5px;
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


</style>
