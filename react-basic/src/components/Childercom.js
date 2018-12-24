import React from 'react';
import PropTypes from 'prop-types';

class Childercom extends React.Component{
    constructor(props){
        super(props); //用于父子组件传值
        this.state = { //定义数据
            name:"aaa",
        }
    }
    getNews=()=>{
        return '11111'
    }

    render(){
        return (
            <div>
                <h2>我是子组件</h2>
                <h3>{this.props.title}</h3>
                <h4>{this.props.num}</h4>
                <button onClick={this.props.run}>调用news父组件的run方法</button>
            </div>
        )
    }
}
//defaultProps   如果父组件调用子组件的时候不给子组件传值，可以在子组件中使用defaultProps定义的默认值
Childercom.defaultProps={ 
    title:'标题'
}

//同行propTypes定义父组件给子组件传值的类型
Childercom.propTypes={
    num:PropTypes.number
}

export default Childercom;