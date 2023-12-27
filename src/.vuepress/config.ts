import {defineUserConfig} from "vuepress";
import {searchProPlugin} from "vuepress-plugin-search-pro";
import {gitPlugin} from "@vuepress/plugin-git";
import { getDirname, path } from "@vuepress/utils";

// const __dirname = getDirname(import.meta.url);


import theme from "./theme.js";

// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
export default defineUserConfig({
    base: "/ruiblogs/",
    lang: "zh-CN",
    title: "Rui的博客 | Rui Blog",
    description: "技术分享，资源分享",
    theme,
    // alias: {
    //     "@Navigate": path.resolve(__dirname, "components/Navigate.vue"),
    // },
    // Enable it with pwa
    shouldPrefetch: false,
    plugins: [
        //  搜索功能
        searchProPlugin({
            // 索引全部内容
            indexContent: true,
            // 为分类和标签添加索引
            customFields: [
                {
                    getter: (page) => page.frontmatter as any,
                    formatter: "分类：$content",
                },
                {
                    getter: (page) => page.frontmatter.tag as any,
                    formatter: "标签：$content",
                },
            ],
        }),
        gitPlugin({
            // 配置项
            createdTime: true,
            updatedTime: true,
            contributors: true,
        }),
    ],

});
