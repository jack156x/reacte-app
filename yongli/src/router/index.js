/*路由核心
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-20 18:31:24 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-21 10:01:09
 */
import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/views/Main.vue'
import HomeView from '@/views/Home.vue'

import NotFoundView from '@/views/common/404.vue'

/**登录地址 */
import { LOGIN_PATH } from '@/config/global'


Vue.use(Router);

const routes = [
	{
		path: '/',
		name: 'home',
		component: MainView,
		redirect: '/index.html',
	},
	{
		path: LOGIN_PATH,
		name: 'login',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "login" */ '@/views/Login.vue'),
	},
	{
		path: '/index.html',
		component: MainView,
		children: [
			{
				path: '/',
				component: HomeView,
			}
		],
	},
	{
		path: '*',
		component: NotFoundView,
	},
];

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next)=>{
	if(!sessionStorage.token){
		if(to.path != LOGIN_PATH){
			next(LOGIN_PATH);
			return;
		}
	}

	next();
});

export default router;