/**
 * index.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { HeartOutlined } from '@ant-design/icons';

import './style.less';

class FooterArea extends Component {
    render() {
        return (
            <div className="footer-inner">
                <div className="copyright">
                    <span className="exturl" data-url="aHR0cDovL3d3dy5iZWlhbi5taWl0Lmdvdi5jbg==">
                        陕ICP备19011549号{' '}
                    </span>
                    <span className="exturl" data-url="aHR0cDovL3d3dy5iZWlhbi5taWl0Lmdvdi5jbg==">
                        陕公网安备61010402000400号{' '}
                    </span>
                    © <span itemProp="copyrightYear">{new Date().getFullYear()} </span>
                </div>

                <div className="busuanzi-count">
                    <script async="" src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js" />
                    <span className="post-meta-item-icon">
                        <HeartOutlined style={{ color: 'red' }} /> 你是来本站的第
                    </span>
                    <span className="site-uv" title="总访客量">
                        <span className="busuanzi-value" id="busuanzi_value_site_uv">
                            1288
                        </span>
                        位小朋友
                    </span>
                </div>
            </div>
        );
    }
}

export default FooterArea;
