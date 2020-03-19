/**
 * index.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import './style.less';
import { GithubOutlined, ZhihuOutlined } from '@ant-design/icons';

export default class Link extends Component {

    render() {
		const LinkList = [
			{
				name: 'Github',
				icon: <GithubOutlined/>,
				link: ''
			},
			{
				name: '知乎',
				icon: <ZhihuOutlined/>,
				link: ''
			}];
        return (
            <ul className="link-count">
				{
					LinkList.map(item => {
						return (
							<li className="link-item" key={item.link}>{item.icon}</li>
						)
					})
				}
            </ul>
        );
    };
}
