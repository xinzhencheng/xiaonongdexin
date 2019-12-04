<!--
 * @Author: 张腾
 * @Date: 2019-11-26 10:19:58
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-04 17:53:55
 * @Description: 
 -->

<template>
  <div>
    <header>分类</header>
    <gFooter></gFooter>

    <div class="navleft">
      <el-tabs :tab-position="tabPosition" style="height: 100%;">
        <el-tab-pane label="新鲜水果" class="shuiguo uls">
          <ul class="ul01">
            <li @click="changeshuiguo">全部</li>
            <li
              v-for="(shuiguosort,index) in shuiguosort"
              :key="index"
              @click="changeshuiguotype(shuiguosort.type)"
            >{{shuiguosort.name}}</li>
            <img src="../assets/ic_arrow_down.png" />
          </ul>

          <ul class="ul02">
            <li>综合</li>
            <li>价格</li>
            <li>销量</li>
          </ul>
          <div class="liebiao" v-for="(shuiguoxinxi,index) in shuiguoxinxi" :key="index">
            <div class="imgs">
              <img :src="shuiguoxinxi.img01" />
            </div>
            <div class="lbright">
              <h1>{{shuiguoxinxi.name}}</h1>
              <h2>{{shuiguoxinxi.guige}}</h2>
              <div class="lbrP">
                <p v-bind:style="istuijian">{{shuiguoxinxi.istuijian}}</p>
                <p v-bind:style="ishaohuo">{{shuiguoxinxi.ishaohuo}}</p>
                <p v-bind:style="isbaoyou">{{shuiguoxinxi.isbaoyou}}</p>
              </div>
              <h3>￥{{shuiguoxinxi.price}}.0</h3>
              <img :src="shuiguoxinxi.img02" />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="时令蔬菜" class="shuiguo uls">
          <ul class="ul01">
            <li @click="changeshucai">全部</li>
            <li
              v-for="(shucaisort,index) in shucaisort"
              :key="index"
              @click="changeshucaitype(shucaisort.type)"
            >{{shucaisort.name}}</li>
            <img src="../assets/ic_arrow_down.png" />
          </ul>

          <ul class="ul02">
            <li>综合</li>
            <li>价格</li>
            <li>销量</li>
          </ul>
          <div class="liebiao" v-for="(shucaixinxi,index) in shucaixinxi" :key="index">
            <div class="imgs">
              <img :src="shucaixinxi.img01" />
            </div>
            <div class="lbright">
              <h1>{{shucaixinxi.name}}</h1>
              <h2>{{shucaixinxi.guige}}</h2>
              <div class="lbrP">
                <p>{{shucaixinxi.istuijian}}</p>
                <p>{{shucaixinxi.ishaohuo}}</p>
                <p>{{shucaixinxi.isbaoyou}}</p>
              </div>
              <h3>￥{{shucaixinxi.price}}.0</h3>
              <img :src="shucaixinxi.img02" />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="鲜蛋肉禽" class="shuiguo uls">角色管理</el-tab-pane>
        <el-tab-pane label="粮油调味" class="shuiguo uls">定时任务补偿</el-tab-pane>
        <el-tab-pane label="粮油调味" class="shuiguo uls">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>

    <div class="rigte">
      <div class="navtop"></div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import gFooter from '../components/gFooter';

