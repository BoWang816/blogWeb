/**
 * index.js
 * @author wangbo
 * @since 2020/3/20
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Timeline } from 'antd';
import { TAG_COLOR } from '@constants';
import { Link } from 'react-router-dom';

import './style.less';

export default class ArchivesPage extends Component {
	render() {
		const timeList = [
			{
				id: 12,
				time: '2019-12-12',
				name: '我的第一篇文章',
			},
			{
				id: 13,
				time: '2019-12-12',
				name: '我的第一篇文章',
			},
			{
				id: 14,
				time: '2019-12-12',
				name: '我的第一篇文章',
			},
			{
				id: 15,
				time: '2019-12-12',
				name: '我的第一篇文章',
			},
		];
		return (
			<div className="archive-area">
				<Timeline>
					{timeList.map(item => (
						<Timeline.Item key={item.id} color={TAG_COLOR[Math.floor(Math.random() * 10 + 1)]}>
							<span style={{ fontSize: '14px', marginRight: '16px' }}>{item.time.slice(5, 10)}</span>
							<Link to={`/article/${item.id}`}>{item.name}</Link>
						</Timeline.Item>
					))}
				</Timeline>
			</div>
		);
	}
}
