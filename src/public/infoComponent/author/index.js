/**
 * index.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Avatar } from "antd";
import './style.less';
export default class Author extends Component {

    render() {
    	const authorList = {
    		headerImg: 'http://diarypic.wangboweb.site/26587649.jpeg',
			name: '恪晨',
			motto: 'EveryThing Will OK!'
		};
        return (
		   <header>
			   <Avatar className="author-img" src={authorList.headerImg} />
			   <h3>{authorList.name}</h3>
			   <p>{authorList.motto}</p>
		   </header>
        );
    };
}
