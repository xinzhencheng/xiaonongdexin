<!--
 * @Author: 张腾
 * @Date: 2019-12-02 14:28:25
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-04 17:32:18
 * @Description: 
 -->

<template>
  <div>
    <header>
      <img src="../assets/ic_back.png" @click="back()" /> 添加银行卡
    </header>
    <div class="box">
      <ul>
        <li>
          <span>所属银行</span>
          <input type="text" placeholder="选择所属银行" v-model="suoshuxinhang" />
        </li>
        <li>
          <span>银行卡类型</span>
          <input type="text" placeholder="请选择银行卡类型" v-model="yinhangka" />
        </li>
        <li>
          <span>持卡人姓名</span>
          <input type="text" placeholder="请输入持卡人姓名" v-model="name" />
        </li>
        <li>
          <span>身份证号</span>
          <input type="number" placeholder="请输入身份证号" v-model="idCar" />
        </li>
        <li>
          <span>银行卡号</span>
          <input type="number" placeholder="请输入银行卡号" v-model="kahao" />
        </li>
        <li>
          <span>预留手机号</span>
          <input type="number" placeholder="请输入预留手机号" v-model="shuoji" />
        </li>
      </ul>
    </div>
    <button @click="func()">保&nbsp;&nbsp;&nbsp;存</button>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      suoshuxinhang: "",
      yinhangka: "",
      name: "",
      idCar: "",
      kahao: "",
      shuoji: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },

    func() {
      if (
        this.suoshuxinhang != "" &&
        this.yinhangka != "" &&
        this.name != "" &&
        this.idCar != "" &&
        this.kahao != "" &&
        this.shuoji != ""
      ) {
        axios({
          method: "post",
          url: "http://localhost:3000/yinhangka",
          data: {
            suoshuxinhang: this.suoshuxinhang,
            yinhangka: this.yinhangka,
            name: this.name,
            idCar: this.idCar,
            kahao: this.kahao,
            shuoji: this.shuoji
          }
        }).then(res => {
          // console.log(res.data);
          this.yinhangka = res.data;
        });
        setTimeout(() => {
          Toast("添加成功");
          this.$router.push("/xinzengyinhangka");
        }, 1100);
      } else {

         setTimeout(() => {
          Toast("添加失败，信息必须全部填写");
         
        }, 1100);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  background: white;
  margin-top: 0.1rem;
  text-align: center;
  font-size: 0.18rem;
  padding-bottom: 0.3rem;
  img {
    float: left;
    width: 0.11rem;
    margin-left: 0.1rem;
  }
}
.box {
  width: 90%;
  margin: 0 auto;
  ul {
    li {
      height: 0.75rem;
      border-bottom: 1px solid #dddddd;
      span {
        display: inline-block;
        width: 25%;
        font-size: 0.16rem;
        line-height: 0.75rem;
      }
      input {
        height: 0.5rem;
        width: 70%;
        outline: none;
        line-height: 0.75rem;
        font-size: 0.16rem;
        border: none;
      }
    }
  }
}

button {
  display: block;
  margin: 0.4rem auto 0;
  width: 2.5rem;
  height: 0.5rem;
  border-radius: 0.6rem;
  border: none;
  outline: none;
  color: white;
  background: #1ed173;
  font-size: 0.2rem;
}
</style>