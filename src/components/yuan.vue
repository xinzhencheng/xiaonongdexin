<!--
 * @Author: 安菲
 * @Date: 2019-11-28 19:53:51
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-28 21:11:50
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="contents">
        <div class="content">
            <span>收件人</span>
            <p>
                <input type="text" placeholder="请输入收件人姓名">
            </p>
        </div>
        <div class="content two">
            <span></span>
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
        </div>
        <div class="content one">
            <span>联系电话</span>
            <p>
                <input type="text" placeholder="请输入联系电话">
            </p>
        </div>
    </div>
    <div class="contents">
        <div class="content one">
            <span>用户地址</span>
            <p>
                <input type="text" placeholder="请输入收件人姓名">
            </p>
        </div>
        <div class="content one">
            <span>详细地址</span>
            <p>
                <textarea placeholder="详细地址如道路、门牌号、小区、楼栋号、单元室等"> </textarea>
            </p>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"AnewaddressHea",
    data (){
        return {
            radio: '1'
        }
    },
     methods:{
      back(){
          this.$router.go(-1);
      }
     }
}
</script>

<style lang="scss" scoped="" type="text/css">
.waibox{
    width: 100%;
    padding-top:.4rem;
.contents{
        width: 89%;
        height: 1.4rem;
        background-color: #fff;
        border-radius: 10px;
        margin: 0px auto 10px;
        padding:0 10px;
        .content{
            height: 33%;
            line-height: .45rem;
            display:flex;
            align-items: center;
            span{
                width: 23%;
                font-size: 13px;
                color:rgb(70, 70, 70);
            }
            p{
                width:77%;
                border-bottom:.5px solid rgb(216, 216, 216);
                input{
                    outline: none;
                    border: none;
                }
            }
        }
        .one{
            border-top:.5px solid rgb(216, 216, 216);
            p{
                border-bottom:none;
                textarea{
                    outline: none;
                    border: none;
                    width: 2.5rem;
                    margin-top:14px;
                }
            }
        }
    }
}
</style>