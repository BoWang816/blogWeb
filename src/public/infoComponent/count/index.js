/**
 * index.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import './style.less';
import { Divider } from "antd";

export default class Count extends Component {

	render() {
		const articleCountList = [
			{
				name: '文章',
				key: 'articleCount',
				value: 22,
				link: ''
			},
			{
				name: '分类',
				key: 'categoriesCount',
				value: 10,
				link: ''
			},
			{
				name: '标签',
				key: 'tagCount',
				value: 3,
				link: ''
			}];
		return (
			<ul className="article-count">
				{
					articleCountList.map((item, index) => {
						return (
							<li key={item.key} className="article-count-item">
								<span>{item.name} {item.value}</span>{index < 2 && <Divider type="vertical" />}
							</li>
						)
					})
				}
			</ul>
		);
	};
}
