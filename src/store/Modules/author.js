import {
    post,
    get,
    put,
    _delete
} from '@/plugins/axios'
import {
    saveTokens,
    saveAccessToken
} from '@/utils/cookie'

export default class Author {
    
    static async signIn(name, password) {
        const tokens = await post('admin/login', {
            name,
            password
        })
        // saveTokens(tokens.accessToken, tokens.refreshToken)
        return tokens
    }

    static async getToken(name, password) {
        const tokens = await post('admin/login', {
            name,
            password
        })
        // saveTokens(tokens.accessToken, tokens.refreshToken)
        return tokens
    }

    // 刷新令牌
    static async getRefreshToken() {
        const res = await get('author/refresh')
        saveAccessToken(res.accessToken)
    }

    // 获取某个作者的信息
    static async getAuthorInfo() {
        return await get('admin/author/info')
    }

    // 获取所有作者
    static async getAuthors() {
        return await get('admin/authors')
    }

    // 获取除了管理员之外的所有作者
    static async getAdminAuthors() {
        return await get('admin/authors/other')
    }

    // 创建作者
    static async createAuthor(author) {
        let res = await post('admin/author', author)
        return res
    }

    // 更新作者信息
    static async updateAuthor(author, id) {
        let res = await put(`admin/author/info?id=${id}`, author)
        return res
    }

    // 更换作者密码
    static async changePassword(password, id) {
        let res = await put(`admin/author/password?id=${id}`, password)
        return res
    }

    // 更换自己的密码
    static async changeSelfPassword(data) {
        let res = await put('admin/author/password/self', data)
        return res
    }

    // 删除作者
    static async deleteAuthor(id) {
        let res = await _delete(`admin/author?id=${id}`)
        return res
    }
}
