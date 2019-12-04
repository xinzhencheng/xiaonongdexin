<!--
 * @Descripttion: ""
 * @version: v1.0.0
 * @Author: mac
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-02 16:45:04
 -->
<template>
    <div class="box"> 
        <div style="display:none">{{typename}}</div>
        <!-- <div class="sect" v-for="(dindan,index) in dindans" :key="index">
            <div class="sectt"></div>
            <div class="sectop">
                <div class="sectleft">
                    <div class="sectleft_1">
                        <img src="../assets/ic_detail_shop.png" alt="">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span>{{dindan.shangname}}</span>
                    </div>
                    <div class="sectleft_2">
                        <p>订单号：<span>{{dindan.dingdanhao}}</span></p>
                    </div>
                </div>
                <div class="sectright">
                    <div class="sectright_1">   
                        <span>{{dindan.type}}</span><i class="el-icon-arrow-right"></i>
                    </div>
                    <div class="sectright_2">
                        <p>{{target}}下单</p>
                    </div>
                </div>
            </div>
            <div class="secmiddle">
                <ul>
                    <li class="lis"><img :src="dindan.img" alt=""></li>
                    <li class="liss">
                        <div class="macj">
                            <p class="masdsd">{{dindan.name}}</p>
                            <p class="dsadadasd">规格：{{dindan.guige}}</p>
                            <p class="madadsada"><span class="dasdadcxzc">￥{{dindan.danjia}}</span><span class="dvxfsdfsdfs">x{{dindan.shuliang}}</span></p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="secbuttom">
               <div class="sadadasd">
                     <span>共{{dindan.shuliang}}件商品</span>&nbsp;&nbsp; <span class="dasdsadsvxcvxca">合计:￥{{dindan.heji}}</span>
               </div>
               <button disabled="disabled" class="dsdasdsad">删除订单</button>
            </div>
        </div> -->
        <div class="sect" v-for="(dindan,index) in shuxin" :key="index">
            <div class="sectt"></div>
            <div class="sectop">
                <div class="sectleft">
                    <div class="sectleft_1">
                        <img src="../assets/ic_detail_shop.png" alt="">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span>{{dindan.shangname}}</span>
                    </div>
                    <div class="sectleft_2">
                        <p>订单号：<span>{{dindan.dingdanhao}}</span></p>
                    </div>
                </div>
                <div class="sectright">
                    <div class="sectright_1">   
                        <span>{{dindan.type}}</span><i class="el-icon-arrow-right"></i>
                    </div>
                    <div class="sectright_2">
                        <p>{{target}}下单</p>
                    </div>
                </div>
            </div>
            <div class="secmiddle">
                <ul>
                    <li class="lis"><img :src="dindan.img" alt=""></li>
                    <li class="liss">
                        <div class="macj">
                            <p class="masdsd">{{dindan.name}}</p>
                            <p class="dsadadasd">规格：{{dindan.guige}}</p>
                            <p class="madadsada"><span class="dasdadcxzc">￥{{dindan.danjia}}</span><span class="dvxfsdfsdfs">x{{dindan.shuliang}}</span></p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="secbuttom">
               <div class="sadadasd">
                    <span>共{{dindan.shuliang}}件商品</span>&nbsp;&nbsp; <span class="dasdsadsvxcvxca">合计:￥{{dindan.heji}}</span>
               </div>
               <button disabled="disabled" class="dsdasdsad">删除订单</button>
            </div>
            <!-- <div class="secbuttomasa"></div> -->
        </div>
    </div>  
</template>

<script>

