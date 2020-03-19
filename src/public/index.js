/**
 * index.js
 * @author wangbo
 * @since 2020/3/18
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import HeaderArea from "./headerComponent";
import InfoArea from "./infoComponent";
import ContentArea from "./contentComponent";
import FooterArea from './footerComponent';
import './style.less';
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

export default class Main extends Component {
    render() {
        return (
			<Layout>
				<Header className="header"><HeaderArea/></Header>
				<Layout className="main-area">
					<Sider className="side"><InfoArea/></Sider>
					<Content style={{ padding: '20px' }}><ContentArea/></Content>
				</Layout>
				<Footer className="footer"><FooterArea/></Footer>
			</Layout>
        );
    };
}
