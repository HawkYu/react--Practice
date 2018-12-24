import React from 'react';
import { Link } from "react-router-dom";

class ReactForm extends React.Component{
    constructor(props){
        super(props); //用于父子组件传值
        this.state = { //定义数据
            name:"张三",
            sex:"1",
            address:"嘉兴",
            addresss:["北京","上海","嘉兴"],
            hobby:[   
                {  
                    'title':"睡觉",
                    'checked':true
                },
                {  
                    'title':"吃饭",
                    'checked':false
                },
                {  
                    'title':"敲代码",
                    'checked':true
                }
            ],
            info:"",
            list: [
                {
                    aid:'11',
                    title:'我是新闻1111'
                },
                {
                    aid:'222',
                    title:'我是新闻222'
                },
                {
                    aid:'3',
                    title:'我是新闻333'
                },
                {
                    aid:'4',
                    title:'我是新闻4444'
                }
            ]
        }
        //this.handlehobby = this.handlehobby.bind(this)
    }
    handlesubmit=(e)=>{
        //阻止submit的提交事件
        e.preventDefault();
        console.log(this.state.name,this.state.sex,this.state.address,this.state.hobby,this.state.info)
    }
    handlename=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handlesex=(e)=>{
        this.setState({
            sex:e.target.value
        })
    }
    handleaddress=(e)=>{
        this.setState({
            address:e.target.value
        })
    }
    handlehobby=(key)=>{
        let hobby = this.state.hobby
        hobby[key].checked=!hobby[key].checked;
        this.setState({
            hobby:hobby
        })
    }
    handleinfo=(e)=>{
        this.setState({
            info:e.target.value
        })
    }
    
    render(){
        return ( //模板 jsx语法 不加引号 直接写html>
            <form onSubmit={this.handlesubmit}>
                <br /><br />
                用户名：<input type="text" value={this.state.name} onChange={this.handlename} />

                <br /><br />
                性别：<input type="radio" value="1" checked={this.state.sex==="1"} onChange={this.handlesex} />男
                <input type="radio" value="2" checked={this.state.sex==="2"} onChange={this.handlesex} />女

                <br /><br />
                城市：<select value={this.state.address} onChange={this.handleaddress}>
                    {
                        this.state.addresss.map(function(value,key){
                            return <option key={key}>{value}</option>
                        })
                    }
                </select>

                <br /><br />
                爱好：{
                        this.state.hobby.map((value,key)=>{
                            return(
                                <span key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.handlehobby.bind(this,key)} />{value.title}
                                </span>
                            )
                        })
                    }
                
                <br /><br />
                备注：<textarea type="textarea" value={this.state.info} onChange={this.handleinfo} />

                <br /><br />
                <input type="submit" defaultValue="提交" />
                
                <br /><br />
                {
                    this.state.list.map((value,key)=>{
                        return(
                            <li key={key}>
                                <Link to={`/topicsdetail?aid=${value.aid}`}>{value.title}</Link>
                            </li>
                        )
                    })
                }
            </form>
        )
    }
}

export default ReactForm;