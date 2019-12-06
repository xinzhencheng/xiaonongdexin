<!--
 * @Descripttion: ""
 * @version: v1.0.0
 * @Author: mac
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-05 15:56:45
 -->
<template>
    <div class="box"> 
        <div class="xiugai">
            <div class="casadsad"></div>
            <router-link to="/grxx">
                <div class="geren">
                    <div class="geleft">
                        <img src="../assets/ic_personal.png" alt="">
                    </div>
                    <div class="geright">
                        <div class="gertn">
                            <p>个人信息</p>
                            <i class="el-icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link to="/xiuganmima">
                <div class="geren">
                    <div class="geleft">
                        <img src="../assets/ic_change_password.png" alt="">
                    </div>
                    <div class="geright">
                        <div class="gertn">
                            <p>修改密码</p>
                            <i class="el-icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
             </router-link>
            <router-link to="/xiugaishouji">
                <div class="geren">
                    <div class="geleft">
                        <img src="../assets/ic_change_phone.png" alt="">
                    </div>
                    <div class="geright">
                        <div class="gertn">
                            <p>修改手机号</p>
                            <i class="el-icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="xiuga" @click="loginout">
           退出登录
        </div>
    </div>  
</template>

<script>

export default {
  name: 'Mloginlog',
  data () {
    return {
      
    }
  },
  methods:{
      loginout(){
      localStorage.removeItem('userPhone');
      localStorage.removeItem('id');
      this.$router.push({path:'/Login'})
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
    .xiugai{
        width: 95%;
        height: 2rem;
        border-radius: 20px;
        margin: 0 auto;
        margin-top: .1rem;
        background: white;
        .casadsad{
            height: .2rem;
        }
        .geren{
            width: 97%;
            height: .5rem;
            margin-left: 3%;
            display: flex;
            justify-content: space-between;
            .geleft{
                width:15% ;
                height: 100%;
                text-align: center;
                    img{
                        width: .3rem;
                        height: .3rem;
                    margin-top: .13rem
                    }
            }
            .geright{
                width: 83%;
                height: 100%;
                border-bottom: 1px solid rgb(202, 201, 201);
                .gertn{
                    width: 95%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    p{
                        font-size: 15px
                    }
                    i{
                        font-size: 19px

                    }
                }
            }
        }
    }
    .xiuga{
         width: 95%;
        height: .6rem;
        border-radius: 10px;
        margin: 0 auto;
        margin-top: .6rem;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        color: red;
        font-size: 17px
    }
</style>
