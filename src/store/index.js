/*
 * @Author: 安菲
 * @Date: 2019-11-28 15:25:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-02 23:27:08
 * @Description: 
 */
import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        
    },
    mutations:{
        add(state){
            // state.count++;
        }
    }
})


export default store;