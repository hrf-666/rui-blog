export const pluginsConfig = {
    blog: true,
    // 文件夹下的文件列表自动为每个文件夹生成目录页面
    autoCatalog: {
        index: true
    },
    copyCode: {
        showInMobile: true,//展示在移动端
    },
    copyright: {
        global: true,
        triggerWords: 10,
        author: 'Rui'
    },
    // 暂不使用,太慢了,
    // comment: {
    //     // You should generate and use your own comment service
    //     provider: "Waline",
    //     // 个人服务实在太慢
    //     // serverURL: "https://rui-comment-9ak8keala-huangruifang0529-163com.vercel.app/",
    //     // 使用官方网站的更快速
    //     serverURL: "https://waline-comment.vuejs.press",
    //     locale: {},
    //
    // },

    // all features are enabled for demo, only preserve features you need here
    // mdEnhance: {
    //     align: true,
    //     attrs: true,
    //     chart: true,
    //     codetabs: true,
    //     demo: true,
    //     echarts: true,
    //     figure: true,
    //     flowchart: true,
    //     gfm: true,
    //     imgLazyload: true,
    //     imgSize: true,
    //     include: true,
    //     katex: true,
    //     mark: true,
    //     mermaid: true,
    //     playground: {
    //         presets: ["ts", "vue"],
    //     },
    //     presentation: ["highlight", "math", "search", "notes", "zoom"],
    //     stylize: [
    //         {
    //             matcher: "Recommended",
    //             replacer: ({tag}) => {
    //                 if (tag === "em")
    //                     return {
    //                         tag: "Badge",
    //                         attrs: {type: "tip"},
    //                         content: "Recommended",
    //                     };
    //             },
    //         },
    //     ],
    //     sub: true,
    //     sup: true,
    //     tabs: true,
    //     vPre: true,
    //     vuePlayground: true,
    //
    // },
}
