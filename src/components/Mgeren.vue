<!--
 * @Descripttion: ""
 * @version: v1.0.0
 * @Author: mac
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-04 15:44:10
 -->
<template>
    <div class="box"> 
        <div class="mac">
          <i class="el-icon-arrow-left" @click="back()"></i>
          <div class="wangji">个人信息</div>
        </div>
        <div class="gerenxinxi">
          <div class="greens"></div>
            <div class="gren1">
                <span class="dsafasdasda">头像</span>
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    <!-- <img src="../assets/ic_ali.png" alt=""> -->
                </el-upload>
            </div>
            <div class="gren2">
                <span class="dsafasdasda">昵称</span>
                <input type="text" class="fdssfsadasdsa" value="用户1003812" v-model="username">
            </div>
            <div class="gren2">
                  
                <span class="dsafasdasda">邮箱</span>
                <input type="text" class="fdssfsadasdsa" placeholder="请输入邮箱" v-model="useremaral">
            </div>
            <div class="gren2 gren3">
                <span class="dsafasdasda">生日</span>
                  <div class="block">
                      <el-date-picker
                        v-model="value10"
                        type="date"
                        placeholder="请选择生日"
                        format="yyyy 年 MM 月 dd 日"
                        >
                      </el-date-picker>
                </div>
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
       <div class="mihan">
          <button class="btns" @click="loginCheck()">保&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存</button>
       </div>
    </div>  
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  name: 'Mlogintop',
  data () {
    return {
      dialogImageUrl: '',
        dialogVisible: false,
        value10: '',
        value11: '',
         imageUrl: '',
         username:'',
         useremaral:'',
 
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    loginCheck(){
        //   localStorage.setItem('userPhone',this.userPhone);
        if(this.value10 =="" || this.username =="" || this.useremaral ==""){
        Toast('所填内容不能为空');
        }else{
         let id=localStorage.getItem("id")
            console.log(id)
             axios({
                    method:"patch",
                    url:"http://localhost:3000/login/"+id,  
                    data:{
                        userPhone:this.userPhone,
                       
                    }
                })
                .then((data)=>{
                    // console.log(data); 
                    console.log("修改成功");
                    // console.log(data); 
                    // console.log("修改成功");
                    // this.$router.push({
                    //     path: '/Login'
                        
                    // })
                })

        setTimeout(()=>{
          localStorage.setItem('userPhone',this.userPhone);
            Toast("保存成功")
          this.$router.push('/');
        },1100);
        }

      },

  }
}
</script>

<style>

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
.gerenxinxi{
  width: 94%;
  height: 2.8rem;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: .15rem;
  background: #fff
}   
    .greens{
      height: .2rem;
    }
    .gren1{
      width: 96%;
      height: .75rem;
      border-bottom: 1px solid rgb(173, 173, 173);
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .gren2{
      width: 96%;
      height: .6rem;
      border-bottom: 1px solid rgb(173, 173, 173);
      margin: 0 auto; 
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .gren3{
      border-bottom: none
    }


.imgdasd{
    width: 60px;
    height: 60px;
    position: absolute;
    right: .17rem;
}
.dsafasdasda{
  font-size: 15px;
  color: rgb(139, 139, 139)
}
i{
  font-size: 21px
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    background: url("../assets/ic_empty_header.png") no-repeat;
    background-size: 61px 61px
}
  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }


.fdssfsadasdsa{
    border: none;
    width: 83%;
    height: 100%;
    font-size: 15px;
    outline: none
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 266px;
}
.el-input__inner {
    -webkit-appearance: none;
    background-image: none; 
       border: none;
    box-sizing: border-box;
    color: black;
    display: inline-block;
    font-size: 16px;
    height: 61px;
    line-height: 70px;
    outline: 0;
    padding: 0 15px;
    width: 100%;
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
