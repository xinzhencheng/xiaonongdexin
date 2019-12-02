
<template>
  <div class="box">
      <footer>
           <ul>
            <li>
              <router-link to="/Index">
                <div :class="{'bianse':footerCls[0]}"  @touchstart="changeCls(0)">
                  <i class="el-icon-s-home"></i>
                  <span>首页</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/fenlei">
              <div :class="{'bianse':footerCls[1]}"  @touchstart="changeCls(1)">
                  <i class="el-icon-menu"></i>
                  <span>分类</span>
               </div>
              </router-link>
            </li>
            <li>
              <router-link to="/gouwuche">
              <div :class="{'bianse':footerCls[2]}"  @touchstart="changeCls(2)">
                  <i class="el-icon-shopping-cart-1 mac"></i>
                  <span class="spanhh">购物车</span>
               </div>
              </router-link>
            </li>
            <li>
              <router-link to="/MinePage">
              <div :class="{'bianse':footerCls[3]}"  @touchstart="changeCls(3)">
                  <i class="el-icon-user"></i>
                  <span>我的</span>
               </div>
              </router-link>
            </li>
        </ul> 
      </footer>
  </div>

</template>

<script>
export default {
 name: 'Footer',
    data() {
        return {
            foots: [],
            
        }
    },
    computed: {
        footerCls(){
            return this.$store.state.footerCls;
        }
    },
    methods:{
        changeCls(Index){
            this.$store.commit('changeFooterCls',Index)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
    height: .54rem;
    background: white;
    width: 100%;
    position: fixed;
    bottom: -4px;
    left: 0;
    border-top:1px solid #dddddd;
}
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
}
li{ 
    text-align: center;
    width: 33.33%
}
span{
    color: #999999
}
i{
  font-size: .25rem;
  color:#999999;
  display: block;
}
/* .mac{
    color: #fdb934;
}
.spanhh{
  color:#fdb934;
} */
.bianse span{
    
  color:#1acb61;
}
.bianse i{
  
  color:#1acb61;
}
</style>
