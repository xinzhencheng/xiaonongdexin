<!--
 * @Author: 张腾
 * @Date: 2019-12-02 14:28:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-07 12:09:22
 * @Description: 
 -->

<template>
  <div class="Main">
    <div class="sea">
        <i class="el-icon-arrow-left" @click="back()"></i>
        <p>收货地址</p>
    </div>
    <div class="box">
      <ul>
        <li v-for="(address,index) in addresss" :key="index" @click="chuan(index)">
          <span>{{address.people}}</span>&nbsp;&nbsp;&nbsp;&nbsp;{{address.phone}}
          <p>{{address.Area}}{{address.xiangxidizhi}} </p>
        </li>
      </ul>
    </div>
    <button @click="func()"><span>+</span>&nbsp;&nbsp;新增地址</button>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      addresss:[],
      suoshuxinhang: "",
      yinhangka: "",
      name: "",
      idCar: "",
      kahao: "",
      shuoji: ""
    };
  },
  created(){
     axios.get('http://localhost:3000/addresss')
        .then(res=>{
            let tempAddresss = res.data;
            //给每个商品增加属性 isChecked
            for(let i in tempAddresss){
                tempAddresss[i].isChecked = false;
            }
            this.addresss=tempAddresss;
        })
        .catch(err=>{
            console.log(err);
        })
  },
  methods: {
    chuan(index){
      let zhi=this.addresss[index];
      this.$router.push({path:"/Squerendingdan"});
      this.$store.commit('dizhi',zhi)
      console.log(zhi);
    },
    back() {
      this.$router.push({path:"/Squerendingdan"});
    },

    func() {
      this.$router.push({path:"/NewAddress"});
      
    }
  }
};
</script>

<style lang="scss" scoped>
.Main{
  width: 100%;
}
.sea{
    padding: 2px 16px 0 10px;
    background-color: rgb(255, 255, 255);
    width:100%;
    position:fixed;
    top:0;
    left:0;
    z-index: 10;
    display: flex;
    height: .4rem;
    align-items: center;
     i{
            font-size: .26rem;
            margin-right: 1.2rem;
        }   
        p{
            font-size: .18rem;
        }
    }
.box {
  width: 96%;
  margin: 0 auto;
  margin-top: .5rem;
  ul {
    li {
      height: .7rem;
      background-color: #fff;
      margin-bottom: .1rem;
      border-radius: 5px;
      line-height: .3rem;
      padding-left: .3rem;
      padding-top: .1rem;

    }
  }
}

button {
  margin:0 auto;
  width: 96%;
  height: 0.5rem;
  border: none;
  outline: none;
  color: #1ed173;
  background: #ffffff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content:center;
  margin-top:.25rem;
  border-radius: 5px;
  span{
    font-size: 0.3rem;
  }
}
</style>