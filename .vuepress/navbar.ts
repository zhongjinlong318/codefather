import {NavItem} from "vuepress/config";

export default [
    {
        text: "指南",
        link: '/'
    },
     {
        text: "组件",
        link: '/'
    },
    {
        text: "选择语言",
        link: '/',
        items: [
            {
                text: "中文", link: "/",
            },
            {
                text: "日语", link: "/",
            },
            {
                text: "英语", link: "/",
            },
        ]
    },
] as NavItem[];
