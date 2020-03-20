/**
 * index.js
 * @author wangbo
 * @since 2020/3/18
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Logo from "./logo";
import MenuArea from "./menu";
import './style.less';
const responsiveLeft = { xxl: 4, xl: 5, lg: 5, sm: 4, xs: 24 };
const responsiveRight = { xxl: 20, xl: 19, lg: 19, sm: 20, xs: 0 };

export default class HeaderArea extends Component {

    render() {
        return (
        	<Row>
				<Col {...responsiveLeft}>
					<Logo />
				</Col>
				<Col {...responsiveRight} className="menu-area">
					<MenuArea/>
				</Col>
			</Row>
        );
    };
}
