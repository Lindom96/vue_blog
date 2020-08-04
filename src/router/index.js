import Vue from 'vue'
import Router from 'vue-router'

import Admin from '@/views/Admin'
import homeRouter from './home-router'
import Login from '@/views/Login/login'
import Home from '@/views/Home'
import ErrorPage from '@/views/ErrorPage/404'
import routes from './routes'
import appConfig from '@/config/index'
import store from '../store'
// 判断是否需要登录访问
let isLoginRequired = (routeName) => {
    let {
        notLoginRoute
    } = appConfig
    const notLoginMark = {}

    // 构建标记对象
    if (Array.isArray(notLoginRoute)) {
        for (let i = 0; i < notLoginRoute.length; i += 1) {
            notLoginMark[notLoginRoute[i].toString()] = true
        }
    }

    notLoginRoute = null // 释放内存
    // 重写初始化函数
    isLoginRequired = (name) => {
        if (!name) {
            return true
        }
        // 处理 Symbol 类型
        const target = (typeof name === 'symbol') ? name.description : name
        return !(notLoginMark[target])
    }

    return isLoginRequired(routeName)
}

Vue.use(Router)
// let routes = [{
//         path: '',
//         redirect: '/home' //重定向路径(设置默认路径)
//     }, {
//         path: '/home',
//         name: 'home',
//         hidden: true,
//         meta: {
//             title: 'home'
//         },
//         component: Home
//     },
//     {
//         path: '/404',
//         component: ErrorPage,
//         hidden: true
//     },
//     {
//         path: '/login',
//         name: 'login',
//         hidden: true,
//         meta: {
//             title: 'login'
//         },
//         component: Login
//     }, {
//         path: '/admin',
//         name: 'Admin',
//         redirect: '/about',
//         component: Admin,
//         children: [
//             ...homeRouter
//         ]
//     }
// ]
const router = new Router({
    routes: routes,
    mode: 'history',
    linkActiveClass: 'active'
});

// router.beforeEach((to, from, next) => {

//     if (isLoginRequired(to.name) && !store.state.login) {
//         next({
//             path: '/login'
//         })
//         return
//     }

//     if (to.meta.title) {
//         document.title = to.meta.title
//     }

//     next()
// })
export default router
