<!--
 * @Author: 张腾
 * @Date: 2019-12-02 09:47:47
 * @LastEditors: 张腾
 * @LastEditTime: 2019-12-02 17:27:02
 * @Description: 
 -->
<template>
  <div>
    <header>
      <img src="../assets/ic_back.png" /> 收获地址
    </header>

    <div class="buttonAdd">
      <div>
        <button>
          <span class="el-icon-circle-plus-outline"></span> 新增地址
        </button>
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
.buttonAdd {
    margin-top: .5rem;
      background-color: white;
  div {
    width: 1.2rem;
    margin: 0 auto;
    line-height: 0.75rem;
    color: #11bc56;

    button {
      outline:none;
      span {
        font-size: 0.19rem;
        margin-right: 0.1rem;
      }
      border: none;
      font-size: 0.19rem;
      color: #11bc56;
      background-color: white;
    }
  }
}
</style>