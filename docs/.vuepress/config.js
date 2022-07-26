const utils = require('./utils')

module.exports = {
	base: '/Fish/',
	title: '摸鱼 | 知识库',
	description: '个人收藏夹',
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: '/favicon.ico'
			}
		]
	],
	themeConfig: {
		// 导航栏logo
		logo: '/logo.png',
		// 导航栏链接
		nav: [
			{ text: '首页', link: '/' },
			{ text: '博客', link: '/blog/' },
			{ text: '网站', link: '/website/' },
			{ text: '收藏', link: '/stars/' },
			{ text: '文章', link: '/article/' },
		],
		// 提供了一个 items 数组而不是一个单一的 link 时，它将显示为一个 下拉列表
		// nav: [
		// 	{
		// 		text: 'Languages',
		// 		ariaLabel: 'Language Menu',
		// 		items: [
		// 			{ text: 'Chinese', link: '/language/chinese/' },
		//			// 可以通过嵌套的 items 来在 下拉列表 中设置分组
		// 			{ text: 'Japanese', items: [/*  */] }
		// 		]
		// 	}
		// ]
		// GitHub仓库
		repo: 'https://github.com/xiaoanbucai/Fish',
		// 自定义仓库链接文字。
		repoLabel: 'GitHub',
		sidebar: utils.inferSiderbars(),
		lastUpdated: '上次更新',
		editLinks: true,
		docsBranch: 'main',
		docsDir: 'docs',
		editLinkText: '在 GitHub 上编辑此页',
		sidebarDepth: 3
		// 通过使用对象来将侧边栏划分成多个组
		// 侧边栏的每个子组默认是可折叠的，你可以设置 collapsable: false 来让一个组永远都是展开状态。 
		// sidebar: [
		// 	{
		// 		title: 'Group 1',   // 必要的
		// 		path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
		// 		collapsable: false, // 可选的, 默认值是 true,
		// 		sidebarDepth: 1,    // 可选的, 默认值是 1
		// 		children: [
		// 			'/'
		// 		]
		// 	},
		// 	{
		// 		title: 'Group 2',
		// 		children: [ /* ... */],
		// 		initialOpenGroupIndex: -1 // 可选的, 默认值是 0
		// 	}
		// ],
		// 禁用默认的搜索框
		// search: false,
		// 调整默认搜索框显示的搜索结果数量
		// searchMaxSuggestions: 10,
		// 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
		// lastUpdated: 'Last Updated', // string | boolean
		// 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
		// nextLinks: false,
		// 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
		// prevLinks: false,
		// 启用页面滚动效果
		// smoothScroll: true
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@public': './public'
			}
		}
	},
	ga: 'UA-109340118-1',
	markdown: {
		config: md => {
			// use more markdown-it plugins!
			md.use(require('markdown-it-include'))
		}
	},
}