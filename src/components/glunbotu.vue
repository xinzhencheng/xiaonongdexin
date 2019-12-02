<!--
 * @Author: 郭涛
 * @Date: 2019-11-26 19:48:02
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-29 17:50:24
 * @Description: 
 -->
<template>
<div class="banner">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img,index) in imgs" :key="index"  >
                <img :src="img.img" >
            </div>
        </div> 
         <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div> -->
        <!-- <div class="swiper-button-next"></div> -->
        
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
    <div class="bannerbom">
        <span><img src="../assets/img/ic_tese.png" alt="">特色农产品</span>
        <span><img src="../assets/img/ic_chanpin.png" alt="">产品质量检测</span>
        <span><img src="../assets/img/ic_baoyou.png" alt="">售后无忧</span>
        <span><img src="../assets/img/ic_chandi.png" alt="">产地直发</span>
    </div>
</div>
    
</template>

<script>
import axios from 'axios';
import Swiper from 'swiper';

export default {
    name:"Search",
    data () {
    return {
      imgs:[

      ]
    }
  },
  created(){
      axios.get('http://localhost:3000/bannerimg')
      .then(res=>{
         this.imgs = res.data;
         this.$nextTick(function () {
               let mySwiper = new Swiper ('.swiper-container', {
                  // direction: 'vertical', // 垂直切换选项
                  loop: true, // 循环模式选项
                  autoplay:true,
                  // 如果需要分页器
                  pagination: {
                    el: '.swiper-pagination',
                  },
                  
                  // 如果需要前进后退按钮
                  // navigation: {
                  //   nextEl: '.swiper-button-next',
                  //   prevEl: '.swiper-button-prev',
                  // },
                  
                  // 如果需要滚动条
                  // scrollbar: {
                  //   el: '.swiper-scrollbar',
                  // },
              })        
         });
         console.log(res.data)
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>

<style scoped lang=scss>
@import url(https://unpkg.com/swiper/css/swiper.css);
    .banner{
        width: 94%;
        height: 1.92rem;
        margin: 0 auto;
        position: relative;
        margin-top: .5rem;
        .swiper-container{
            width:100%;
            height: 100%;
            /* border-radius: 10px; */
            img{
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }
        .bannerbom{
            display: flex;
            justify-content: space-around;
            height: .5rem;
            line-height: .5rem;
            span{
                color:#15bc58;
                font-size: 12px;
                img{
                    width: .16rem;
                    height: .16rem;
                    position: relative;
                    top: 4px;
                    right: 2px;
                }
            }
        }
   }
   
</style>