<!--
 * @Author: 安菲
 * @Date: 2019-11-26 10:16:18
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-28 19:41:54
 * @Description: 
 -->
<template>
<div>
    <div class="Waibox">
    <div class="sea">
            <p>购物车</p>
            <span class="span" v-text="Text" @click="chang" >编辑</span>
        </div>  
        
    </div>
    <div class="waibox">
        <ul>
            <li v-for="(food,index) in foods" :key="index">
                <div class="title">
                    <div class="check">
                        <input type="checkbox" v-model="food.isChecked">
                    </div> 
                    <span>{{food.shop}}></span>
                </div>
                <div class="food">
                    <div class="check">
                        <input type="checkbox"  v-model="food.isChecked">
                    </div>
                    <div class="img">
                        <img :src="food.img" alt="">
                    </div>
                    <div class="add">
                        <p>{{food.name}}</p>
                        <span>{{food.weight}}</span>
                        <div class="Add">
                            <span>￥{{food.price}}</span>
                            <div class="jj">
                                <el-input-number  v-model="food.count" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="ADD">
            <div class="d">
                <div class="check">
                    <input type="checkbox" id="allCheckBox" v-model="allcheck" @click="allCheck">
                </div> 
                <span>全选</span> 
            </div>
            <div class="over">
                <div class="a">
                    合计：<span id="addMoney">￥{{addMoney}}</span>
                </div>
                <router-link to="">
                    <div class="commit">结算</div>
                </router-link>
            </div>
            <!-- <div class="delect">
                删除
            </div> -->
        </div>
    </div>
</div>

</template>
<script>
import axios from 'axios';
export default {
    name:"Acommodity",
    data (){
        return {
           num: 1,
           foods:[

           ],
           allcheck:false,
           isShow:true,
           Text:"编辑"
        };
    },
    created(){
        axios.get('http://localhost:3000/foods')
        .then(res=>{
            let tempFoods = res.data;
            //给每个商品增加属性 isChecked
            for(let i in tempFoods){
                tempFoods[i].isChecked = false;
            }
            this.foods=tempFoods;
        })
        .catch(err=>{
            console.log(err);
        })
    },
    computed:{
        addMoney:function(){
            let Money = 0;
            let isAllCheck=true;
            for(let i in this.foods){
                if(this.foods[i].isChecked){
                    Money+=this.foods[i].count*this.foods[i].price;
                }else{
                    isAllCheck=false;
                }
            }
            this.allcheck=isAllCheck;
            return Money;
        }
    },
    methods: {
      handleChange(value) {
      },
        allCheck(){
        //   console.log(this.allCheck);
          console.log(event.target.checked);
          this.foods.forEach(item=>{
              item.isChecked = event.target.checked;
          });
      },
      chang(){
        //   v-show="isShow" 
            this.isShow=!this.isShow
            if(this.isShow){
                this.Text="编辑"
            }else{
                this.Text="完成"
            }
        }
    }
  }

</script>

<style lang="scss" scoped="" type="text/css"> 
.Waibox{
    width: 100%;
    background: #ffffff;
    height: .45rem;
    z-index: 10;
    position: fixed;
    top: 0px;
}
.sea{
    line-height: .45rem;
}
p{
    width: 100%;
    text-align: center;
    font-size:.20rem;
}
.span{
    position: fixed;
    right: 10px;
    top: 0px;
    color: #6a6a6a;
}
.waibox{
    width: 100%;
    margin-top: .55rem;
}
ul li{
    width: 93%;
    height: 1.6rem;
    margin: 12px auto;
    border-radius: 7px;
    background-color: #fff;
}
.title{
    width: 100%;
    height: .4rem;
    display: flex;
    align-items: center;
   
}
input[type="checkbox"]{
    display: inline-block;
    width: .22rem;
    height: .22rem;
    margin: 0 9px;
    appearance: none; // 改变元素外观
    background: #fff;
    border-radius: 50%;
    border: .35px solid rgb(175, 175, 175);
    outline: none;
}
input[type="checkbox"]:checked{ // 复选框选中的样式 使用带有对号的 背景图片打底
    background: url("../assets/imgs/eglass-check.png") no-repeat;
    background-size: 100% 100%;
    border: none;
}
.food{
    width: 100%;
    height: 1.2rem;
    display: flex;
    align-items: center;
    // background-color: rgb(165, 195, 231);
    .img{
        width: .95rem;
        height: .95rem;
        img{
            width: 100%;
        }
    }
    .add{
        width: 2rem;
        height: .95rem;
        margin: 0 auto;
        p{
            font-size: .16rem;
            margin-bottom:10px; 
        }
        span{
            color: rgb(159, 159, 159);
            font-size: .12rem;
        }
        .Add{
            display: flex;
            height: .45rem;
            align-items:flex-end;
            justify-content:space-between;
            span{
                color: rgb(255, 129, 11);
                font-size:.18rem;
            }
            .jj{
                outline: none;
                .el-input-number{
                    width: 120px;
                    height: 38px;
                    outline: none;
                }
            }
        }
    }
}
.ADD{
    width: 100%;
    height: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    position: fixed;
    bottom: .5rem;
    z-index: 10;
    .d{
        display: flex;
        align-items: center;
    }
    span{
        line-height: .12rem;
    }
    .a{
        width: .85rem;
        font-size: 12px;
    }
    .commit{
        display: inline-block;
        background-color: rgb(255, 144, 39);
        width: 1.1rem;
        height: .4rem;
        text-align: center;
        line-height: .4rem;
        color: #fff;
        border-radius: 22px;
        margin-right:10px;
    }
    .over{
        display: flex;
        align-items: center;
    }
}
#addMoney{
    color: rgb(255, 129, 11);
}
.delect{
    margin-right:10px;
    width:1.1rem;
    border:1px solid red;
    height: .4rem; 
    text-align: center;
    line-height: .4rem;
    border-radius: 22px;
    color:rgb(255, 36, 83);
}
</style>
