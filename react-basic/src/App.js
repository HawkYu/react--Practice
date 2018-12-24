import React, { Component } from 'react';
import './assets/css/index.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Bind from './components/Bind';
//import Lifecycle from './components/Lifecycle';
//import ReactForm from './components/ReactForm';
//import TodoList from './components/TodoList';
//import Farthercom from './components/Farthercom';
//import Childercom from './components/Childercom';

//import Lifecycledetail from './components/Lifecycledetail';
//import ReactFormDetail from './components/ReactFormDetail';
import Home from './components/Home';
import Content from './components/Content';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      /* 单个组件测试
      <div className="App">
        <Farthercom />
      </div>
      */
      /* 路由测试
      <Router>
        <div>
          <header className="title">
            <Link to="/">首页</Link>
            <Link to="/about">用户</Link>
            <Link to="/topics">业务</Link>
          </header>

          <hr />

          <Route exact path="/" component={Bind} />
          <Route path="/about" component={Lifecycle} />
          <Route path="/topics" component={ReactForm} />
        </div>
      </Router>
      */
      /* 路由传值 get传值
      <Router>
        <div>
          <header className="title">
            <Link to="/">首页</Link>
            <Link to="/lifecycle">用户</Link>
            <Link to="/topics">业务</Link>
          </header>

          <hr />

          <Route exact path="/" component={Bind} />
          <Route path="/lifecycle" component={Lifecycle} />
          <Route path="/lifecycledetail/:aid" component={Lifecycledetail} />

          <Route path="/topics" component={ReactForm} />
          <Route path="/topicsdetail" component={ReactFormDetail} />
        </div>
      </Router>
      */
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/content/:id" component={Content} />
          <Route path="/login" component={Login} />
        </div>
      </Router>

    );
  }
}

export default App;
