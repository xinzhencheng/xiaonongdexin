<!--
 * @Author: 郭涛
 * @Date: 2019-11-30 16:00:04
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-06 11:07:17
 * @Description: 
 -->
<template>
    <div id="box">
        <div>
            <img :src="mag.dianpuimg" alt="进店逛逛">
            <p id="xiangqing">————宝贝详情————</p>
            <div  v-for="(xximg,index) in xximgs" :key="index"  >
               <img :src="xximg.img" >
            </div>
        </div>
    </div>
</template>

<script>
// export default {
//   name: 'top',
//   data () {
//     return {
//        gxxiangqings:[],
//     }
//   },
   
//   created(){
//     fetch('http://localhost:3000/gxxiangqings')
//       .then(res=>{
//         return res.json();
//       })
//       .then(data=>{
//          this.gxxiangqings=data;
//          console.log(this.gxxiangqings)
//      })
//      .catch(err=>{
//        console.log(err);
//      })
//   }
// }
import axios from 'axios';
import Swiper from 'swiper';

export default {
    name:"Search",
    props:['id'],
    data () {
        return {
            xximgs:[

            ],
            mag:[]
        }
    },
    methods:{
     
    },
    created(){
        axios.get('http://localhost:3000/rementuijies/'+this.id)
        .then(res=>{
            this.mag = res.data;
            console.log(this.mag)
            this.xximgs = res.data.gxxiangqings;
            console.log(res.xximgs)
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
