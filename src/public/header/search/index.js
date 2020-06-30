/**
 * index.js
 * @author wangbo
 * @since 2020/3/20
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Input } from 'antd';

const { Search } = Input;

export default class SearchArticle extends Component {
    render() {
        return <Search placeholder="搜索文章" onSearch={value => console.log(value)} />;
    }
}
