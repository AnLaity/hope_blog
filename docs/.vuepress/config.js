module.exports = {
    lang: "zh-CN",
    title: "Hope Blog",
    description: "Hope Blog",
    base: "/hope_blog/",
    dest: "docs/dist",
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        displayAllHeaders: true,
        logo: "/images/logo.png",
        sidebar: [
            {
                title: "Docker",
                collapsable: true,
                children: [
                    "docker/安装配置",
                    "docker/挂载MySQL",
                    "docker/挂载Nginx",
                    "docker/挂载Redis"
                ],
            },
            {
                title: "Java",
                collapsable: true,
                children: [
                    "java/Lambda"
                ],
            },
        ],
        nav: [
            {
                text: "归类",
                items: [
                    {text: "Docker", link: "/docker/安装配置"},
                    {text: "Java", link: "/java/Lambda"},
                ]
            }
        ],
    },
};
