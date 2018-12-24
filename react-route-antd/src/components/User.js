import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         };
    }
    componentWillMount(){

        console.log(this.props.routes);
    }
    render() {
        return (
            
            <div className="user">
               <div className="content">
                   <div className="left">
                        <Link to="/user">首页</Link>
                        <br /><br />
                        <Link to="/user/usertwo">内容</Link>
                    </div>
                    <div className="right">
                        {
                            this.props.routes.map((route,key)=>{
                                return   <Route key={key} exact path={route.path} component={route.component} />
                            })
                        }
                    </div>
               </div>
            </div>
        );
    }
}

export default User;