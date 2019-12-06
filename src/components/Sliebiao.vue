<!--
 * @Author: 司娟
 * @Date: 2019-11-29 14:43:15
 * @LastEditors: 司娟
 * @LastEditTime: 2019-12-05 14:29:35
 * @Description: file content
 -->
<template>
    <div class="box">
        <ul class="box2">
            <li class="qq" v-for="(goodslist,index) in goodslists" :key="index">
                <div class="q1">  
                    <img :src="goodslist.img" alt="" class="img3">
                </div>
                <div class="q2">
                    <p class="p1">{{goodslist.biaoti}}</p>
                    <p class="p2">{{goodslist.neirong}}</p>
                    <span>&nbsp;{{goodslist.tiaojian1}}&nbsp;</span>
                    <span>&nbsp;{{goodslist.tiaojian2}}&nbsp;</span>
                    <div class="kiki">
                        <!-- <router-link  :to='tiao'> -->
                            <b>￥{{goodslist.jiaqian}}</b>
                            <img src="../assets/img/ic_shopcart_press.png" alt="" @click="show(goodslist.id)">
                        <!-- </router-link>     -->
                    </div>
                </div>
            </li>
        </ul>
        <mt-popup v-if="isshow" v-model="popupVisible" position="bottom" class="show">
            <Stanchuang :id="id" v-on:changemsg="func"></Stanchuang>
        </mt-popup>
    </div>    
</template>

<script>
import Vue from 'vue';
// import { Toast } from 'mint-ui';
Vue.component(Popup.name, Popup);
import { Popup } from 'mint-ui';
import Stanchuang from './Stanchuang';

import axios from 'axios';
export default {
  name: 'Sliebiao',
  inject:["reload"],
  data () {
    return {
        popupVisible:false,
        goodslists:[],
        // tiao:"",
        isshow:false,
        id:""
    }
  },
  created() {
     //从后端获取数据     
     axios.get('http://localhost:3000/rementuijies')
     .then(res=>{ 
         this.goodslists = res.data;
     })
     .catch(err=>{
         console.log(err);
     });
  },
  beforeUpdate(){
    //   console.log("数据更新了------------：");
  },
  methods:{
      show(id){
           this.popupVisible=true; 
            this.isshow=true;
            this.id=id;
            console.log(this.id);
            // this.reload();
            // window.location.reload();
      },
      func(zhi){
          this.isshow=zhi;
      }
    //    getBooksByType(data){//根据类型获取数据
    //      var search = this.Search;
    //        var len = this.goodslists.length;
    //        if (!search) {
    //             Toast({
    //                 message: '搜索内容不能为空',
    //                 position: 'bottom',
    //                 duration: 5000
    //             });
    //         }
    //         search = search.trim().toLowerCase();
    //         this.shops = this.goodslists.filter(function(item) {
    //             if (item.biaoti.toLowerCase().indexOf(search) != -1) {
    //                 return item;
    //             }
    //         })
    //  }
  },
  components:{
     Stanchuang
  }
   
}
</script>

<style scoped lang=scss>
.box{
    width: 94%;
    padding-left: 3%;
    padding-right: 3%;
    min-height: 5.05rem;
    background-color: #f9f9f9;
    /* margin-top: 1.62rem; */
    ul{
        width: 100%;
        li{ 
            width: 100%;
            height: 1.43rem;
            background-color: #fff;
            margin-bottom: .1rem;
            border-radius: .1rem;
            /* margin-right:.3rem ; */
            .q1{
                width: 1.3rem;
                height: 1.43rem;
                float: left;
                .img3{
                    width: 1.1rem;
                    height: 1.1rem;
                    margin-left: .1rem;
                    margin-top: .15rem;
                    border-radius: 8px;
                }
            }
            .q2{
                height: 1.33;
                padding-top: .1rem;
                .p1{
                    color:#333333;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: .26rem;
                }
                .p2{
                    color:#999999;
                    line-height: .26rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                span{
                    height: .25rem;
                    margin-top: 3px;
                    line-height: .25rem;
                    display: inline-block;
                    border: 1px solid #fda4b2;
                    color: #fc647c;
                    font-size: 11px;
                    border-radius:2px;
                    background-color: #fff5f7;
                }
                .kiki{
                    font-size: 16px;
                    color: #fc8600;
                    line-height: .4rem;
                    img{
                        width: .25rem;
                        height: .25rem;
                        float:right;
                        position: relative;
                        top: .1rem;
                        left: -.1rem;
                    }
                }
            }
        }
    }
    .show{
        width: 100%;
        height:4rem;
        border-radius: .1rem;
    }
}

</style>
