<!--
 * @Descripttion: ""
 * @version: v1.0.0
 * @Author: mac
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-28 10:09:47
 -->
<template>
    <div class="box"> 
            <div class="middle">
                <div class="middle1">
                    <div class="middle2">
                        <div class="middle3">注册</div>
                        <div class="middle_1">
                        </div>
                    </div>
                    <div class="middle5">
                        <p>手机号</p>
                        <input type="text" ref="patClear" v-model="userPhone" class="inpute" placeholder="请输入用户名或手机号" onfocus="this.placeholder=''" onblur="this.placeholder='请输入用户名或手机号'">
                    </div>
                    <div class="middle5 middle6">
                        <p>用户名</p>
                        <input type="password" ref="paClear" class="inpute" placeholder="请输入用户名" onfocus="this.placeholder=''" onblur="this.placeholder='请输入用户名'">
                        <!-- <el-input class="inpute inputs" v-model="password" placeholder="请输入密码"  onfocus="this.placeholder=''" onblur="this.placeholder='请输入密码'" clearable show-password></el-input> -->
                    </div>
                    <div class="middle5 middle6">
                        <p>密码</p>
                        <input type="password" ref="pClear" class="inpute" placeholder="请输入密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入密码'">
                        <!-- <el-input class="inpute inputs" v-model="password" placeholder="请输入密码"  onfocus="this.placeholder=''" onblur="this.placeholder='请输入密码'" clearable show-password></el-input> -->
                    </div>
                    <div class="middle5 middle6">
                        <p>确定密码</p>
                        <input type="password" ref="Clear" class="inpute" placeholder="请确定密码" onfocus="this.placeholder=''" onblur="this.placeholder='请确定密码'">
                        <!-- <el-input class="inpute inputs" v-model="password" placeholder="请输入密码"  onfocus="this.placeholder=''" onblur="this.placeholder='请输入密码'" clearable show-password></el-input> -->
                    </div>
                </div>
            </div>
        <div class="mot">
            <div class="motu">
                <router-link to="/"><span class="spaa"><i class="el-icon-back"></i> 前往登录</span> </router-link>
                <button class="mouti"  @touchstart="loginCheck">注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</button>
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
      show:true
    }
  },
  methods:{
      middle3:function(){
          this.show = !this.show
      },
      middle4(){
          this.show = !this.show
      },
      loginCheck(){
          localStorage.setItem('userPhone',this.userPhone);
          if(this.userPhone =="" || this.password ==""){
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
                 Toast("注册成功")
                // this.$router.push('/');
            },1100);
        }

              this.$refs.patClear.value =''
              this.$refs.paClear.value =''
              this.$refs.pClear.value =''
              this.$refs.Clear.value =''
      }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.el-icon-close{
  font-size: 22px;
}
.middle{
    width: 100%;
    height: 3.15rem;
    .middle1{
        width: 95%;
        height: 100%;
        background: white;
        margin: 0 auto;
        border-radius: 10px;
        .middle2{
            display: flex;
            justify-content: center;
            position: relative;
            .middle3{
                box-sizing: border-box;
                position: absolute;
                top: -.15rem;
                width: 1.2rem;
                height: .3rem;
                margin-right: .05rem;
                border-radius: 20px;
                color:#10e766;
                border: 1px solid #8fddad;
                z-index: 2;
                text-align: center;
                line-height: .3rem;
                font-size: 15px;
                background: white;
                box-shadow:3px 3px 5px rgb(219, 218, 218);
            }  
            .middle_1{
                width: 85%;
                height: .2rem;
            }
        }
        .middle5{
            width: 85%;
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
        .middle7{
            margin-top: .1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .spaa{
                color: #828282
            }
            .spa{
                color: #f85220
            }
        }
        
    }
}
.mot{
     margin-bottom: 1rem;
    width: 95%;
    height: 2.2rem;
    margin: 0 auto;
    .motu{
        width: 100%;
        height: .7rem;
        display: flex;
        align-items: center;
        justify-content:space-around;
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
