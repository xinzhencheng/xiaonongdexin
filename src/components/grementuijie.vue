<!--
 * @Author: 郭涛
 * @Date: 2019-11-28 16:51:05
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-29 16:42:49
 * @Description: 
 -->
<template>
    <div id="box">
       <div class="box1">
           <img src="../assets/img/ic_hot.png" alt="" class="img1">
           <img src="../assets/img/bianbian.png" alt="" class="img2">
       </div>
       <div class="box2">
            <div class="qq"  v-for="(shangjia,index) in shangjias" :key="index">
                <div class="q1">
                    <img :src="shangjia.img" alt="" class="img3">
                    <!-- <img src="../../static/img/ic_diamond_tag.png" alt="" class="img4"> -->
                </div>
                <div class="q2">
                    <p class="p1">{{shangjia.biaoti}}</p>
                    <p class="p2">{{shangjia.neirong}}</p>
                    <span>&nbsp;{{shangjia.tiaojian1}}&nbsp;</span>
                    <span>&nbsp;{{shangjia.tiaojian2}}&nbsp;</span>
                    <div class="kiki">
                        <b>￥{{shangjia.jiaqian}}</b>
                        <img src="../assets/img/ic_shopcart_press.png" alt="">
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
       shangjias:[],
    }
  },
   
  created(){
    fetch('http://localhost:3000/rementuijies')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.shangjias=data;
         console.log(this.shangjias)
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>

<style scoped lang=scss>
#box{
    width: 94%;
    padding-left: 3%;
    padding-right: 3%;
    background-color: #f9f9f9;
    margin-bottom: .46rem;
    .box1{
        width: 100%;
        height: .7rem;
        line-height: .7rem;
        position: relative;
        .img1{
            width: 1.25rem;
            position: absolute;
            left: 32%;
            top: .1rem;
        }
        span{
            float: right;
            font-size: 15px;
            color:#ae8c56;
        }
        .img2{
            width: .26rem;
            float: right;
            position: relative;
            top: .28rem;
            
        }
    }
    .box2{
        width: 100%;
        .qq{
            width: 100%;
            height: 1.43rem;
            background-color: #fff;
            margin-right:.3rem ;
            .q1{
                width: 1.3rem;
                height: 1.43rem;
                float: left;
                .img3{
                    width: 1.1rem;
                    height: 1.1rem;
                    /* margin: .14rem .1rem .19rem .1rem; */
                    border-radius: 8px;
                }
            }
            .q2{
                height: 1.43;
                .p1{
                    color:#333333;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: .26rem;
                    margin-top: .1rem;
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
}

</style>