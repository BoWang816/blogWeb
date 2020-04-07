/**
 * index.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import './style.less';

export default class Logo extends Component {
	render() {
		return (
			<div className="logo">
				<a href="/" className="brand" rel="start">
					<span className="site-title" style={{ opacity: '1', top: 0 }}>
						恪晨的小站
					</span>
				</a>
			</div>
		);
	}
}
