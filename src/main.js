import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
import './assets/css/goo.css'

import router from './router'
import store from './store'
// 国际化
import i18n from './lang'


import {
    Alert,
    Icon,
    Button,
    Modal,
    Message,
    Row,
    Col,
    Layout,
    Header,
    Sider,
    Content,
    Footer,
    Input,
    Table,
    Page,
    Select,
    Option,
    Divider,
    Card,
    Switch,
    Form,
    Radio,
    FormItem,
    BackTop
} from 'view-design';
import 'view-design/dist/styles/iview.css';
import '@fortawesome/fontawesome-free/css/all.css';

//Install ElementUI
Vue.use(ElementUI)
//Install ViewUI
Vue.component('Modal', Modal);
Vue.component('Button', Button);
Vue.component('Icon', Icon);
Vue.component('Alert', Alert);
Vue.component('Message', Message);
Vue.component('Input', Input);
Vue.component('Table', Table);
Vue.component('Select', Select);
Vue.component('i-switch', Switch);
Vue.component('Option', Option);
Vue.component('Page', Page);
Vue.component('Card', Card);
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('Layout', Layout);
Vue.component('Header', Header);
Vue.component('Sider', Sider);
Vue.component('Content', Content);
Vue.component('Footer', Footer);
Vue.component('Divider', Divider);
Vue.component('Form', Form);
Vue.component('Radio', Radio);
Vue.component('FormItem', FormItem);
Vue.component('BackTop',BackTop);
Vue.config.productionTip = false


new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app')
