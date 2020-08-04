import {
  get,
  _delete
} from '@/plugins/axios'

class Message {
  // 获取所有留言
  async getMessages(page = 0) {
    const res = await get(`message/messages?page=${page}`)
    return res
  }

  // 删除某条留言
  async deleteMessage(id) {
    const res = await _delete(`message?id=${id}`)
    return res
  }
}

export default new Message()