<!--
 * @Author: 司娟
 * @Date: 2019-11-26 10:25:43
 * @LastEditors: 司娟
 * @LastEditTime: 2019-11-27 21:14:14
 * @Description: file content
 -->
<template>
  <div class="box">
       <span class="heji">合计金额：</span>
       <span class="money">￥111.10</span>
       <em>提交订单</em>
  </div>
</template>

<script>
export default {
  name: 'Sqbottom',
  data () {
    return {
      
    }
  },
  methods:{
      
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
  .heji{
      font-size: .15rem;
      color: #666666;
      margin-left: 1.10rem;
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