import React from 'react';

import axios from 'axios'

class Axios extends React.Component{
    constructor(props){
        super(props); //用于父子组件传值
        this.state = { //定义数据
            name: "李四",
            list: []
        }
    }

    run=()=>{
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'; //需要后台允许跨域

        axios.get(api)
        .then((response)=> {
            this.setState({
                list:response.data.result
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return (
            <div>
                <br /><br />
                <h2>我是axios组件</h2>
                <button onClick={this.run} >点击获取axios数据</button>
                <hr />
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return <li key={key}>{value.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Axios;