// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
Vue.config.productionTip = false
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import axios from 'axios'
Vue.prototype.$http = axios
import 'font-awesome/css/font-awesome.css'
//import main from './components/home.vue'
Vue.use(iView);
Vue.config.productionTip = false
import VideoPlayer from 'vue-video-player' 
//import 'videojs-flash'
Vue.use(VideoPlayer) 
//require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import VideoPlayer from 'vue-video-player' 
import 'videojs-flash'
Vue.use(VideoPlayer) 
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import 'vue-video-player/src/custom-theme.css'
window.eventBus = new Vue();
import 'babel-polyfill'

window.eventBus = new Vue();
import 'babel-polyfill'
//require('video.js/distideo-js.css')
//require('video.js/dist/lang/ba')
//require('videojs-flash')
//require('videojs-hotkeys')
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})