import {
    get,
    post,
    put,
    _delete
} from '@/plugins/axios'

class Article {
    // 创建文章
    async createArticle(article) {
        const res = await post('article', article)
        return res
    }

    // 获取所有文章
    async getArticles(params) {
        const res = await get('articles', params)
        return res
    }
    // 根据ID获取文章
    async getArticle(params) {
        const res = await get('article', params)
        return res
    }

    // 删除某篇文章
    async deleteArticle(id) {
        const res = await _delete(`article?id=${id}`)
        return res
    }

    // 设为公开 或 私密
    async updateArticlePublic(id, params) {
        const res = await put(`article/public?id=${id}`, params)
        return res
    }

    // 设为精选
    async updateArticleStar(id, params) {
        const res = await put(`article/star?id=${id}`, params)
        return res
    }

    // 获取该文章的所有评论
    async getComments(id) {
        const res = await get(`article/comment?articleId=${id}`)
        return res
    }

    // 删除某条评论
    async deleteComment(id) {
        const res = await _delete(`article/comment?id=${id}`)
        return res
    }

    // 获取某篇文章的内容
    async getContent(id) {
        const res = await get(`article/content?id=${id}`)
        return res
    }

    // 更新某篇文章
    async updateArticle(article) {
        const res = await put('article', article)
        return res
    }
}

export default new Article()
