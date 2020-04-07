/**
 * index.js
 * @author wangbo
 * @since 2020/3/20
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Divider, Pagination } from 'antd';
import ArticleTag from '@components/articleTag';
import { translateMarkdown } from '@utils';
import { HOME_PAGESIZE } from '@constants';
import './style.less';

export default class HomePage extends Component {
	render() {
		// 跳转到文章详情
		function jumpTo(id) {
			this.history.push(`/article/${id}`);
		}
		const articleList = {
			msg: '列表',
			code: 200,
			data: {
				count: 30,
				list: [
					{
						createdAt: '2020-03-12 14:12:57',
						updatedAt: '2020-03-20 11:29:02',
						id: 92,
						title: '置顶文',
						content:
							'博主📒笔记地址 [guodada-note](http://47.112.48.225:4001/)，用 `vuepress` 去做的，`react-blog` 只是练手项目 现在这里暂时比较少放文章。\n 有兴趣请关注 [guodada-note](http://47.112.48.225:4001/) ，我的个人笔记平台！',
						viewCount: 1033,
						tags: ['javaScript'],
						categories: ['javaScript'],
						comments: [],
					},
					{
						createdAt: '2020-03-12 14:12:57',
						updatedAt: '2020-03-20 11:29:02',
						id: 92,
						title: '置顶文',
						content:
							'博主📒笔记地址 [guodada-note](http://47.112.48.225:4001/)，用 `vuepress` 去做的，`react-blog` 只是练手项目 现在这里暂时比较少放文章。\n 有兴趣请关注 [guodada-note](http://47.112.48.225:4001/) ，我的个人笔记平台！',
						viewCount: 1033,
						tags: ['Web', 'JS'],
						categories: ['Web', 'JS'],
						comments: [],
					},
					{
						createdAt: '2020-03-12 14:12:57',
						updatedAt: '2020-03-20 11:29:02',
						id: 92,
						title: '置顶文',
						content:
							'博主📒笔记地址 [guodada-note](http://47.112.48.225:4001/)，用 `vuepress` 去做的，`react-blog` 只是练手项目 现在这里暂时比较少放文章。↵↵有兴趣请关注 [guodada-note](http://47.112.48.225:4001/) ，我的个人笔记平台！',
						viewCount: 1033,
						tags: [],
						categories: ['Flutter', 'JS'],
						comments: [],
					},
					{
						createdAt: '2020-03-12 14:12:57',
						updatedAt: '2020-03-20 11:29:02',
						id: 92,
						title: '置顶文',
						content:
							'博主📒笔记地址 [guodada-note](http://47.112.48.225:4001/)，用 `vuepress` 去做的，`react-blog` 只是练手项目 现在这里暂时比较少放文章。\n 有兴趣请关注 [guodada-note](http://47.112.48.225:4001/) ，我的个人笔记平台！',
						viewCount: 1033,
						tags: ['javaScript'],
						categories: ['javaScript'],
						comments: [],
					},
					{
						createdAt: '2020-03-12 14:12:57',
						updatedAt: '2020-03-20 11:29:02',
						id: 92,
						title: '置顶文',
						content:
							'博主📒笔记地址 [guodada-note](http://47.112.48.225:4001/)，用 `vuepress` 去做的，`react-blog` 只是练手项目 现在这里暂时比较少放文章。\n 有兴趣请关注 [guodada-note](http://47.112.48.225:4001/) ，我的个人笔记平台！',
						viewCount: 1033,
						tags: ['Web', 'JS'],
						categories: ['Web', 'JS'],
						comments: [],
					},
					{
						createdAt: '2020-03-12 14:12:57',
						updatedAt: '2020-03-20 11:29:02',
						id: 92,
						title: '置顶文',
						content:
							'博主📒笔记地址 [guodada-note](http://47.112.48.225:4001/)，用 `vuepress` 去做的，`react-blog` 只是练手项目 现在这里暂时比较少放文章。↵↵有兴趣请关注 [guodada-note](http://47.112.48.225:4001/) ，我的个人笔记平台！',
						viewCount: 1033,
						tags: [],
						categories: ['Flutter', 'JS'],
						comments: [],
					},
					{
						createdAt: '2020-03-12 14:12:57',
						updatedAt: '2020-03-20 11:29:02',
						id: 92,
						title: '置顶文',
						content:
							'博主📒笔记地址 [guodada-note](http://47.112.48.225:4001/)，用 `vuepress` 去做的，`react-blog` 只是练手项目 现在这里暂时比较少放文章。\n 有兴趣请关注 [guodada-note](http://47.112.48.225:4001/) ，我的个人笔记平台！',
						viewCount: 1033,
						tags: ['javaScript'],
						categories: ['javaScript'],
						comments: [],
					},
					{
						createdAt: '2020-03-12 14:12:57',
						updatedAt: '2020-03-20 11:29:02',
						id: 92,
						title: '置顶文',
						content:
							'博主📒笔记地址 [guodada-note](http://47.112.48.225:4001/)，用 `vuepress` 去做的，`react-blog` 只是练手项目 现在这里暂时比较少放文章。\n 有兴趣请关注 [guodada-note](http://47.112.48.225:4001/) ，我的个人笔记平台！',
						viewCount: 1033,
						tags: ['Web', 'JS'],
						categories: ['Web', 'JS'],
						comments: [],
					},
					{
						createdAt: '2020-03-12 14:12:57',
						updatedAt: '2020-03-20 11:29:02',
						id: 92,
						title: '置顶文',
						content:
							'博主📒笔记地址 [guodada-note](http://47.112.48.225:4001/)，用 `vuepress` 去做的，`react-blog` 只是练手项目 现在这里暂时比较少放文章。↵↵有兴趣请关注 [guodada-note](http://47.112.48.225:4001/) ，我的个人笔记平台！',
						viewCount: 1033,
						tags: [],
						categories: ['Flutter', 'JS'],
						comments: [],
					},
					{
						createdAt: '2020-03-12 14:12:57',
						updatedAt: '2020-03-20 11:29:02',
						id: 92,
						title: '置顶文',
						content:
							'博主📒笔记地址 [guodada-note](http://47.112.48.225:4001/)，用 `vuepress` 去做的，`react-blog` 只是练手项目 现在这里暂时比较少放文章。\n 有兴趣请关注 [guodada-note](http://47.112.48.225:4001/) ，我的个人笔记平台！',
						viewCount: 1033,
						tags: ['javaScript'],
						categories: ['javaScript'],
						comments: [],
					},
					{
						createdAt: '2020-03-12 14:12:57',
						updatedAt: '2020-03-20 11:29:02',
						id: 92,
						title: '置顶文',
						content:
							'博主📒笔记地址 [guodada-note](http://47.112.48.225:4001/)，用 `vuepress` 去做的，`react-blog` 只是练手项目 现在这里暂时比较少放文章。\n 有兴趣请关注 [guodada-note](http://47.112.48.225:4001/) ，我的个人笔记平台！',
						viewCount: 1033,
						tags: ['Web', 'JS'],
						categories: ['Web', 'JS'],
						comments: [],
					},
					{
						createdAt: '2020-03-12 14:12:57',
						updatedAt: '2020-03-20 11:29:02',
						id: 92,
						title: '置顶文',
						content:
							'博主📒笔记地址 [guodada-note](http://47.112.48.225:4001/)，用 `vuepress` 去做的，`react-blog` 只是练手项目 现在这里暂时比较少放文章。↵↵有兴趣请关注 [guodada-note](http://47.112.48.225:4001/) ，我的个人笔记平台！',
						viewCount: 1033,
						tags: [],
						categories: ['Flutter', 'JS'],
						comments: [],
					},
				],
			},
		};

		const list = [...articleList.data.list].map(item => {
			const index = item.content.indexOf('<!--more-->');
			item.content = translateMarkdown(item.content.slice(0, index));
			return item;
		});

		return (
			<section className="article-area">
				<ul className="article-list">
					{list.map(item => (
						<li key={item.id} className="article-list-item">
							<Divider orientation="left">
								<span className="title" onClick={() => jumpTo(item.id)}>
									{item.title}
								</span>
								<span className="posted-time">{item.createdAt.slice(0, 10)}</span>
							</Divider>

							<div onClick={() => jumpTo(item.id)} className="article-detail content" dangerouslySetInnerHTML={{ __html: item.content }} />
							<ArticleTag comments={item.comments} viewCount={item.viewCount} tagList={item.tags} categoryList={item.categories} />
						</li>
					))}
				</ul>
				<div className="pagination-area">
					<Pagination hideOnSinglePage total={articleList.data.count} defaultPageSize={HOME_PAGESIZE} />
					<Divider className="stop-tips">我跟你讲，我也是有底线的^_^</Divider>
				</div>
			</section>
		);
	}
}
