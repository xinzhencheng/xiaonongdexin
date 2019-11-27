<!--
 * @Descripttion: ""
 * @version: v1.0.0
 * @Author: mac
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-27 15:59:21
 -->
<template>
    <div class="box"> 
        <div class="middle">
            <div class="middle1">
                <div class="middle2">
                    <div class="middle3">账户登录</div>
                    <div class="middle4">短信登录</div>
                    <div class="middle_1">
                    </div>
                </div>
                <div class="middle5">
                    <p>用户名/手机号</p>
                    <input type="text" id="inpute" placeholder="请输入用户名或手机号" onfocus="this.placeholder=''" onblur="this.placeholder='请输入用户名或手机号'">
                </div>
                <div class="middle5 middle6">
                    <p>密码</p>
                    <input type="password" placeholder="请输入密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入密码'">
                </div>
                 <div class="middle5 middle7">
                    <span class="spaa">记住账户</span> 
                    
                        <span class="spa">
                            <!-- <router-link > -->
                                忘记密码?
                            <!-- </router-link> -->                           
                    </span>
                </div>
            </div>
        </div>
        <div class="mot">
            <div class="motu">
                <span class="mout">前往登录</span>
                <span class="mouti">登录</span>
            </div>
        </div>
    </div>  
</template>

<script>

export default {
  name: 'Mloginmiddle',
  data () {
    return {
      
    }
  },
  methods:{
      
  }
}
</script>

<style lang="scss" scoped="" type="text/css">


.el-icon-close{
  font-size: 22px;
}
.middle{
    width: 100%;
    height: 2.7rem; 
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
                top: -.1rem;
                left: .6rem;
                width: 1.3rem;
                height: .34rem;
                margin-right: .05rem;
                border-radius: 20px;
                color: #8fddad;
                border: 1px solid #8fddad;
                z-index: 2;
                text-align: center;
                line-height: .34rem;
                font-size: 15px;
                background: white;
            }  
            .middle4{
                box-sizing: border-box;
                position: absolute;
                top: -.1rem;
                right: .6rem;
                width: 1.3rem;
                height: .34rem;
                // margin-right: .05rem;
                border-radius: 20px;
                box-shadow:3px 3px 5px rgb(219, 218, 218);
                text-align: center;
                line-height: .34rem;
                font-size: 15px;
                background: white;
            } 
            .middle_1{
                width: 85%;
                height: .55rem;
            }
        }
        .middle5{
            width: 85%;
            height: .6rem;
            margin: 0 auto;
            p{
                font-size: 16px;
                color:#828282
            }
            input{
                outline: none;
                border: none;
                height: .35rem;
                width: 100%;
                border-bottom: 1px solid #e6e6e6;
                box-sizing: border-box ;
                margin-top: .08rem; 
            } 
        }
        .middle6{
            margin-top: .1rem
        }
        .middle7{
            background: pink;
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
    width: 95%;
    height: 3rem;
    background: rebeccapurple;
    margin: 0 auto;
    .motu{
        width: 100%;
        height: 1rem;
        background: #8fddad;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
