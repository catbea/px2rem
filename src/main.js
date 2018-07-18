// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.config.productionTip = false

Vue.prototype.$axios = axios
//添加全局token
Vue.prototype.$axios.defaults.headers['authorization'] = "my token";

//添加全局拦截
Vue.prototype.$axios.interceptors.response.use(function (response) {
  let rps = response.data;
  //假设token失效 返回的code是401
  console.log(rps);
  if(rps.ret == 401){
    //具体的处理代码写在此处

  }
  return response;
}, function (err) {
  console.log(err);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
