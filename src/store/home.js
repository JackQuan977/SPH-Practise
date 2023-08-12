import {reqCateGoryList} from '@/api'
//home模块的仓库
const state = {
  categoryList: []
};
//mutions是唯一修改state的地方
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  }
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
  // 通过api里面的接口函数调用，向服务器发请求获取服务器数据
  async categoryList({commit}) {
    let result = await reqCateGoryList()
    console.log(result)
    if (result.code == 200) {
      commit('CATEGORYLIST', result.data)
    }
  }
};
//计算属性
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
