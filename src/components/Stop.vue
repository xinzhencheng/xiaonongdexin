<!--
 * @Author: 司娟
 * @Date: 2019-11-28 14:31:02
 * @LastEditors: 司娟
 * @LastEditTime: 2019-12-06 11:55:30
 * @Description: file content
 -->
<template>
  <div class="box">
    <div class="top">
        <div class="sousuo">
            <img src="../assets/img/ic_search.png" alt="">
            <input type="text" v-model="input1" placeholder="搜索">
        </div>
        <div class="nav">
            <span @click="search">综合</span>
            <span @click="search">价格<img src="../assets/img/ic_choose_none.png" alt=""></span>
            <span @click="search">销量</span>
            <span @click="search">地区<img src="../assets/img/ic_down_arrow.png" alt=""></span>
        </div> 
    </div>
  </div>
</template>

<script>

export default {
  name: 'Back',
  data () {
    return {
        input1:"", 
    }
  },
  methods:{
      back(){
          this.$router.go(-1);
      },
      search(){
          this.$emit('changemsg',this.input1)
      }     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
.box{
    width: 100%;
    .top{
        width: 100%;
        height: .94rem;
        position: fixed;
        left: 0;
        top: .68rem;
        z-index:1;
        .sousuo{
            height: .47rem;
            background: #ffffff;
            position: relative;
            padding-top: .09rem;
            img{
                width: .13rem;
                height:.13rem;
                position: absolute;
                left: .25rem;
                top: .23rem;
            }
            input{
                width: 85%;
                height: .38rem;
                background: #e0e0e0;
                border: 0;
                outline: 0;
                margin-left: 3%;
                border-radius: .18rem;
                padding-left: 9%;
            }
        }
        .nav{
            height:.37rem;
            background: #f9f9f9;
            line-height: .37rem;
            display: flex;
            justify-content: space-around;
            span{
                color: #666666;
                font-size: .14rem;
                img{
                    width: .1rem;
                    margin-left: .05rem;
                }
            }
        }
    }
}

</style>