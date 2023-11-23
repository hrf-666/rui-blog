import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        {
            text: "如何使用",
            icon: "laptop-code",
            prefix: "demo/",
            link: "demo/",
            children: "structure",
        },
        {
            text: "文章",
            icon: "book",
            prefix: "articleInfo/",
            children: "structure",
        },
        {
            text: "原例子",
            icon: "book",
            prefix: "posts/",
            children: "structure",
        },
        {
            text: "面试",
            icon: "book",
            prefix: "interview/",
            children: "structure",
        },
        "intro",
        "slides",
    ],
});
