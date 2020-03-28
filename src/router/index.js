/**
 * index.js
 * @author wangbo
 * @since 2020/3/20
 * @github https://github.com/BoWang816
 */

import Layout from "../public";
import ArchivesPage from "../public/contentComponent/archivesComponent";
import ArticlePage from "../public/contentComponent/articleComponent";
import GuestPage from "../public/contentComponent/guestComponent";
import TagPage from "../public/contentComponent/tagComponent";
import PageNotFound from "@components/404";
import HomePage from "../public/contentComponent/homeComponent";

export default {
	path: '/',
	name: 'home',
	component: Layout,
	childRoutes: [
		{ path: '/', component: HomePage, exact: true },
		{ path: '/home', component: HomePage },
		{ path: '/article/:id', component: ArticlePage },
		{ path: '/archives', component: ArchivesPage },
		{ path: '/tags', component: TagPage },
		{ path: '/tags/:name', component: TagPage },
		{ path: '/guest', component: GuestPage },
		{ path: '*', component: PageNotFound }
	]
}
