<!--
 * @Author: 郭涛
 * @Date: 2019-12-02 11:38:38
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-02 13:51:32
 * @Description: 
 -->
<template>
    <div id="box111">
        <a href="#shangping">商品</a>
        <a href="#pingjia">评价</a>
        <a href="#xiangqing">详情</a>
        <i class="el-icon-arrow-left" @click="back()"></i>
        <i class="el-icon-share"></i>
    </div>
</template>

<script>
export default {
    name:"Index",
    data () {
        return {
            types:[],
             currtype:""
        }
    },
    created(){

    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        back(){
          this.$router.go(-1);
        },
        handleScroll() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop >= 120) {
                document.querySelector('#box111').style.display = "block";
                document.querySelector('#box111').style.bottom = "10%";
            } else {
                document.querySelector('#box111').style.display = "none";
            }
        },
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    }
} 

</script>

<style scoped lang=scss>
  #box111{
      width: 100%;
      height: .5rem;
      background-color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      z-index:99;
      display: none;
      a{
          width: 20%; 
          float: left;
          height: .45rem;
          line-height: .55rem;
          display: block;
          text-align: center;
          position: relative;
          left: 20%;
      }
       .el-icon-share{
            position: absolute;
            top: .1rem;
            right: 0.1rem;
            font-size: .25rem;
            line-height: .33rem;
            color: #000;
        }
        .el-icon-arrow-left{
            position: absolute;
            top: .1rem;
            left: 0.1rem;
            font-size: .25rem;
            line-height: .33rem;
            color: #000;
        }
  }
</style>
