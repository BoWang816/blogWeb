/**
 * index.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, TagOutlined, FileTextOutlined, MessageOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';

export default class MenuArea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: ''
		};
	}
	render() {
		const menuList = [
			{
				key: 'home',
				title: '首页',
				icon: <HomeOutlined/>
			},
			{
				key: 'classification',
				title: '分类',
				icon: <FileTextOutlined/>
			},
			{
				key: 'tags',
				title: '标签',
				icon: <TagOutlined/>
			},
			{
				key: 'guest',
				title: '留言',
				icon: <MessageOutlined/>
			},
			{
				key: 'about',
				title: '关于',
				icon: <UserOutlined />
			},
			{
				key: 'search',
				title: '搜索',
				icon: <SearchOutlined />
			}
		];
		return (
			<Menu
				style={{ lineHeight: '62px', height: '65px', background: '#40cc6f' }}
				onClick={this.handleClick}
				selectedKeys={[this.state.current]}
				mode="horizontal">
				{
					menuList.map(item => {
						return (
							<Menu.Item
								key={item.key}>
								{item.icon}
								{item.title}
							</Menu.Item>
						);
					})
				}
			</Menu>
		);
	};
}
