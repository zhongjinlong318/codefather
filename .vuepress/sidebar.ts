import {SidebarConfig4Multiple} from "vuepress/config";

// @ts-ignore
export default {
    "/关于我们/": ["", "个人经历"],
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
