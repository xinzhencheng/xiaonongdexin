<!--
 * @Descripttion: ""
 * @version: v1.0.0
 * @Author: mac
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-03 14:06:15
 -->
<template>
    <div class="box"> 
        <div class="mac">
          <i class="el-icon-arrow-left" @click="back()"></i>
          <div class="wangji">修改绑定手机号</div>
        </div>
        <div class="mima">
             <div class="mimc"></div>
             <div class="mimam">
                <div class="mimanc">
                  <p>用户名</p>
                  <input type="text" placeholder="请输入用户名" v-model="username">
                </div>
             </div>
             <div class="mimam mia">
                <div class="mimanc">
                  <p>手机号</p>
                  <input type="text" placeholder="请输入手机号" v-model="userPhone" >
                </div>
             </div>
        </div>
        <div class="mihan">
          <button class="btns" @click="loginCheck()">提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交</button>
       </div>
    </div>  
</template>

<script>

import { Toast } from 'mint-ui';  
export default {
  name: 'Mlogintop',
  data () {
    return {
      userPhone:'',
      username:''
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    loginCheck(){
        //   localStorage.setItem('userPhone',this.userPhone);
        if(this.userPhone =="" || this.username ==""){
        Toast('所填内容不能为空');
        }else{
        // axios.get('/user/deng?uname='+this.userPhone+'&upass='+this.password)
        // .then(res=>{
        //     console.log(res.data);  
        // })

        // .catch(err=>{
        //     console.log(err);
        // })
        setTimeout(()=>{
          localStorage.setItem('userPhone',this.userPhone);
            Toast("修改成功")
          this.$router.push('/');
        },1100);
        }

      },
  }
}
</script>

<style scoped>

.mac{
    width: 100%;
    height: .5rem;
    margin: 0 auto;
    background: white;
    display: flex;
    align-items: center; 
    /* background-color: blue */
}
.wangji{
    width: 100%;
    height: .4rem;
    text-align: center;
    line-height: .4rem;
    margin-right: .15rem;
    font-size: 18px
}
.el-icon-arrow-left{
  margin-left: .1rem; 
  font-size: 30px;
}
.mima{
    width: 94%;
    height: 2.1rem;
    background: white;
    margin: .2rem auto 0;
    border-radius: 20px
}
.mimc{
  height: .3rem;
}
.mimanc{
  width: 95%;
  margin: 0 auto;
  border-bottom: 1px solid rgb(207, 205, 205);
}
p{
  font-size: 19px;
  color: rgb(161, 161, 161);
  color: #10e766
}
input{
  margin-top: .05rem;
  width: 100%;
  height: .3rem;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 15px
}
.mia{
  margin-top: .15rem
}
.btns{
  width: 1.7rem;
  height: .5rem;
  background: #10e766;
  border: none;
  outline: none;
  border-radius: 40px;
  font-size: 19px;
  color: white
}
.mihan{
  width: 100%;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center
}
</style>
