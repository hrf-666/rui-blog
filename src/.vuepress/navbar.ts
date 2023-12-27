import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "博文",
        icon: "pen-to-square",
        prefix: "/articleInfo/",
        children: [
            // {
            //     text: "常用",
            //     icon: "pen-to-square",
            //     children: [
            //         {text: "在线工具", icon: "book", link: "https://mouday.github.io/coding-tree/#/doc/tools"},
            //         {text: "知识博主", icon: "book", link: "https://mouday.github.io/coding-tree/#/doc/nav"},
            //         {text: "开源库", icon: "book", link: "https://mouday.github.io/coding-tree/#/doc/open"},
            //     ],
            // },
            // {
            //     text: "前端",
            //     icon: "pen-to-square",
            //     prefix: "前端/",
            //     children: [
            //         {
            //             text: "Html",
            //             icon: "pen-to-square",
            //             link: "Html",
            //         },
            //         {
            //             text: "Css",
            //             icon: "pen-to-square",
            //             link: "Css",
            //         },
            //         "JavaScript",
            //         "Vue.js",
            //     ],
            // },
            // {
            //     text: "后端",
            //     icon: "pen-to-square",
            //     prefix: "后端/",
            //     children: [
            //         {
            //             text: "Java",
            //             icon: "pen-to-square",
            //             link: "Java",
            //         },
            //         {
            //             text: "C语言",
            //             icon: "pen-to-square",
            //             link: "C语言",
            //         },
            //         "C#",
            //         "Golang",
            //     ],
            // },
            // {
            //     text: "数据库",
            //     icon: "pen-to-square",
            //     prefix: "数据库/",
            //     children: [
            //         {
            //             text: "MySql",
            //             icon: "pen-to-square",
            //             link: "MySql",
            //         },
            //         {
            //             text: "Redis",
            //             icon: "pen-to-square",
            //             link: "Redis",
            //         },
            //     ],
            // },
            // {
            //     text: "通用技能",
            //     icon: "pen-to-square",
            //     prefix: "通用技能/",
            //     children: [
            //         {
            //             text: "Git",
            //             icon: "pen-to-square",
            //             link: "Git",
            //         },
            //         {
            //             text: "Docker",
            //             icon: "pen-to-square",
            //             link: "Docker",
            //         },
            //         "Linux",
            //         "RabbitMQ",
            //     ],
            // },
            // {
            //     text: "其他",
            //     icon: "pen-to-square",
            //     prefix: "其他/",
            //     children: [
            //         {
            //             text: "macOS",
            //             icon: "pen-to-square",
            //             link: "macOS",
            //         },
            //         {
            //             text: "微信支付",
            //             icon: "pen-to-square",
            //             link: "微信支付",
            //         },
            //         "其他",
            //     ],
            // },
        ],
    },
    {
        text: "代码Demo",
        icon: "pen-to-square",
        children: [
            {
                text: "前端Demo",
                icon: "book",
                link: "https://mouday.github.io/coding-tree/#/blog/javascript/javascript-learn-road",
            },
            {
                text: "VueDemo",
                icon: "book",
                link: "https://mouday.github.io/coding-tree/#/blog/javascript/javascript-learn-road",
            },
            {
                text: "SpringBootDemo",
                icon: "book",
                link: "https://mouday.github.io/spring-boot-demo/#/",
            },
        ],
    },
    {
        text: "学习路线",
        icon: "pen-to-square",
        children: [
            {
                text: "Web前端学习路线图",
                icon: "book",
                link: "https://mouday.github.io/coding-tree/#/blog/javascript/javascript-learn-road",
            },
            {
                text: "Java学习路线图",
                icon: "book",
                link: "https://mouday.github.io/coding-tree/#/blog/java/java-learn-road",
            },
            {
                text: "Python Web开发实战",
                icon: "book",
                link: "https://mouday.github.io/coding-tree/#/blog/python-web/index",
            },
        ],
    },
    {
        text: "常用文档工具",
        icon: "pen-to-square",
        children: [
            {
                text: "程序员导航",
                icon: "book",
                link: "https://hrf-666.github.io/navigation/",
            },
            {
                text: "学习笔记",
                icon: "book",
                link: "https://mouday.github.io/LearningNote/",
            },
            {
                text: "V2 文档",
                icon: "book",
                link: "https://theme-hope.vuejs.press/zh/",
            },
        ],
    },

]);
