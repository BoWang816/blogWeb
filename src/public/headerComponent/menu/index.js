/**
 * index.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import { HomeOutlined, TagOutlined, FileTextOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';
import '../style.less';
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
				link: '/home',
				icon: <HomeOutlined/>
			},
			{
				key: 'archives',
				title: '归档',
				link: '/archives',
				icon: <FileTextOutlined/>
			},
			{
				key: 'tags',
				title: '标签',
				link: '/tags',
				icon: <TagOutlined/>
			},
			{
				key: 'guest',
				title: '留言',
				link: '/guest',
				icon: <MessageOutlined/>
			},
			{
				key: 'about',
				title: '关于',
				link: '/about',
				icon: <UserOutlined />
			}
		];
		return (
			<Menu
				className="menu-list"
				onClick={this.handleClick}
				selectedKeys={[this.state.current]}
				mode="horizontal">
				{
					menuList.map(item => {
						return (
							<Menu.Item key={item.key}>
								<Link to={item.link}>
									{item.icon}
									{item.title}
								</Link>
							</Menu.Item>
						);
					})
				}
			</Menu>
		);
	};
}
