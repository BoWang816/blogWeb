/**
 * index.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Avatar, Drawer } from "antd";
import { observable } from "mobx";
import { observer } from 'mobx-react';
import './style.less';

@observer
class Author extends Component {
	@observable
	showDrawer = false;

	// 点击头像区域
	clickImg = () => {
		this.showDrawer = true;
	};

	// 关闭抽屉 todo 无法关闭
	closeDrawer = () => {
		console.log(1);
		this.showDrawer = !this.showDrawer;
	};

    render() {
    	const authorList = {
    		headerImg: 'https://file.wangboweb.site/logo.png',
			name: '恪晨',
			motto: 'EveryThing Will OK!'
		};
        return (
		   <header onClick={this.clickImg}>
			   <Avatar className="author-img" src={authorList.headerImg}/>
			   <h3>{authorList.name}</h3>
			   <p>{authorList.motto}</p>
			   <Drawer
				   title="哦吼，恭喜你发现了秘密"
				   placement="bottom"
				   closable={true}
				   onClose={this.closeDrawer}
				   visible={this.showDrawer}>
				   <p>Some contents...</p>
				   <p>Some contents...</p>
				   <p>Some contents...</p>
			   </Drawer>
		   </header>
        );
    };
}

export default Author;
