/**
 * index.js
 * @author wangbo
 * @since 2020/3/18
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class Header extends Component {

    render() {
        return (
            <Row>
                <Col span={18} push={6}>
                    col-18 col-push-6
                </Col>
                <Col span={6} pull={18}>
                    col-6 col-pull-18
                </Col>
            </Row>
        );
    };
}