export default {
  data() {
    return {
      tabPosition: "left",
      shuiguo: [],
      shuiguosort: {},
      shuiguoxinxi: [],
      shucai: {},
      shucaisort: {},
      istuijian: 'color:"#e0a94f";border: "1px solid #e0a94f"',
      ishaohuo: 'color:"#68d68e";border: "1px solid #68d68e"',
      isbaoyou: 'color:"#ffa387";border: "1px solid #ffa387"',

      shucaixinxi: []
    };
  },
   components:{
    gFooter
  },
  //页面初次加载发送请求
  created() {
    console.log(this.istuijian + "11111111");
    axios
      .get("http://localhost:3000/shopplist")
      .then(res => {
        this.shopplist = res.data[0];
        this.shuiguo = this.shopplist.shuiguo;
        this.shuiguosort = this.shuiguo[0].sort;

        let shuiguoxinxiA = this.shuiguo.slice(1, this.shuiguo.length);

        this.shuiguoxinxi = shuiguoxinxiA;
      })

      .catch(err => {
        console.log(err);
      });
    axios
      .get("http://localhost:3000/shopplist")
      .then(res => {
        this.shopplist = res.data[0];

        this.shucai = this.shopplist.shucai;

        this.shucaisort = this.shucai[0].sort;
        this.shucaisort = this.shucai[0].sort;

        let shucaixinxiA = this.shucai.slice(1, this.shucai.length);

        this.shucaixinxi = shucaixinxiA;
      })

      .catch(err => {
        console.log(err);
      });
  },
  mounted() {},
  methods: {
    //水果页面初次加载渲染

    changeshuiguo() {
      axios
        .get("http://localhost:3000/shopplist")
        .then(res => {
          this.shopplist = res.data[0];
          this.shuiguo = this.shopplist.shuiguo;

          this.shuiguosort = this.shuiguo[0].sort;

          let shuiguoxinxiA = this.shuiguo.slice(1, this.shuiguo.length);

          this.shuiguoxinxi = shuiguoxinxiA;
        })

        .catch(err => {
          console.log(err);
        });
    },
    //蔬菜页面初次加载渲染

    changeshucai() {
      axios
        .get("http://localhost:3000/shopplist")
        .then(res => {
          this.shopplist = res.data[0];
          this.shucai = this.shopplist.shucai;

          this.shucaisort = this.shucai[0].sort;
          this.shucaisort = this.shucai[0].sort;

          let shucaixinxiA = this.shucai.slice(1, this.shucai.length);

          this.shucaixinxi = shucaixinxiA;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //s水果不同类型页面加载渲染

    changeshuiguotype(typename) {
      axios
        .get("http://localhost:3000/shopplist")
        .then(res => {
          this.shopplist = res.data[0];
          this.shuiguo = this.shopplist.shuiguo;

          this.shuiguosort = this.shuiguo[0].sort;

          let shuiguoxinxiA = this.shuiguo.slice(1, this.shuiguo.length);

          this.shuiguoxinxi = shuiguoxinxiA;
          let arr = [];
          for (let i = 0; i < this.shuiguoxinxi.length; i++) {
            if (this.shuiguoxinxi[i].type02 == typename) {
              arr.push(this.shuiguoxinxi[i]);
            }
          }
          return (this.shuiguoxinxi = arr);
        })

        .catch(err => {});
    },
    //蔬菜不同类型页面加载渲染

    changeshucaitype(typename) {
      axios
        .get("http://localhost:3000/shopplist")
        .then(res => {
          this.shopplist = res.data[0];
          this.shucai = this.shopplist.shucai;

          this.shucaisort = this.shucai[0].sort;

          let shucaixinxiA = this.shucai.slice(1, this.shucai.length);

          this.shucaixinxi = shucaixinxiA;
          let arr = [];
          for (let i = 0; i < this.shucaixinxi.length; i++) {
            if (this.shucaixinxi[i].type02 == typename) {
              arr.push(this.shucaixinxi[i]);
            }
          }
          return (this.shucaixinxi = arr);
        })

        .catch(err => {});
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  font-size: 0.13rem;
  text-align: center;
  background: #ffffff;
  color: #0d0d0d;
  height: 0.31rem;
  line-height: 0.31rem;
  border-bottom: 1px solid #eeeeee;
}

.uls {
  overflow: hidden;
  margin: 0 0.1rem;
  background: white;
  ul {
    border-bottom: 1px solid #eeeeee;
    float: left;
    width: 100%;
    overflow: hidden;
  }
  .ul01 {
    img {
      margin-top: 0.15rem;
      float: right;
      width: 0.15rem;
      margin-right: 0.03rem;
    }
  }
  .ul02 {
    li {
      width: 0.8rem;
      text-align: center;
    }
  }
  ul li {
    float: left;
    width: 0.55rem;
    height: 0.4rem;
    line-height: 0.4rem;
    /*text-align: center;*/
  }
}

.liebiao {
  .imgs {
    /*display: inline-block;*/
    margin-left: 2%;
    width: 40%;
    border-radius: 15px;
    float: left;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  width: 100%;
  display: inline-block;
  .lbright {
    width: 50%;
    position: relative;
    float: right;
    margin-left: 0.2rem;
    margin-top: 0.1rem;
    h1 {
      font-size: 0.13rem;
      font-weight: 400;
      width: 1.15rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    h2 {
      font-size: 0.11rem;
      font-weight: 400;
      color: #bababa;
      text-align: center;
      margin-top: 0.05rem;
      margin-bottom: 0.05rem;
    }
    h3 {
      margin-top: 0.05rem;
      font-size: 0.12rem;
      color: #fa7b00;
    }
    img {
      position: absolute;
      bottom: 0;
      right: 0.1rem;
      width: 0.19rem;
    }
    .lbrP {
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
      /*white-space: nowrap;*/
      height: 0.21rem;
      width: 2rem;
      p {
        font-size: 0.08rem;
        line-height: 0.19rem;
        text-align: center;
        /*color: #d8c48a;*/
        margin: 0 0.03rem;
      }
    }
  }
}
</style>