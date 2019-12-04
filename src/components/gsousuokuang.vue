<!--
 * @Author: 郭涛
 * @Date: 2019-11-26 14:51:03
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-04 18:12:09
 * @Description: 
 -->
<template>
  <div id="box">
        <img src="../assets/img/gitubiao.png" alt="" class="gitubiao">
        <router-link to="/Ssousuo">
            <input type="text" class="input1" placeholder="搜索">
            <img src="../assets/img/ic_search.png" alt="" class="sousuo">
        </router-link>
  </div>
</template>
<script>
export default {
  name: 'Ddtop',
  data () {
    return {
     
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
    #box{
        width: 94%;
        height: .5rem;
        padding:0 3%;
        background-color: #fff;
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        .gitubiao{
            width: 35%;
            height: .5rem;
            float: left;
        }
        .input1{
            width: 65%;
            height: .3rem;
            float: right;
            margin-top: .1rem;
            border-radius: .15rem;
            border: 0;
            outline: none;
            background-color: #e0e0e0;
            text-indent: .35rem;
            font-size: 15px;
            line-height: .36rem;
            color: #999999;
        }
        .sousuo{
            width: .16rem;
            position: relative;
            left: 3%;
            bottom: .22rem;
        }
    }
</style>