export default {
  name: 'Mlogintop',
  props:['typename'],
  data () {
    return {
        target:'',
        dindans:[],
        shuxin:[],
           
    }
  },
   created(){
       this.target = new Date().toLocaleString(); //获取目标时间戳
    fetch('http://localhost:3000/dindan')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
          console.log(data);
         this.dindans=data;
         this.shuxin = this.getBooksByType(this.dindans);
         console.log(this.shuxin+'--------SDFSDF------')
     })
     .catch(err=>{
       console.log(err);
     })
  },
  beforeUpdate(){
      console.log("数据更新了------------：");         
      this.shuxin = this.getBooksByType(this.dindans);
  },
  methods:{
          getBooksByType(data){//根据类型获取数据
         let arr=[];
         for(let i in data){
             if(data[i].type==this.typename){
                 arr.push(data[i]);
             }
         }
         console.log(this.typename+'======')
         return arr;
         console.log(arr+"----CXCSDASD-------")
     }
      
  },
// created() {
//         this.target = new Date().toLocaleString(); //获取目标时间戳
//     }
}
</script>

<style scoped lang="scss">
    .sect{
        margin-top: .1rem;
        width: 93%;
        margin: 0 auto;
        border-radius: 20px;
        background: white;
        margin-bottom: .1rem;
        .sectt{
            width: 95%;
            height: .05rem;
        }
        .sectop{
            margin-top: .1rem;
            width: 96%;
            height: .55rem;
            margin-left: 4%;
            display: flex;
            .sectleft{
                width: 55%;
                height: 100%;
                .sectleft_1{
                    width: 100%;
                    height: 50%;
                   img{
                       margin-left: .1rem;
                        width: .2rem;
                        height: .2rem;
                        float: left;
                   }
                   span{
                       margin-top: .01rem;
                       margin-left: .05rem;
                       float: left;
                   }
                }
                .sectleft_2{
                    width: 100%;
                    height: 50%;
                    p{
                        font-size: 12px;
                        color: rgb(139, 138, 138)
                    }
                }
            }
            .sectright{
                width: 42%;
                height: 100%;
                .sectright_1{
                    width: 100%;
                    height: 50%;
                    display: flex;
                    justify-content: flex-end;
                    span{
                         color: #f36320   
                    }
                    i{
                            font-size: 18px;
                            display: inline-block;
                            margin-top: .01rem;
                         color: #f36320  
                        }
                    
                }
                .sectright_2{
                    width: 100%;
                    height: 50%;
                    font-size: 10px;
                    color: rgb(139, 138, 138);
                    display: flex;
                    justify-content: flex-end
                }
            }
        }
        .secmiddle{
            width: 96%;
            margin-left: 4%;
            ul{
                width: 100%;
                height: 100%;
                display: flex;
                background: rgb(241, 241, 241);
                   .lis{
                width: 29%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
            .liss{
                width: 68%;
                height: 100%;
                margin-top: .1rem;
                .macj{
                    width: 96%;
                    height: 72%;
                    margin-top: .1rem;
                    margin-left: 5%;
                    .masdsd{
                        font-size: 17px
                    }
                    .madadsada{
                        font-size: 16px;
                        display: flex;
                        justify-content: space-between;
                        .dasdadcxzc{
                            color: #f36320;
                        }
                        .dvxfsdfsdfs{
                            color: rgb(39, 39, 39);
                        }
                        
                    }
                    .dsadadasd{
                        color: rgb(133, 133, 133);
                    }
                    p{
                        margin-top: .07rem
                    }
                }
            }
            }
        }
        .secbuttom{
            width: 96%;
            height: .75rem;
            margin: 0 auto;
            margin-top: .15rem;
            .sadadasd{
            display: flex;
            justify-content: flex-end;
                span{
                    height: .3rem;
                    font-size: 16px;
                }
                .dasdsadsvxcvxca{
                    margin-right: .1rem
                }
            }
            .dsdasdsad{
                width: .8rem;
                height: .28rem;
                float: right;
                margin-right: .1rem;
                background: white;
                border-radius: 20px;
                border:1px solid rgb(110, 110, 110)
            }
            
        }
        // .secbuttomasa{
        //     height: .15rem;
        // }
    }
</style>
