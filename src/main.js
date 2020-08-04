import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/goo.css'

import router from './router'
import store from './store'
// 国际化
import i18n from './lang'
//Install ElementUI
Vue.use(ElementUI)
Vue.config.productionTip = false


new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app')
