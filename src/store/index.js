/*
 * @Author: CoolWind
 * @Date: 2019-11-07 19:29:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-07 15:02:04
 * @Description:
 */
import Vue from 'vue'
import VueX from 'vueX'


Vue.use(VueX)

export default new VueX.Store({
    state: {//存储数据
        footerCls: [
            true,
            false,
            false,
            false
        ],
        jie1:[],
        dizhi:
            {
            people:"马串串",
            phone:"17693248647",
            Area: "北京市 北京城区 东城区",
            xiangxidizhi: "朝阳六路293号"
            },
		maca:{

		}
    },
    mutations: {//跟踪状态
        changeFooterCls(state,index){
            // 合法性判断
            if(index<0 || index>state.footerCls.length-1){
                return;
            }
            state.footerCls.forEach((item,index,arr)=>{
                arr[index] = false;
            });
            state.footerCls[index] = true;
        },
        zou(state,jie){
            state.jie1=jie;
        },
        dizhi(state,zhi){
            state.dizhi=zhi;
            // console.log(state.dizhi);

        },
      macv(state,macb){
        state.maca=macb
        console.log(state.maca+'+++++++++++++++++++')
      }
    },
    actions: {//有异步请求，异步请求完成后，提交mutations

    }
})
