/**
 * index.js
 * @author wangbo
 * @since 2020/3/20
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Result, Button } from 'antd';

export default class PageNotFound extends Component {
    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button
                        type="primary"
                        onClick={() => {
                            this.history.push('/');
                        }}>
                        Back Home
                    </Button>
                }
            />
        );
    }
}
