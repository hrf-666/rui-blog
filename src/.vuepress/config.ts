import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { photoSwipePlugin } from "vuepress-plugin-photo-swipe";
import { commentPlugin } from "vuepress-plugin-comment2";
import { hopeTheme } from "vuepress-theme-hope";
import { gitPlugin } from "@vuepress/plugin-git";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/ruiblogs/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,
  // theme: hopeTheme({
  //   plugins: {
  //     mdEnhance: {
  //       card: true,
  //     },
  //   },
  // }),

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
    //  代码复制按钮
    copyCodePlugin({
      // 插件选项
    }),
    //  图片预览
    photoSwipePlugin({
      // 你的选项
    }),
    //  评论
    commentPlugin({
      provider: "Artalk", // Artalk | Giscus | Waline | Twikoo

      // 在这里放置其他选项
      // ...
    }),
    gitPlugin({
      // 配置项
      createdTime: true,
      updatedTime: true,
      contributors: true,

    }),



  ],

});
