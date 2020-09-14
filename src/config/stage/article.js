const articleRouter = {
    route: null,
    name: null,
    title: '文章管理',
    type: 'folder',
    icon: 'el-icon-document-copy',
    filePath: 'views/Admin/Article/',
    order: null,
    inNav: true,
    children: [{
            title: '添加文章',
            type: 'view',
            name: 'article-info',
            route: '/admin/article/add',
            filePath: 'views/Admin/Article/article-info.vue',
            inNav: true,
            icon: ''
        },
        {
            title: '文章列表',
            type: 'view',
            name: 'article-list',
            route: '/admin/article/list',
            filePath: 'views/Admin/Article/article-list.vue',
            inNav: true,
            icon: ''
        }
    ]
}

export default articleRouter
