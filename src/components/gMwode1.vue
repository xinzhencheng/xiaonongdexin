<!--
 * @Author: 郭涛
 * @Date: 2019-12-02 15:49:27
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-05 15:43:18
 * @Description: 
 -->
<template>
    <div id="box">
        <router-link to='/xitongshezhi'>
            <i class="el-icon-setting"></i>
        </router-link>
        <img src="../assets/img/touxiang1.png" alt="" class="img1">
        <router-link to="/Login"><span class="span1">{{str}}</span></router-link>
        <br/>
        <span class="span2">普通用户</span>
    </div>   
</template>

<script>
export default {
  name: 'Denglu',
  data () {
    return {
      str:"请登录"

    }
  }, 
  created(){
   this.checkuser();
  },

  methods:{
    checkuser(){
      let user=localStorage.getItem("userPhone");
      console.log(user);
      if(user!=null){
        this.str=user;
      }
    }
     
  }
 
}
</script>

<style scoped lang=scss>
    #box{
        width: 100%;
        height: 1.8rem;
        background-color: #1cd063;
         .el-icon-setting{
            font-size: .25rem;
            color: #fff;
            position: absolute;
            right: .25rem;
            top: .2rem;
        }
        .img1{
            width: .6rem;
            height: .6rem;
            position: relative;
            left: .2rem;
            top: .25rem;
            border-radius: 50%;
        }
        span{
            display: inline-block;
            line-height: .3rem;
        }
        .span1{
                font-size: .20rem;
                color: #fff;
                position: relative;
                left: .9rem;
                bottom: .28rem;
        }
        .span2{
            font-size: .14rem;
            position: relative;
            left: .92rem;
            bottom:5px;
            color:#84c5a7;
            line-height: .24rem;
            width: .6rem;
            height: .2rem;
            background-color: #fff;
            line-height: .2rem;
            text-align: center;
            border-radius: 5px;
        }
    }
</style>