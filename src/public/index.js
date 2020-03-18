/**
 * index.js
 * @author wangbo
 * @since 2020/3/18
 * @github https://github.com/BoWang816
 */
import React, { Component, Fragment } from 'react';
import Header from "./headerComponent";
import Info from "./infoComponent";
import Content from "./contentComponent";

export default class Main extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Info/>
                <Content/>
            </Fragment>
        );
    };
}
