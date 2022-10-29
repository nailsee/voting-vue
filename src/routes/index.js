export default [
	{path: '/', redirect: 'home'}, //默认路径
	{
		path: '/home',
		name: 'home',
		meta: {
			title: '手指点一点，你来决定嘉定区规划展示馆的LOGO'
		},
		component: resolve => require(['../views/home/home.vue'], resolve) //按需加载，只有在进入该页面的时候加载，并不会启动项目全部加载
	},
	{
		path: '/mine/:id?/:name?',
		name: 'mine',
		meta: {
			title: '手指点一点，你来决定嘉定区规划展示馆的LOGO'
		},
		component: resolve => require(['../views/mine/mine.vue'], resolve)
	},
	{
		path: '/rank',
		name: 'rank',
		meta: {
			title: '手指点一点，你来决定嘉定区规划展示馆的LOGO'
		},
		component: resolve => require(['../views/rank/rank.vue'], resolve)
	},
	{
		path: '/rule',
		name: 'rule',
		meta: {
			title: '我的'
		},
		component: resolve => require(['../views/rule/rule.vue'], resolve)
	},
	{
		path: '/news',
		name: 'news',
		meta: {
			title: '新闻'
		},
		component: resolve => require(['../views/news.vue'], resolve)
	}
]
