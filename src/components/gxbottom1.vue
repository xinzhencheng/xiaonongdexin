
<template>
    <div id="box">
        <div class="left">
            <img src="../assets/img/ic_detail_kefu.png" alt="">
            <span>客服</span>
        </div>
        <div class="left" @click="shoucang()">
            <img src="../assets/img/gxjshoucang.png" alt="">
            <span>收藏</span>
        </div>
        <div class="left">
            <router-link to='/shoppingCar'>
                <img src="../assets/img/ic_detail_shopcart.png" alt="">
                <span>购物车</span>
            </router-link>
        </div>
        <input type="button" value="立即购买" class="right1" @click="goumai()">
        <input type="button" value="加入购物车" class="right2" @click="goumai()">
        <mt-popup v-if="isshow" v-model="popupVisible" position="bottom" class="show">
            <stanchuangqq :id="id" @change="func"></stanchuangqq>
        </mt-popup>
    </div>
</template>

<script>
import Vue from 'vue';
// import { Toast } from 'mint-ui';
Vue.component(Popup.name, Popup);
import { Popup } from 'mint-ui';
import stanchuangqq from './stanchuangqq';
import Axios from 'axios';
export default {
    props:["id"],
  data () {
    return {
          popupVisible:false,
        goodslists:[],
        isshow:false,
        id:"" 
    }
  },
 
  methods:{
        goumai(){
            console.log(this.id+'---------mac')
           this.popupVisible=true; 
            this.isshow=true;
            console.log(this.id+'mdadada------------+++');
            // this.reload();
            // window.location.reload();
        },
        shoucang(){
            console.log(this.id)
            Axios.get('http://localhost:3000/rementuijies?id='+this.id)
            .then(res=>{ 
                // console.log( res.data);
                let chuan=res.data[0];
                let url="";
                 console.log(chuan);
                 for(let key in chuan){
                     if(key=="id"){
                         url=url+"id="+chuan[key];
                     }
                     if(key=="img"){
                         url=url+"&img="+chuan[key];
                     }
                     if(key=="biaoti"){
                         url=url+"&name="+chuan[key];
                     }
                     if(key=="neirong"){
                         url=url+"&xiangqing="+chuan[key];
                     }
                     if(key=="jiaqian"){
                         url=url+"&price="+chuan[key];
                     }

                 }
                  console.log(url);
	    			Axios.post('http://localhost:3000/shoucang',url)
				    .then((response)=> {
				        consloe.log("成功");
				    })
				    .catch(function (error) {
				        console.log(error);
				    });

            })
            .catch(err=>{
                console.log(err);
            });
        },
        func(zhi){
          this.isshow=zhi;
      }
      
  },
  components:{
     stanchuangqq
  }
}
</script>

<style scoped lang=scss>
   #box{
       width: 94%;
       height: .6rem;
       border-top: 1px solid #dadada;
       background-color: #fff;
       padding-left: 3%;
       padding-right: 3%;
       position: fixed;
       bottom: 0;
       left: 0;
       .left{
           float: left;
           width: .5rem;
           padding-top: .1rem;
           img{
               width: .25rem;
               padding-left: .125rem;
               color:#575757;
               padding-right: .125rem;
           }
           span{
               width:100%;
               display: inline-block;
               text-align: center;
               color:#575757;
               font-size: .15rem;
           }
       }
        input{
           float:right;
           width: .9rem;
           height: .4rem;
           margin-top: .1rem;
           font-size: .15rem;
           border: 0;
           outline:none;
           text-align: center;
       }
       .right1{
           border-radius:0 .2rem .2rem 0; 
           background-color: #ffba38;
           color:#ffffe3;
       }
       .right2{
           border-radius:.2rem 0 0 .2rem;
           background-color: #fff;
           color: #1caf54;
           border:2px solid #419f6d;
           border-right: 0;
       }
   }
    .show{
        width: 100%;
        height:4rem;
        border-radius: .1rem;
    }
</style>
