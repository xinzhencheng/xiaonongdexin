<!--
 * @Author: 司娟
 * @Date: 2019-11-26 10:25:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-06 17:59:08
 * @Description: file content
 -->
<template>
  <div class="box">
       <span class="heji"> 合计金额：</span>
       <span class="money">￥{{zong}}</span>
       <em @click="sub">提交订单</em>
  </div>
</template>

<script>
export default {
  name: 'Sqbottom',
  data () {
    return {
      xiaoji:this.$store.state.jie1[2],
      zong:this.$store.state.jie1[1]
    }
  },
  methods:{

      sub(){
        this.$router.push({path:"/Paypage"});
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
.box{
  width: 100%;
  height: .52rem;
  line-height: .52rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: #ffffff;
  display: flex;
  .heji{
      font-size: .15rem;
      color: #666666;
      margin-left: 1.4rem;
  }
  .money{
    color: #fc8600;
  }
  em{
    display: inline-block;
    width: 1.06rem;
    height: .39rem;
    background: #fd8f09;
    border-radius: .2rem;
    color: white;
    font-size: .13rem;
    text-align: center;
    margin-top: .06rem;
    line-height: .39rem;
    margin-left: .10rem;
    margin-right: .05rem;
  }
}
</style>
