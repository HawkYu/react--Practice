

import React, { Component } from 'react';

class Lifecycledetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    //生命周期函数
    componentDidMount(){


        //获取动态路由的传值
        console.log(1111,this.props.match.params.aid);  

    }
    render() {
        return (
            
            <div>

                我是新闻详情组件
            </div>
        );
    }
}

export default Lifecycledetail;