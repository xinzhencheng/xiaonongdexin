<!--
 * @Author: 郭涛
 * @Date: 2019-11-26 19:48:02
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-02 11:48:24
 * @Description: 
 -->
<template>
<div class="banner">
    <div class="swiper-container" id="shangping">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img,index) in imgs" :key="index"  >
                <img :src="img.img" >
            </div>
        </div>         
    </div>
    <i class="el-icon-arrow-left" @click="back()"></i>
    <i class="el-icon-share"></i>
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
    methods:{
      back(){
          this.$router.go(-1);
      }
    },
    created(){
        axios.get('http://localhost:3000/xbannerimg')
        .then(res=>{
            this.imgs = res.data;
            this.$nextTick(function () {
                let mySwiper = new Swiper ('.swiper-container', {})        
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
        width: 100%;
        height: 3.1rem;
        margin: 0 auto;
        position: relative;
        .swiper-container{
            width:100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .el-icon-share{
            position: absolute;
            top: .22rem;
            right: .14rem;
            font-size: .2rem;
            line-height: .33rem;
            color: #ffffff;
            text-align: center;
            z-index: 99;
            border-radius: 50%;
            width: .33rem;
            height: .33rem;
            background-color: rgba($color: #111111, $alpha: 0.4)
        }
        .el-icon-arrow-left{
            position: absolute;
            top: .22rem;
            left: .14rem;
            font-size: .2rem;
            line-height: .33rem;
            color: #ffffff;
            text-align: center;
            z-index: 99;
            border-radius: 50%;
            width: .33rem;
            height: .33rem;
            background-color: rgba($color: #111111, $alpha: 0.4)
        }
    }
   
</style>