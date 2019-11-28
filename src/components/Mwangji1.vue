<!--
 * @Descripttion: ""
 * @version: v1.0.0
 * @Author: mac
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-28 11:02:26
 -->
<template>
    <div class="box"> 
        <div class="box1">
            <div class="middle">
                <div class="middle1">
                    <div class="middlel"></div>
                    <div class="middle5">
                        <p>用户名/手机号</p>
                        <input type="text" ref="patClear" v-model="userPhone" class="inpute" placeholder="请输入用户名或手机号" onfocus="this.placeholder=''" onblur="this.placeholder='请输入用户名或手机号'">
                    </div>
                    <div class="middle5 middle6">
                        <p>密码</p>
                        <input type="password" ref="pathClear" v-model="password" class="inpute" placeholder="请输入密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入密码'">
                        <!-- <el-input class="inpute inputs" v-model="password" placeholder="请输入密码"  onfocus="this.placeholder=''" onblur="this.placeholder='请输入密码'" clearable show-password></el-input> -->
                    </div>
                    
                    <div class="middle5 middle6">
                        <p>新密码</p>
                        <input type="password" ref="paClear" v-model="newpassword" class="inpute" placeholder="请输入密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入新密码'">
                        <!-- <el-input class="inpute inputs" v-model="password" placeholder="请输入密码"  onfocus="this.placeholder=''" onblur="this.placeholder='请输入密码'" clearable show-password></el-input> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="mot">
            <div class="motu">
                <button class="mouti"  @touchstart="loginCheck">提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交</button>
            </div>
        </div>
    </div>  
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  name: 'Mloginmiddle',
  data () {
    return {
      show:false,
        userPhone: '',
        password: '',
        newpassword:''
    }
  },
  methods:{
      loginCheck(){
          localStorage.setItem('userPhone',this.userPhone);
          if(this.userPhone =="" || this.password =="" || this.newpassword ==""){
              Toast('手机号或密码不能为空');
          }else{
            // axios.get('/user/deng?uname='+this.userPhone+'&upass='+this.password)
            // .then(res=>{
            //     console.log(res.data);  
            // })
              
            // .catch(err=>{
            //     console.log(err);
            // })
            setTimeout(()=>{
                 Toast("提交成功")
                this.$router.push('/');
            },1100);
        }
        
              this.$refs.pathClear.value =''
              this.$refs.patClear.value =''
              this.$refs.paClear.value =''
      }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.box1{
    position: relative;
}
.middle10{
    position: absolute;
    top: 0;
    left: 0;
}
.el-icon-close{
  font-size: 22px;
}
.middle{
    width: 100%;
    height: 2.45rem;
    .middle1{
        width: 95%;
        height: 100%;
        background: white;
        margin: 0 auto;
        border-radius: 10px;
        .middlel{
            width: 100%;
            height: .2rem;
        }
        .middle2{
            display: flex;
            justify-content: center;
            position: relative;
        }
        .middle5{
            width: 85%;
            height: .6rem;
            margin: 0 auto;
            p{
                font-size: 16px;
                color:#10e766
            }
            .inpute{
                outline: none;
                border: none;
                height: .35rem;
                width: 100%;
                border-bottom: 1px solid #e6e6e6;
                box-sizing: border-box ;
                margin-top: .08rem; 
            }
            // .inputs{
            //     outline: none;
            //     border: none;
            // } 
        }
        .middle6{
            margin-top: .1rem
        }        
    }
}
.mot{
     margin-bottom: 1rem;
    width: 95%;
    height: 2.7rem;
    margin: 0 auto;
    .motu{
        width: 100%;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content:center;
        .mouti{
            width: 1.2rem;
            height: .4rem;
            background: #10e766;
            border-radius: 50px;
            text-align: center;
            line-height: .4rem;
            color: white;
            font-size: 16px;
            
                outline: none;
                border: none;
        }
   
    } 
}
</style>
