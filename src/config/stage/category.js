const categoryRouter = {
    route: null,
    name: null,
    title: '分类管理',
    type: 'folder',
    icon: 'el-icon-collection-tag',
    filePath: 'views/Admin/Category/',
    order: null,
    inNav: true,
    children: [{
            title: '分类管理',
            type: 'view',
            name: 'category',
            route: '/admin/category/category',
            filePath: 'views/Admin/Category/category.vue',
            inNav: true,
            icon: ''
        },
        {
            title: '标签管理',
            type: 'view',
            name: 'tag',
            route: '/admin/category/tag',
            filePath: 'views/Admin/Category/tag.vue',
            inNav: true,
            icon: ''
        }
    ]
}

export default categoryRouter