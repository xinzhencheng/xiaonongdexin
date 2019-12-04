<!--
 * @Author: 郭涛
 * @Date: 2019-11-30 16:00:04
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-03 12:07:09
 * @Description: 
 -->
<template>
    <div id="box">
        <div  v-for="(gxxiangqing,index) in gxxiangqings" :key="index">
            <img :src="gxxiangqing.img" alt="进店逛逛">
            <p id="xiangqing">————宝贝详情————</p>
            <img :src="gxxiangqing.xxxx1" alt="详细介绍">
            <img :src="gxxiangqing.xxxx2" alt="详细介绍">
            <img :src="gxxiangqing.xxxx3" alt="详细介绍">
            <img :src="gxxiangqing.xxxx4" alt="详细介绍">
            <img :src="gxxiangqing.xxxx5" alt="详细介绍">
            <img :src="gxxiangqing.xxxx6" alt="详细介绍">
            <img :src="gxxiangqing.xxxx7" alt="详细介绍">
            <img :src="gxxiangqing.xxxx8" alt="详细介绍">
            <img :src="gxxiangqing.xxxx9" alt="详细介绍">
            <img :src="gxxiangqing.xxxx10" alt="详细介绍">
            <img :src="gxxiangqing.xxxx11" alt="详细介绍">
            <img :src="gxxiangqing.xxxx12" alt="详细介绍">
            <img :src="gxxiangqing.xxxx13" alt="详细介绍">
            <img :src="gxxiangqing.xxxx14" alt="详细介绍">
            <img :src="gxxiangqing.xxxx15" alt="详细介绍">
        </div>
    </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
       gxxiangqings:[],
    }
  },
   
  created(){
    fetch('http://localhost:3000/gxxiangqings')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.gxxiangqings=data;
         console.log(this.gxxiangqings)
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>

<style scoped lang=scss>
   #box{
       width: 100%;
       margin-bottom: .6rem;
       img{
           width:100%;
           display: block;
       }
       p{
           width: 100%;
           height: .5rem;
           line-height: .5rem;
           font-size: .16rem;
           color: #636363;
           text-align: center;
       };
   }
</style>
