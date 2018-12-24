

import React, { Component } from 'react';

class ReactFormDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    //生命周期函数
    componentDidMount(){


        //获取get的传值
        console.log(1111,this.props);  

    }
    render() {
        return (
            
            <div>

                我是业务详情组件
            </div>
        );
    }
}

export default ReactFormDetail;