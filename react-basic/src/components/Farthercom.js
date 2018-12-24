import React from 'react';

//import Childercom from './Childercom';
//import Axios from './Axios';
import Lifecycle from './Lifecycle';

class Farthercom extends React.Component{
    constructor(props){
        super(props); //用于父子组件传值
        this.state = { //定义数据
            name:"aaa",
            num: 4
        }
    }
    run=()=>{
        alert('我是父组件的run方法')
    }

    render(){
        return (
            /* 父子组件传值
            <br /><br />
            <h2>我是父组件</h2>
            <Childercom title={this.state.name} num={this.state.num} run={this.run} ref="childer"></Childercom>
            */
            /* axios
            <Axios></Axios>
            */
           <Lifecycle></Lifecycle>
        )
    }
}

export default Farthercom;