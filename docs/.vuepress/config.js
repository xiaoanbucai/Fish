module.exports = {
	base: '/Fish/',
	title: '摸鱼',
	description: 'Vuepress blog demo',
	themeConfig: {
		// 你的GitHub仓库，请正确填写
		repo: 'https://github.com/xiaoanbucai',
		// 自定义仓库链接文字。
		repoLabel: 'GitHub',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'FirstBlog', link: '/blog/FirstBlog.md' }
		],
		sidebar: [
			['/', '首页'],
			['/blog/FirstBlog.md', '我的第一篇博客']
		]
	},

}