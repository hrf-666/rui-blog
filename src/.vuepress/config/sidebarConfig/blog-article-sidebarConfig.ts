export const blog_article_sidebarConfig = [
    {
        text: 'Java',   // 必要的
        link: '/blog-article/java/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        collapsible: false, // 可选的, 默认值是 true,
    },
    {
        text: 'MySql',   // 必要的
        link: '/blog-article/mysql/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    },
    {
        text: 'Python',   // 必要的
        link: '/blog-article/python/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    },
    {
        text: 'Mybatis',   // 必要的
        link: '/blog-article/mybatis/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
            {
                text: 'mybatis查询条件List集合、map集合、Array数组',   // 必要的
                link: '/blog-article/mybatis/mybatis-list-map-array',

            },
            {
                text: 'mybatis查询返回List集合、map集合、List＜Map＞集合',   // 必要的
                link: '/blog-article/mybatis/mybatis-List-map'
            }
        ]
    },
    {
        text: '前端',   // 必要的
        link: '/blog-article/front-end/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
            {
                text: 'easyui-tree-combotree去掉默认图标',   // 必要的
                link: '/blog-article/front-end/easyui-tree-combotree',

            },
        ]
    },
    {
        text: '其他',   // 必要的
        link: '/blog-article/other/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
            {
                text: 'picGo+gitee设置图床',   // 必要的
                link: '/blog-article/other/picGo+gitee',

            },
        ]
    },
]
