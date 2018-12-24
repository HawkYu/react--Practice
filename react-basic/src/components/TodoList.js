import React from 'react';
import '../assets/css/index.css';
import storage from '../model/storage';

class TodoList extends React.Component{
    constructor(props){
        super(props); //用于父子组件传值
        this.state = { //定义数据
            list:[]
        }
    }
    addData=(e)=>{
        if(e.keyCode == 13){
           let tempList=this.state.list;
           tempList.push({
                title: this.refs.title.value,
                checked: false
            });
            this.setState({
                list:tempList
            })
            this.refs.title.value=""; 

            storage.set('todolist',tempList)
        }
    }
    deletelist=(key)=>{
        let list=this.state.list;
        list.splice(key,1);
        this.setState({
            list:list
        })
        storage.set('todolist',list)
    }
    checkboxchange=(key)=>{
        let list=this.state.list;
        list[key].checked=!list[key].checked
        this.setState({
            list:list
        })
        storage.set('todolist',list)
    }
    //生命周期函数  页面加载就会触发
    componentDidMount(){
        //获取缓存的数据
        let todolist=storage.get('todolist');
        if(todolist){
            this.setState({
                list:todolist
            })
        }
    }
    render(){
        return (
            <div>
                <header className="title">TodoList: 　<input ref="title" onKeyUp={this.addData} /> </header>
                <h2>待办事项</h2>
                <hr />
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(!value.checked){
                                return(
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onClick={this.checkboxchange.bind(this,key)}></input>
                                        {value.title}
                                        <button onClick={this.deletelist.bind(this,key)}>删除列表</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <h2>完成事项</h2>
                <hr />
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(value.checked){
                                return(
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onClick={this.checkboxchange.bind(this,key)}></input>
                                        {value.title}
                                        <button onClick={this.deletelist.bind(this,key)}>删除列表</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;