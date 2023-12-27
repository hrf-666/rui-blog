import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";
const {blogConfig} = require("./config/blogConfig");
const {encryptConfig} = require("./config/encryptConfig")
const {authorConfig} = require("./config/authorConfig")
const {pluginsConfig} = require("./config/pluginsConfig")

export default hopeTheme({
    hostname: "https://huang-ruifang.gitee.io/ruiblogs",
    author: authorConfig,
    logo: "/logo.png",
    repo: "vuepress-theme-hope/vuepress-theme-hope",
    docsDir: "src",
    navbar,
    sidebar,
    footer: "Rui Blog",
    displayFooter: true,
    blog: blogConfig,
    encrypt: encryptConfig,

    // page meta
    // metaLocales: {
    //     editLink: "在 GitHub 上编辑此页",
    // },

    plugins: pluginsConfig,
});
