import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Finca from '@/components/Finca';
import AboutUs from '@/components/AboutUs';
import Roasters from '@/components/Roasters';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: Dashboard
		},
		{
			path: '/finca',
			name: 'finca',
			component: Finca
		},
		{
			path: '/aboutus',
			name: 'aboutus',
			component: AboutUs
		},
		{
			path: '/roasters',
			name: 'roasters',
			component: Roasters
		}
	]
});
