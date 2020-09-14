const articleRouter = {
    route: null,
    name: null,
    title: '作者管理',
    type: 'folder',
    icon: 'el-icon-user',
    filePath: 'views/Admin/Author/',
    order: null,
    inNav: true,
    children: [{
            title: '作者列表',
            type: 'view',
            name: 'author-list',
            route: '/admin/author/list',
            filePath: 'views/Admin/Author/author-list.vue',
            inNav: true,
            icon: ''
        },
        {
            title: '新增作者',
            type: 'view',
            name: 'author-add',
            route: '/admin/author/add',
            filePath: 'views/Admin/Author/author-add.vue',
            inNav: true,
            icon: ''
        },
    ]
}
export default articleRouter