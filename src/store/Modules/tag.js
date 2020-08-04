import {
    get,
    post,
    put,
    _delete
} from '@/plugins/axios'

class Tag {
    async createTag(tag) {
        const res = await post('tag', tag)
        return res
    }

    // 获取所有标签
    async getTags() {
        const res = await get('tags')
        return res
    }

    // 更新标签
    async updateTag(id, tag) {
        const res = await put(`tag?id=${id}`, tag)
        return res
    }

    // 删除标签
    async deleteTag(id) {
        const res = _delete(`tag?id=${id}`)
        return res
    }
}
export default new Tag()