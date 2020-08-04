import axios from 'axios'

export function login(userInfo) {
    return axios.post('admin/user', userInfo)
}

export function userInfo() {
    return axios.get('admin/user/getInfo')
}

export function logout() {
    return axios.post('admin/login/logout')
}
