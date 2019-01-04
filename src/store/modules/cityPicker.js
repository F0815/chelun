import {cityList,constList} from '../../api/index';

const  state={
    //签发城市列表
    cityList:[],
    //补换城市列表
    cList:[],
    //选择签发城市
    city:[],
    //选择补发城市
    const:[]
}
const mutations={
    updateState(state,action){
         state = Object.assign(state, action);
    }
}
const actions = {
    // 获取签发城市列表
    async getCityList({commit}){
      let res = await cityList();
      res.data.forEach(item=>{
           item.list.forEach(value=>{
               delete value.list
           })
      })
      commit('updateState',{cityList:res.data})
    }
}
export  default {
    namespaced:true,
    state,
    actions,
    mutations
}