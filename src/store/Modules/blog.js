import {
    get,
    post,
    put,
    _delete
} from '@/plugins/axios'

class Blog {
    // 创建友链
    async createFriend(friend) {
        const res = await post('blog/friend', friend)
        return res
    }

    // 获取所有友链
    async getFriends() {
        const res = await get('blog/friends')
        return res
    }

    // 更新友链
    async updateFriend(id, friend) {
        const res = await put(`blog/friend?id=${id}`, friend)
        return res
    }

    // 删除友链
    async deleteFriend(id) {
        const res = _delete(`blog/friend?id=${id}`)
        return res
    }
}

export default new Blog()
