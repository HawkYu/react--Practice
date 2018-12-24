

import React, { Component } from 'react';

import { Button, Icon} from 'antd';

class Userone extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    //生命周期函数
    componentDidMount(){

    }
    render() {
        return (
            
            <div>
                我是用户第一个页面
                <br />
                <Button type="primary">Primary</Button>
                <br />
                <Icon type="step-forward" />
            </div>
        );
    }
}

export default Userone;