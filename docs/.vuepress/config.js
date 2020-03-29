module.exports = {
  title: 'vuepress plugin auto sidebar',
  description: '帮助 vuepress 快速生成侧边栏的插件',
  base: "/vuepress-plugin-auto-sidebar/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  plugins: [
    [
      require("../../index.js"),
      {

      }
    ]
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    repo: 'shanyuhai123/vuepress-plugin-auto-sidebar',
    editLinks: true,
    editLinkText: '编辑文档！',
    docsDir: 'docs',
    docsBranch: 'docs',
    nav: [
      { text: '首页', link: '/' },
      { text: '功能', link: '/features/' },
      { text: '常见问题', link: '/questions' },
    ]
  },
}