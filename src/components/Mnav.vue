<!--
 * @Descripttion: ""
 * @version: v1.0.0
 * @Author: mac
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-05 16:55:01
 -->
<template>
    <div class="box"> 
       <div class="boxqqq">
            <ul>
              <li  v-for = "(item,index) in items"  
                   @click='order_select(index,item.name)'
                   :key=index><span :class = "{mag:curIndex == index}">{{item.name}}</span>
                   
              </li>
          </ul>
       </div>
       <div class="contentBox">
           <Mordersection :typename="currtype"></Mordersection>
       </div>
    </div>
</template>

<script>
import Mordersection from '../components/Mordersection'
export default {
  name: 'Mlogintop',
//   mac : currtype,
  data () {
    return {
      target:'',
      dindans:[],
      items:[
        // {name:"全部"},
        {name:"待付款"},
        {name:"待发货"},
        {name:"待收货"},
        {name:"已完成"}
      ],
      shuxin:[],
      curIndex:0,
      currtype:''
    }
  },
    components:{
      Mordersection
  },
    created(){
       this.target = new Date().toLocaleString(); //获取目标时间戳
       
//     fetch('http://localhost:3000/dindan')
//       .then(res=>{
//         return res.json();
//       })
//       .then(data=>{
//           console.log(data);
//           this.dindans=data;
//         //   this.currtype=this.dindans[1].name
//          this.shuxin=this.getBooksByType(this.dindans,typename)
//          console.log(this.shuxin+'-----------------')
//      })
//      .catch(err=>{
//        console.log(err);
//      })
  },
  methods:{
      //后退按钮
    back(){
      this.$router.go(-1);
    },
    order_select(index,typename){
    // 将点击的元素的索引赋值给变量
          console.log(typename+'--------------');
         this.curIndex = index
         console.log(this.curIndex)
         this.currtype = typename;
          console.log(this.currtype+'-------sdsdsa-------');
    },
    // getBooksByType(data){//根据类型获取数据
    //      let arr=[];
    //      for(let i in data){
    //          if(data[i].type==typename){
    //              arr.push(data[i]);
    //          }
    //      }
    //      return arr;
    //      console.log(arr+"-----------")
    //  }
    
  },
}
</script>

<style scoped lang="scss">
.box{
  margin-top:.9rem;
    .boxqqq{
      width: 100%;
      position: fixed;
      top: .4rem
    }
    .madasdasd{
      margin-top: .9rem
    } 
  }
ul{
    width: 100%;
    height: .4rem;
    background: white;
    display: flex;
    li{
        color: rgb(54, 54, 54);
        width: 25%;
        height: .4rem;
        text-align: center;
        line-height: .4rem;
        box-sizing: border-box;
        .mag{
            display: inline-block;
            border-bottom:3px solid #10e766;
            color:#10e766
        }
    }
    
} 
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
