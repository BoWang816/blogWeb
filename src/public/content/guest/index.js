/**
 * index.js
 * @author wangbo
 * @since 2020/3/20
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import CommentArea from '@components/comment';

export default class GuestPage extends Component {
	render() {
		return (
			<div style={{ height: '100%', overflow: 'auto' }}>
				<CommentArea />
			</div>
		);
	}
}
