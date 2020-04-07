/**
 * index.js
 * @author wangbo
 * @since 2020/3/18
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import FooterArea from '@components/footer';
import routes from '../router';
import HeaderArea from './header';
import InfoArea from './info';
import './style.less';

const { Header, Footer, Sider, Content } = Layout;

export default class Main extends Component {
	render() {
		const children = [];
		routes.childRoutes.forEach(item => {
			children.push(<Route component={item.component} path={item.path} exact={item.exact} />);
		});

		return (
			<Layout>
				<Router>
					<Header className="header">
						<HeaderArea />
					</Header>
					<Layout className="main-area">
						<Sider className="side">
							<InfoArea />
						</Sider>
						<Content style={{ padding: '20px 20px 0 20px', overflow: 'hidden' }}>
							<Switch>{children}</Switch>
						</Content>
					</Layout>
				</Router>
				<Footer className="footer">
					<FooterArea />
				</Footer>
			</Layout>
		);
	}
}
