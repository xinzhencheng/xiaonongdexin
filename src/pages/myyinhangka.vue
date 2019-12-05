<!--
 * @Author: 张腾
 * @Date: 2019-12-02 09:47:47
 * @LastEditors: 张腾
 * @LastEditTime: 2019-12-05 09:22:18
 * @Description: 
 -->
<template>
  <div>
    <header>
      <img src="../assets/ic_back.png" @click="back()" /> 我的银行卡
    </header>
    <div
      style="background:green;margin: 0.1rem auto 0;padding: 0.3rem; width:75%;
    border-radius: 15px;"
      v-for="(yinhangkaxinxi,index) in yinhangkaxinxi"
      :key="index"
    >
      <h1 style="color:white;font-size: .2rem;font-weight: 400;">{{yinhangkaxinxi.suoshuxinhang}}</h1>
      <h1 style="color:white;font-size: .18rem;font-weight: 400;">{{yinhangkaxinxi.yinhangka}}</h1>
      <h1 style="color:white;font-size: .25rem;font-weight: 400;">{{yinhangkaxinxi.kahao}}</h1>
      <button
        style="float:right;outline: none;background:green;
      border: none;"
        @click="open(yinhangkaxinxi.id)"
      >删除银行卡</button>
    </div>
    <div class="buttonAdd">
      <div>
        <button>
          <router-link to="/xinzengyinhangka">
            <span class="el-icon-circle-plus-outline"></span> 新增银行卡
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return { 
      yinhangkaxinxi: []
      }
  },
  created() {
    axios({
      method: "get",
      url: "http://localhost:3000/yinhangka"
    }).then(res => {
      // console.log(res.data);
      this.yinhangkaxinxi = res.data;
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    open(id) {
      MessageBox.confirm("确定删除?").then(action => {
        axios({
          method: "delete",
          url: "http://localhost:3000/yinhangka/"+id
        })
        .then(data => {
          this.$router.go(0)
          // location.reload()
        })
        
      });
    }
  }
};
</script>

<style lang="scss" >
.mint-msgbox {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  background-color: #fff;
  width: 85%;
  border-radius: 3px;
  font-size: 16px;
  // -webkit-user-select: none;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
.mint-msgbox-header {
  padding: 15px 0 0;
}
.mint-msgbox-content {
  padding: 10px 20px 15px;
  border-bottom: 1px solid #ddd;
  min-height: 36px;
  position: relative;
}
.mint-msgbox-message {
  color: #999;
  margin: 0;
  text-align: center;
  line-height: 36px;
}
.mint-msgbox-input {
  padding-top: 15px;
}
.mint-msgbox-input input {
  border: 1px solid #dedede;
  border-radius: 5px;
  padding: 4px 5px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  // appearance: none;
  outline: none;
}
.mint-msgbox-errormsg {
  color: red;
  font-size: 12px;
  min-height: 18px;
  margin-top: 2px;
}
.mint-msgbox-cancel {
  outline: none;
  width: 50%;
  color: #26a2ff;
  border-right: 1px solid #ddd;
}
.mint-msgbox-confirm {
  border-right: 1px solid #ddd;
  outline: none;
  width: 50%;
}
.mint-msgbox-title {
  text-align: center;
  padding-left: 0;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 700;
  color: #333;
}
.mint-msgbox-btns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 40px;
  line-height: 40px;
}
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
.buttonAdd {
  margin-top: 0.5rem;
  background-color: white;
  div {
    width: 1.3rem;
    margin: 0 auto;
    line-height: 0.75rem;
    color: #11bc56;

    button {
      outline: none;
      span {
        font-size: 0.19rem;
        margin-right: 0.1rem;
      }
      border: none;
      font-size: 0.19rem;
      color: #11bc56;
      background-color: white;
    }
  }
}
</style>