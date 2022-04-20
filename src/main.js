import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import requests from './basejs/new-axios'  
import VueAMap from 'vue-amap'
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '4ecd56d701273d42c6811cfdc0b7187d',
  plugin: ['AMap.Autocomplete',
   'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
Vue.config.productionTip = false
Vue.use(ElementUI);

 
Vue.prototype.rq = requests 
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
