import React, { Component } from 'react';
import Profile from './profile/Profile';
import Introduce from './introduce/Introduce';

import { Layout } from 'antd';
import './style.css';
const { Header, Content, Footer, Sider } = Layout;

class index extends Component {

    render() {
        return (
            <div>
                <Layout>
                    <div className="grid col-pc-1-5">
                        <Sider
                            style={{
                                overflow: 'auto',
                                height: '100vh',
                                position: 'fixed',
                                left: 0,
                            }}
                        >
                            <Profile />
                        </Sider>
                    </div>
                    <div className="grid col-pc-5-5">

                        <Layout style={{ marginLeft: 200 }}>
                            {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
                            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                                <div style={{ padding: 24, background: '#fff' }}>
                                    <Introduce />
                                </div>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>©2019 Created by Đức Anh</Footer>
                        </Layout>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default index;