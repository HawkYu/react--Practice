import React from 'react';
import logo1 from '../assets/images/1.jpg';
import '../assets/css/index.css';

class Home extends React.Component{
    constructor(props){
        super(props); //用于父子组件传值
        this.state = { //定义数据
            name:"张三",
            list1:["1111","2222","3333"],
            msg:"我是一个message",
            user:"用户"
        }
        this.getmessage = this.getmessage.bind(this) //第二种方法，在构造函数指定
    }

    //执行函数
    run(){
        alert("执行了")
    }

    //获取state数据 三种方法
    run1(){ //第一种方法
        alert(this.state.name)
    }

    getmessage(){ //第二种方法
        alert(this.state.msg)
    }

    getdata=()=> { //第三种方法 常用
        alert(this.state.user)
    }

    改变state数据
    setData=()=>{
        this.setState({
            msg:"我是一个home组件 这是改变后的值"
        })
    }

    setName=(str)=>{
        this.setState({
            msg:str
        })
    }

    render(){
        let listresult1 = this.state.list1.map(function(key,value){
            return <li key={key}>{value}</li>
        })
        return ( //模板 jsx语法 不加引号 直接写html
            <div>
                <h2>{this.state.name}</h2>
                <img src={logo1} className="logo1" alt="logo1" />
                <br />
                <ul>
                    {listresult1}
                </ul>
                <br />
                <button onClick={this.run}>按钮</button>
                <br /><br />
                <button onClick={this.run1.bind(this)}>按钮1</button>
                <br /><br />
                <button onClick={this.getmessage}>按钮2</button>
                <br /><br />
                <button onClick={this.getdata}>按钮3</button>
                <br /><br />
                <button onClick={this.setData}>改变state里面的值</button>
                <br /><br />
                <button onClick={this.setName.bind(this,"李四")}>改变state里面的值</button>
                <br /><br />
            </div>
        )
    }
}

export default Home;