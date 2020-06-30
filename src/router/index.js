/**
 * index.js
 * @author wangbo
 * @since 2020/3/20
 * @github https://github.com/BoWang816
 */

import PageNotFound from '@components/404';
import ArchivesPage from '../public/content/archives';
import ArticlePage from '../public/content/article';
import GuestPage from '../public/content/guest';
import TagPage from '../public/content/tag';
import HomePage from '../public/content/home';

export default {
    path: '/',
    name: 'home',
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
};
