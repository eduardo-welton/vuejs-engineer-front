import Vue from 'vue'
import App from './App.vue'
import BabelPolyfill from "babel-polyfill"
// require("babel-core/register");
// require("babel-polyfill");

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
