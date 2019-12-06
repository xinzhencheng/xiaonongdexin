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
                <p>{{shuiguoxinxi.istuijian}}</p>
                <p>{{shuiguoxinxi.ishaohuo}}</p>
                <p>{{shuiguoxinxi.isbaoyou}}</p>
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
        <el-tab-pane label="鲜蛋肉禽" class="shuiguo uls"><ul class="ul01">
            <li @click="changexiandan">全部</li>
            <li
              v-for="(xiandansort,index) in xiandansort"
              :key="index"
              @click="changexiandantype(xiandansort.type)"
            >{{xiandansort.name}}</li>
            <img src="../assets/ic_arrow_down.png" />
          </ul>

          <ul class="ul02">
            <li>综合</li>
            <li>价格</li>
            <li>销量</li>
          </ul>
          <div class="liebiao" v-for="(xiandanxinxi,index) in xiandanxinxi" :key="index">
            <div class="imgs">
              <img :src="xiandanxinxi.img01" />
            </div>
            <div class="lbright">
              <h1>{{xiandanxinxi.name}}</h1>
              <h2>{{xiandanxinxi.guige}}</h2>
              <div class="lbrP">
                <p>{{xiandanxinxi.istuijian}}</p>
                <p>{{xiandanxinxi.ishaohuo}}</p>
                <p>{{xiandanxinxi.isbaoyou}}</p>
              </div>
              <h3>￥{{xiandanxinxi.price}}.0</h3>
              <img :src="xiandanxinxi.img02" />
            </div>
          </div></el-tab-pane>
        <el-tab-pane label="粮油调味" class="shuiguo uls"><ul class="ul01">
            <li @click="changeliangyou">全部</li>
            <li
              v-for="(liangyousort,index) in liangyousort"
              :key="index"
              @click="changeliangyoutype(liangyousort.type)"
            >{{liangyousort.name}}</li>
            <img src="../assets/ic_arrow_down.png" />
          </ul>

          <ul class="ul02">
            <li>综合</li>
            <li>价格</li>
            <li>销量</li>
          </ul>
          <div class="liebiao" v-for="(liangyouxinxi,index) in liangyouxinxi" :key="index">
            <div class="imgs">
              <img :src="liangyouxinxi.img01" />
            </div>
            <div class="lbright">
              <h1>{{liangyouxinxi.name}}</h1>
              <h2>{{liangyouxinxi.guige}}</h2>
              <div class="lbrP">
                <p>{{liangyouxinxi.istuijian}}</p>
                <p>{{liangyouxinxi.ishaohuo}}</p>
                <p>{{liangyouxinxi.isbaoyou}}</p>
              </div>
              <h3>￥{{liangyouxinxi.price}}.0</h3>
              <img :src="liangyouxinxi.img02" />
            </div>
          </div></el-tab-pane>
        <el-tab-pane label="粮油调味" class="shuiguo uls"><ul class="ul01">
            <li @click="changeshanzhen">全部</li>
            <li
              v-for="(shanzhensort,index) in shanzhensort"
              :key="index"
              @click="changeshanzhentype(shanzhensort.type)"
            >{{shanzhensort.name}}</li>
            <img src="../assets/ic_arrow_down.png" />
          </ul>

          <ul class="ul02">
            <li>综合</li>
            <li>价格</li>
            <li>销量</li>
          </ul>
          <div class="liebiao" v-for="(shanzhenxinxi,index) in shanzhenxinxi" :key="index">
            <div class="imgs">
              <img :src="shanzhenxinxi.img01" />
            </div>
            <div class="lbright">
              <h1>{{shanzhenxinxi.name}}</h1>
              <h2>{{shanzhenxinxi.guige}}</h2>
              <div class="lbrP">
                <p>{{shanzhenxinxi.istuijian}}</p>
                <p>{{shanzhenxinxi.ishaohuo}}</p>
                <p>{{shanzhenxinxi.isbaoyou}}</p>
              </div>
              <h3>￥{{shanzhenxinxi.price}}.0</h3>
              <img :src="shanzhenxinxi.img02" />
            </div>
          </div></el-tab-pane>
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
      shucaixinxi: [],
      
      xiandan: {},
      xiandansort: {},
      xiandanxinxi: [],
      
      liangyou: {},
      liangyousort: {},
      liangyouxinxi: [],
      
      shanzhen: {},
      shanzhensort: {},
      shanzhenxinxi: []
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
        //水果
        this.shuiguo = this.shopplist.shuiguo;
        this.shuiguosort = this.shuiguo[0].sort;
        let shuiguoxinxiA = this.shuiguo.slice(1, this.shuiguo.length);
        this.shuiguoxinxi = shuiguoxinxiA;
        //蔬菜
        this.shucai = this.shopplist.shucai;
        this.shucaisort = this.shucai[0].sort;
        let shucaixinxiA = this.shucai.slice(1, this.shucai.length);
        this.shucaixinxi = shucaixinxiA;
        //蛋肉
        this.xiandan = this.shopplist.xiandan;
        this.xiandansort = this.xiandan[0].sort;
        let xiandanxinxiA = this.xiandan.slice(1, this.xiandan.length);
        this.xiandanxinxi = xiandanxinxiA;
        //粮油
        this.liangyou = this.shopplist.liangyou;
        this.liangyousort = this.liangyou[0].sort;
        let liangyouxinxiA = this.liangyou.slice(1, this.liangyou.length);
        this.liangyouxinxi = liangyouxinxiA;
        //山珍
        this.shanzhen = this.shopplist.shanzhen;
        this.shanzhensort = this.shanzhen[0].sort;
        let shanzhenxinxiA = this.shanzhen.slice(1, this.shuiguo.length);
        this.shanzhenxinxi = shanzhenxinxiA;
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
    //鲜蛋页面初次加载渲染

    changexiandan() {
      axios
        .get("http://localhost:3000/shopplist")
        .then(res => {
          this.shopplist = res.data[0];
          this.xiandan = this.shopplist.xiandan;

          this.xiandansort = this.xiandan[0].sort;

          let xiandanxinxiA = this.xiandan.slice(1, this.xiandan.length);

          this.xiandanxinxi = xiandanxinxiA;
        })

        .catch(err => {
          console.log(err);
        });
    },
    
     //粮油页面初次加载渲染

    changeliangyou() {
      axios
        .get("http://localhost:3000/shopplist")
        .then(res => {
          this.shopplist = res.data[0];
          this.liangyou = this.shopplist.liangyou;

          this.liangyousort = this.liangyou[0].sort;

          let liangyouxinxiA = this.liangyou.slice(1, this.liangyou.length);

          this.liangyouxinxi = liangyouxinxiA;
        })

        .catch(err => {
          console.log(err);
        });
    },
     //粮油页面初次加载渲染

    changeshanzhen() {
      axios
        .get("http://localhost:3000/shopplist")
        .then(res => {
          this.shopplist = res.data[0];
          this.shanzhen = this.shopplist.shanzhen;

          this.shanzhensort = this.shanzhen[0].sort;

          let shanzhenxinxiA = this.shanzhen.slice(1, this.shanzhen.length);

          this.shanzhenxinxi = shanzhenxinxiA;
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
    },
  	//鲜蛋不同类型页面加载渲染

    changexiandantype(typename) {
      axios
        .get("http://localhost:3000/shopplist")
        .then(res => {
          this.shopplist = res.data[0];
          this.xiandan = this.shopplist.xiandan;

          this.xiandansort = this.xiandan[0].sort;

          let xiandanxinxiA = this.xiandan.slice(1, this.xiandan.length);

          this.xiandanxinxi = xiandanxinxiA;
          let arr = [];
          for (let i = 0; i < this.xiandanxinxi.length; i++) {
            if (this.xiandanxinxi[i].type02 == typename) {
              arr.push(this.xiandanxinxi[i]);
            }
          }
          return (this.xiandanxinxi = arr);
        })

        .catch(err => {});
    },
  	//粮油不同类型页面加载渲染

    changeliangyoutype(typename) {
      axios
        .get("http://localhost:3000/shopplist")
        .then(res => {
          this.shopplist = res.data[0];
          this.liangyou = this.shopplist.liangyou;

          this.liangyousort = this.liangyou[0].sort;

          let liangyouxinxiA = this.liangyou.slice(1, this.liangyou.length);

          this.liangyouxinxi = liangyouxinxiA;
          let arr = [];
          for (let i = 0; i < this.xiandanxinxi.length; i++) {
            if (this.liangyouxinxi[i].type02 == typename) {
              arr.push(this.liangyouxinxi[i]);
            }
          }
          return (this.xiandanxinxi = arr);
        })

        .catch(err => {});
    },
    //山珍不同类型页面加载渲染

    changeshanzhentype(typename) {
      axios
        .get("http://localhost:3000/shopplist")
        .then(res => {
          this.shopplist = res.data[0];
          this.shanzhen = this.shopplist.shanzhen;

          this.shanzhensort = this.shanzhen[0].sort;

          let shanzhenxinxiA = this.shanzhen.slice(1, this.shanzhen.length);

          this.shanzhenxinxi = shanzhenxinxiA;
          let arr = [];
          for (let i = 0; i < this.shanzhenxinxi.length; i++) {
            if (this.shanzhenxinxi[i].type02 == typename) {
              arr.push(this.shanzhenxinxi[i]);
            }
          }
          return (this.shanzhenxinxi = arr);
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