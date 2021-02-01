module.exports = {
    title: "个人主页",
    description: "呆萌大虾球的博客",
    head: [
        ['link', { rel: 'icon', href: '' }],
        ['link', { rel: 'manifest', href: '' }]
    ],
    // theme: '',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文章', 
                items: [
                    { text: 'Unity', link: '/unity/' },
                    { text: 'netcore', link: '/netcore/' },
                    { text: '理财日记', link: '/money/' },
                ]
            },
            { text: '关于', link: '/about/' },
            { text: 'github', link: 'https://www.baidu.com' },
        ],
        sidebar: {
            '/unity/': [
                "",
            ],
            '/netcore/': [
                "",
            ],
            "/money/": [
                "",
            ],
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    },
    plugins: {},
    serviceWorker: true,
}