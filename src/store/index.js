/*
 * @Author: CoolWind
 * @Date: 2019-11-07 19:29:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-06 09:52:19
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
        jie1:[]
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
            console.log(state.jie1);
        }
    },
    actions: {//有异步请求，异步请求完成后，提交mutations

    }
})

