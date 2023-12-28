export const study_notes_sidebarConfig = [
    // {children: "structure",}
        {
            text: '后端',   // 必要的
            link: '/study-notes/back-end/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            initialOpenGroupIndex: -1, // 可选的, 默认值是 0
            collapsible: false, // 可选的, 默认值是 true,
            children: [
                {
                    text: 'Java',   // 必要的
                    link: '/study-notes/back-end/java/',
                    children: [
                        {
                            text: 'Java基础',   // 必要的
                            link: '/study-notes/back-end/java/basic/'
                        },
                        {
                            text: 'JavaSE',   // 必要的
                            link: '/study-notes/back-end/java/javase/',
                        }
                    ]
                },
                {
                    text: 'Python',   // 必要的
                    link: '/study-notes/back-end/python/'
                }
            ]
        },
        {
            text: '前端',
            link: '/study-notes/front-end/',
            collapsible: false, // 可选的, 默认值是 true,
            children: [{
                text: 'html',   // 必要的
                link: '/study-notes/front-end/html/'
            }],
        }
    ]

