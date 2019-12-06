<!--
 * @Author: 安菲
 * @Date: 2019-11-28 19:53:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-06 16:30:07
 * @Description: 
 -->
<template>
<div class="waibox">
    <div class="contents">
        <div class="content">
            <span>收件人</span>
            <p>
                <input type="text" placeholder="请输入收件人姓名"  v-model="people">
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
                <input type="text" placeholder="请输入联系电话" v-model="phone">
            </p>
        </div>
    </div>
    <div class="contents">
         <li>
             <div class="left">
                 <span>所在地区</span>
             </div>
             <div class="right r">
                 <div class="city" @click="toAddress" id="Area">{{city}}</div>
                 <i class="arrow-r"> </i>
             </div>
         </li>
         <v-distpicker type="mobile" @selected='selected' v-show="addInp">
         </v-distpicker>
         <div class="mask" v-show="mask"></div>
        <div class="content one">
            <span>详细地址</span>
            <p>
                <textarea placeholder="详细地址如道路、门牌号、小区、楼栋号、单元室等" v-model="xiangxidizhi"> </textarea>
            </p>
        </div>
    </div>
    <div class="moren">
        设为默认地址
        <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#c0c4cc">
        </el-switch>
    </div>
    <div class="pass" @click="ADD">
        保存地址
    </div>
</div>
</template>
<script>
import axios from 'axios';
import VDistpicker from 'v-distpicker'
export default {
    components: { VDistpicker },
    name:"AnewaddressHea",
    data (){
        return {
            radio: '1',
            value: true,
            city:'请选择',
            addInp :false,
            mask:false,
            people:"",
            phone:"",
            xiangxidizhi:""
        }
    },
    methods:{
    back(){
        this.$router.go(-1);
    },
    // 点击弹出三级联动
    toAddress(){
        this.mask = !this.mask;
        this.addInp = !this.addInp ;
    },  
    // 省市区三级联动
    selected(data){
        this.mask =false;
        this.addInp = false;
        this.city = data.province.value + ' ' + data.city.value +' ' + data.area.value
        },
    ADD(){
        
			 fetch('http://localhost:3000/addresss',{
               
                method:"post",
                 headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                      },
           body:'people'+'='+this.people+'&'+'phone'+'='+this.phone+'&'+'sex'+'='+this.radio+'&'+'Area'+'='+this.city+'&'+'xiangxidizhi'+'='+this.xiangxidizhi
                
            })
            .then(res=>{
                return res.json();
            })
            .then(data=>{
				 console.log(data)
                if(data!=null){
                    console.log("成功")
                }else{
                alert("添加失败");
            }
            })
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
        li{
            height: .45rem;
            display:flex;
            align-items: center;
            justify-content: space-between;
            font-size: 13px;
            color:rgb(70, 70, 70);
        }
        .content{
            height: 33%;
            line-height: .4rem;
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
    .moren{
        width: 89%;
        height: .4rem;
        background-color: #fff;
        border-radius: 10px;
        margin: 0px auto 10px;
        padding:0 10px;
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
    .pass{
        width:40%;
        height: .45rem;
        margin: .3rem auto;
        background-color: rgb(4, 184, 19);
        text-align: center;
        line-height: .45rem;
        color: #fff;
        border-radius: 25px;
        font-size:16px;
    }
}
.distpicker-address-wrapper{
    z-index: 11;
    background-color: #fff;
    position: absolute;
    width:3.4rem;
}
</style>