/**
 * index.js
 * @author wangbo
 * @since 2020/3/18
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Logo from './logo';
import MenuArea from './menu';
import Search from './search';
import './style.less';

const responsiveLogo = { xxl: 3, xl: 4, lg: 4, sm: 4, xs: 10 };
const responsiveSearch = { xxl: 4, xl: 6, lg: 6, sm: 0, xs: 14 };
const responsiveMenu = { xxl: 17, xl: 14, lg: 14, sm: 20, xs: 0 };

export default class HeaderArea extends Component {
    render() {
        return (
            <Row>
                <Col {...responsiveLogo}>
                    <Logo />
                </Col>
                <Col {...responsiveSearch}>
                    <Search />
                </Col>
                <Col {...responsiveMenu} className="menu-area">
                    <MenuArea />
                </Col>
            </Row>
        );
    }
}
