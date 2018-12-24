import React, { Component } from 'react';
import './assets/css/index.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import routes from './model/routes'; //分离routes

import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

class App extends Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      /* js实现路由跳转
      <Router>
        <div>
          <header className="title">
            <Link to="/">首页</Link>
            <Link to="/content">内容</Link>
            <Link to="/user">用户</Link>
          </header>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/content/" component={Content} />
          <Route path="/user/" component={User} />
        </div>
      </Router>
      */
     /* 嵌套路由分离
     <Router>
        <div>
          <header className="title">
            <Link to="/">首页</Link>
            <Link to="/content">内容</Link>
            <Link to="/user">用户</Link>
          </header>

          <hr />
          {
            routes.map((route,key)=>{
                if(route.exact){
                  return (
                      <Route key={key} exact path={route.path}                     

                        render={props => (
                          <route.component {...props} routes={route.routes} />
                        )}

                      />
                    )
                }else{
                  return (
                    <Route key={key} path={route.path}                     

                      render={props => (
                        <route.component {...props} routes={route.routes} />
                      )}

                    />
                  )
                }
            })
          }
        </div>
      </Router>
      */
     //layout布局
     <div className="app">
     <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
      </div>
    );
  }
}

export default App;
