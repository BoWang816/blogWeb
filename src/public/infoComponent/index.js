/**
 * index.js
 * @author wangbo
 * @since 2020/3/18
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Divider } from "antd";
import Author from "./author";
import Count from './count';
import Link from "./link";

export default class InfoArea extends Component {

    render() {
        return (
            <section>
                <Author/>
				<Divider dashed style={{ margin: '10px 0' }}/>
                <Count/>
				<Divider orientation="left" style={{ fontSize: '14px', margin: '20px 0 4px 0' }}>我的链接</Divider>
				<Link/>

			</section>
        );
    };
}
