module.exports = {
    lang: "zh-CN",
    title: "Hope Blog",
    description: "Hope Blog",
    base: "/hope_blog/",
    dest: "docs/dist",
    markdown: {
        // lineNumbers: true,
    },
    themeConfig: {
        displayAllHeaders: true,
        logo: "/images/logo.png",
        nav: [
            {
                text: "首页", link: "/Home"
            },
            {
                text: "关于",
                items: [
                    {text: "GitHub", link: "https://github.com/AnLaity"},
                ]
            }
        ],
        lastUpdated: true
    },
};
