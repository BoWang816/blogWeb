/**
 * index.js
 * @author
 * @since {2020/3/27}
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Comment, Avatar, Button, Tooltip, Input } from 'antd';
import { ThunderboltOutlined } from '@ant-design/icons';
import './style.less';

const { TextArea } = Input;

export default class CommentArea extends Component {
    render() {
        const commentList = [
            {
                commentTime: '2019-12-34 12:23:43',
                commentUser: 'and',
                commentContent: '哈哈哈，这是什么鬼玩意'
            },
            {
                commentTime: '2019-12-34 12:23:43',
                commentUser: 'and',
                commentContent: '哈哈哈，这是什么鬼玩意'
            },
            {
                commentTime: '2019-12-34 12:23:43',
                commentUser: 'and',
                commentContent: '哈哈哈，这是什么鬼玩意'
            },
            {
                commentTime: '2019-12-34 12:23:43',
                commentUser: 'and',
                commentContent: '哈哈哈，这是什么鬼玩意'
            }
        ];
        return (
            <section className="comment-area">
                <h2 className="post-body">
                    既然点开了，不应该说点什么吗？？？~
                    <br />
                    ((٩(´͈ᗨ`͈)۶))
                </h2>
                <div className="comment-body">
                    <Input placeholder="昵称" />
                    <Input placeholder="邮箱" />
                    <Input placeholder="个人网站" />

                    <TextArea className="comment-content" rows={4} placeholder="来啊，畅所欲言啊！" />
                    <Button type="primary" shape="round" icon={<ThunderboltOutlined />}>
                        写完了, biu～～
                    </Button>
                </div>

                <div className="comment-list">
                    {commentList.length && <h4>{commentList.length}个评论</h4>}
                    {commentList.map(item => {
                        return (
                            <Comment
                                key={item.commentTime}
                                actions={null}
                                author={item.commentUser}
                                avatar={
                                    <Avatar
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        alt="Han Solo"
                                    />
                                }
                                content={<p>{item.commentContent}</p>}
                                datetime={<Tooltip title={item.commentTime} />}
                            />
                        );
                    })}
                </div>
            </section>
        );
    }
}
