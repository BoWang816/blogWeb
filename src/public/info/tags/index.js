/**
 * index.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Tag } from 'antd';
import { TAG_COLOR } from '@constants';

export default class Tags extends Component {
	render() {
		const tagsList = [
			{
				name: '群晖',
				url: '',
				colorIndex: Math.floor(Math.random() * 10 + 1),
			},
			{
				name: 'React',
				url: '',
				colorIndex: Math.floor(Math.random() * 10 + 1),
			},
			{
				name: 'Nginx',
				url: '',
				colorIndex: Math.floor(Math.random() * 10 + 1),
			},
			{
				name: 'Web',
				url: '',
				colorIndex: Math.floor(Math.random() * 10 + 1),
			},
			{
				name: 'CSS',
				url: '',
				colorIndex: Math.floor(Math.random() * 10 + 1),
			},
		];

		return (
			<div style={{ padding: '0 10px' }}>
				{tagsList.map(item => {
					return (
						<Tag style={{ marginBottom: '8px' }} color={TAG_COLOR[item.colorIndex]}>
							{item.name}
						</Tag>
					);
				})}
			</div>
		);
	}
}
