/*

实现js跳转路由：https://reacttraining.com/react-router/web/example/auth-workflow

1、要引入Redirect

    import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
    } from "react-router-dom";

2、定义一个flag
        this.state = { 
                loginFlag:false            
        };

3、render里面判断flag 来决定是否跳转

        if(this.state.loginFlag){

            return <Redirect to={{ pathname: "/" }} />;
        }

4、要执行js跳转

        通过js改变loginFlag的状态

        改变以后从新render 就可以通过Redirect自己来跳转


*/
import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter as Router,Route,Link,Redirect,withRouter} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loginFlag:false
         };
    }

    handlesubmit=(e)=>{
        //阻止submit的提交事件
        e.preventDefault();
        console.log(this.refs.name.value,this.refs.password.value)
        if(this.refs.name.value == 'admin' && this.refs.password.value =='123'){
            this.setState({
                loginFlag: true
            })
        }else{
            alert('登录失败')
        }
        
    }
    componentDidMount(){
        //this.requestData()
    }
    render() {
        if(this.state.loginFlag){
            return <Redirect to='/' />;
        }
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    用户名：<input type="text" ref="name" />
                    <br /><br />
                    密码：<input type="text" ref="password" />
                    <br /><br />
                    <input type="submit" defaultValue="提交" />
                </form>
            </div>
        );
    }
}

export default Home;