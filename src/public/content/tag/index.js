/**
 * index.js
 * @author wangbo
 * @since 2020/3/20
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Badge, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { TAG_COLOR } from '@constants';

import './style.less';

export default class TagPage extends Component {
	render() {
		const categoryList = [
			{
				name: 'Sequelize',
				count: 6,
			},
			{
				name: 'HTTP',
				count: 6,
			},
			{
				name: 'MySQL',
				count: 4,
			},
			{
				name: 'Javascript',
				count: 3,
			},
			{
				name: 'Node',
				count: 3,
			},
			{
				name: 'Vue',
				count: 2,
			},
			{
				name: '服务器与运维',
				count: 2,
			},
			{
				name: 'webpack',
				count: 1,
			},
			{
				name: 'React',
				count: 1,
			},
		];
		return (
			<div className="app-categories">
				<h2 className="title">Categories</h2>
				<p className="category-all-title">{`${categoryList.length} categories in total`}</p>

				<div className="categories-list">
					{categoryList.map(item => (
						<Badge count={item.count} key={item.name}>
							<Tag color={TAG_COLOR[Math.floor(Math.random() * 10 + 1)]}>
								<Link to={`/categories/${item.name}`}>{item.name}</Link>
							</Tag>
						</Badge>
					))}
				</div>
			</div>
		);
	}
}
