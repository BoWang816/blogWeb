/**
 * index.js
 * @author wangbo
 * @since 2020/3/20
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Divider, Tag } from "antd";
import { Link } from "react-router-dom";
import { calcCommentsCount } from '@utils';
import { EyeOutlined, TagsTwoTone, FolderOutlined, CommentOutlined } from '@ant-design/icons';
import { TAG_COLOR } from "@constants";

export default class ArticleTag extends Component {
	render() {
		const { tagList, categoryList, viewCount, comments } = this.props;
        return (
			<>
				<CommentOutlined />
				<span style={{ marginRight: 5 }}> {calcCommentsCount(comments)}</span>
				<EyeOutlined />
				<span>{viewCount}</span>

				{tagList.length > 0 && (
					<>
						<Divider type="vertical" style={{ marginRight: 7 }} />
						<TagsTwoTone style={{ marginRight: '5px' }} />
						{tagList.map((tag, i) => (
							<Tag key={i} color={TAG_COLOR[Math.floor((Math.random()*10) + 1)]}>
								<Link to={`/tags/${tag}`}>{tag}</Link>
							</Tag>
						))}
					</>
				)}
				{categoryList.length > 0 && (
					<>
						<Divider type="vertical" style={{ marginRight: 7 }} />
						<FolderOutlined style={{ marginRight: '5px' }}/>
						{categoryList.map((cate, i) => (
							<Tag key={i} color={TAG_COLOR[Math.floor((Math.random()*10) + 1)]}>
								<Link to={`/categories/${cate}`}>{cate}</Link>
							</Tag>
						))}
					</>
				)}
			</>
        );
    };
}
