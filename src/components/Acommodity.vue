<!--
 * @Author: 安菲
 * @Date: 2019-11-26 10:16:18
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-26 22:05:10
 * @Description: 
 -->
<template>
<div class="waibox">
    <ul>
        <li>
            <div class="title">
                <div class="check">
                    <input type="checkbox" name="" id="">
                </div> 
                <span>sshuhu</span>
            </div>
            <div class="food">
                <div class="check">
                    <input type="checkbox" name="" id="">
                </div>
                <div class="img">
                    <img src="" alt="">
                </div>
                <div class="add">
                    <p>岩阿宝经审查</p>
                    <span>火花塞不好</span>
                    <div class="Add">
                        <span>￥655</span>
                        <div class="jj">
                            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="title">
                <div class="check">
                    <input type="checkbox" name="" id="">
                </div> 
                <span>sshuhu</span>
            </div>
            <div class="food">
                <div class="check">
                    <input type="checkbox" name="" id="">
                </div>
                <div class="img">
                    <img src="" alt="">
                </div>
                <div class="add">
                    <p>岩阿宝经审查</p>
                    <span>火花塞不好</span>
                    <div class="Add">
                        <span>￥655</span>
                        <div class="jj">
                            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <div class="ADD">
        <div class="check">
            <input type="checkbox" name="" id="">
            <span>全选</span> 
        </div> 
    </div>
</div>
</template>
<script>
export default {
    name:"Acommodity",
    data (){
        return {
           num: 1
        };
    },
    methods: {
      handleChange(value) {
      }
    }
  }

</script>

<style lang="scss" scoped="" type="text/css"> 
.waibox{
    width: 100%;
    margin-top: .55rem;
}
ul li{
    width: 93%;
    height: 1.6rem;
    margin: 12px auto;
    border-radius: 7px;
    background-color: #fff;
}
.title{
    width: 100%;
    height: .4rem;
    display: flex;
    align-items: center;
   
}
input[type="checkbox"]{
    display: inline-block;
    width: .22rem;
    height: .22rem;
    margin: 0 9px;
    appearance: none; // 改变元素外观
    background: #fff;
    border-radius: 50%;
    border: .35px solid rgb(175, 175, 175);
    outline: none;
}
input[type="checkbox"]:checked{ // 复选框选中的样式 使用带有对号的 背景图片打底
    background: url("../assets/imgs/eglass-check.png") no-repeat;
    background-size: 100% 100%;
    border: none;
}
.food{
    width: 100%;
    height: 1.2rem;
    display: flex;
    align-items: center;
    // background-color: rgb(165, 195, 231);
    .img{
        width: .95rem;
        height: .95rem;
        background-color: rgb(86, 202, 119);
    }
    .add{
        width: 2rem;
        height: .95rem;
        margin: 0 auto;
        p{
            font-size: .16rem;
            margin-bottom:10px; 
        }
        span{
            color: rgb(159, 159, 159);
            font-size: .12rem;
        }
        .Add{
            display: flex;
            height: .45rem;
            align-items:flex-end;
            justify-content:space-between;
            span{
                color: rgb(255, 129, 11);
                font-size:.18rem;
            }
            .jj{
                outline: none;
                .el-input-number{
                    width: 120px;
                    height: 38px;
                    outline: none;
                }
            }
        }
    }
}
.ADD{
    width: 100%;
    height: .5rem;
    display: flex;
    align-items: center;
    background-color: #fff;
    span{
        line-height: .12rem;
    }
}
</style>
