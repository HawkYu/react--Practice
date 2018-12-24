import React from 'react';
import '../assets/css/index.css';

class Test extends React.Component{
    constructor(props){
        super(props); //用于父子组件传值
        this.state = { //定义数据
            name:"李四",
            list1:["1111","2222","3333"],
            msg:"我是一个message",
            user:"用户"
        }
    }

    //执行函数
    run=(event)=> {
        event.target.style.color="red"
    }

    changevalue=(e)=> {
        console.log(e.target.value,this.refs.msg.value) //两种获取值方法
        this.setState({
            msg:e.target.value
        })
    }

    getchangevalue=()=> {
        alert(this.state.msg)
    }

    //双向数据绑定
    changdata=(e)=> {
        this.setState({
            user:e.target.value
        })
    }

    render(){
        return (
            <div>
                <br /><br />
                <button onClick={this.run}>事件对象</button>
                <br /><br />
                <input ref="msg" onChange={this.changevalue} /><button onClick={this.getchangevalue}>获取input值</button>
                <br /><br />
                <h2>双向数据绑定</h2>
                <input value={this.state.user} onChange={this.changdata} />
                {this.state.user}
            </div>
        )
    }
}

export default Test;