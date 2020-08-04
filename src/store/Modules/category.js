
import {
  get,
  post,
  put,
  _delete
} from '@/plugins/axios'

class Category {
  // 新增分类
  async createCategory(category) {
    const res = await post('cat', category)
    return res
  }

  // 编辑分类
  async updateCategory(id, category) {
    const res = await put(`cat?id=${id}`, category)
    return res
  }

  // 获取所有分类
  async getCategories() {
    const res = await get('cats')
    return res
  }

  // 删除某个分类
  async deleteCategory(id) {
    const res = await _delete(`cat?id=${id}`)
    return res
  }
}

export default new Category()