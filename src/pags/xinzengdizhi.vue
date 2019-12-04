<!--
 * @Author: 张腾
 * @Date: 2019-12-02 09:47:47
 * @LastEditors: 张腾
 * @LastEditTime: 2019-12-02 11:45:17
 * @Description: 
 -->
<template>
  <div>
    <header>
      <img src="../assets/ic_back.png" /> 新增地址
    </header>
    <div class="box">
      <div class="name">
        收件人
        <input type="text" placeholder="请输入收件人姓名"  />
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>

header {
  background: white;
  margin-top: 0.1rem;
  text-align: center;
  font-size: 0.18rem;
  padding-bottom: 0.3rem;
  img {
    float: left;
    width: 0.11rem;
    margin-left: 0.1rem;
  }
}
.box{
    width: 90%;
    margin: 0  auto;    
.name {
    color: #5d5d5d;
    background: white;
    margin-top: .1rem;
    font-size: .18rem;
    line-height: .5rem;
  input {
    font-size: .16rem;
      margin-left: .2rem;
      width: 70%;
    outline: none;
    border: none;
  }
}
}

</style>