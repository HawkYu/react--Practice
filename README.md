一：安装，创建项目
cnpm install -g create-react-app （npm版本不能低于5.2）
create-react-app reactdemo（reactdemo为项目名）
cd  reactdemo
npm start 

二：脚手架目录分析
1：index.js 入口文件 App.js根组件
2：在src下新建组件文件夹components 静态资源文件夹assets
3：assets新建文件夹 images css 
4：将src下index.css和App.css放入assets/css内 src下logo.svg放入asets/images内
5：修改路径 App.js和index.js 改为import logo from './assets/images/logo.svg';等

三：组件
1：jsx语法 即js和html混写模式 在render内 return出html
2：开发模式为 写子组件 挂载到根组件APP.js上 再通过路由在根组件渲染子组件
3：创建组件 
 3.1：在components内新建组件 名称首字母大写 eg：Home.js
 3.2：首先引入React 及 Component 
 3.2：创建Home组件 class Home extends Component{ }
 3.3：render(){ }内写html
 3.4：把组件暴露出来 export default Home;
eg:
import React, { Component } from 'react';
class Home extends Component{
    render(){
        return (
            <div><h2>hello React</h2></div>
        )
    }
}
export default Home;
4：引入Home组件
 4.1：在App.js内 import Home from './components/Home'
 4.2：在App.js内的render内挂载组件 <Home></Home> 或 <Home>
5：定义绑定数据
 5.1：在constructor内首先加super() 使用this前调用 super(props) 用于父子组件传值
 5.2：定义数据 this.state={ name: "张三"} 使用 {this.state.name}
6：绑定属性
 title={this.state.title} 不加引号
 class 改为 className 因为jsx语法 class是js关键字
 class 要变成 className   
 style属性和以前的写法有些不一样
   <div style={{'color':'blue'}}>{this.state.title}</div>
   <div style={{'color':this.state.color}}>{this.state.title}</div>
7：单标签必须有结束符 <hr />
8：引入图片 
 8.1 import logo from ‘../assets/images/1.jpg’ <img src={logo} />
 8.2 <img src={require(‘../assets/images/1.jpg)} />
 8.3 <img src="https://www.baidu.com/1.npg" />
9：循环数据
  this.state={ list:['111','222','333']}
  let list = this.state.list.map(function(value,key){
    return <li key={key}>{value}</li>
  })
10：绑定方法函数
 10.1：执行函数 onClock={this.run} run(){ alert("执行了")}
 10.2：获取state数据 三种方法 改变this指向
   第一种
	run(){
		alert(this.state.name)
  	}
  	<button onClick={this.run.bind(this)}>按钮</button>
   第二种：构造函数中改变
	this.run = this.run.bind(this);
	run(){
		alert(this.state.name)
 	 }
 	<button onClick={this.run>按钮</button>
   第三种：
	run=()=> {
    		alert(this.state.name)
 	 }

	<button onClick={this.run>按钮</button>
 10.3：改变state数据
   第一种：
	<button onClick={this.setData}>改变state里面的值</button>
	setData=()=>{
        	this.setState({
            		msg:"我是一个home组件 这是改变后的值"
        	})
    	}
   第二种：
	<button onClick={this.setName.bind(this,"李四")}>改变state里面的值</button>
	setName=(str)=>{
        	this.setState({
            		msg:str
        	})
    	}
11：绑定事件对象
    run=(event)=> {
        event.target.style.color="red"
    }
    event.target.getAttribute('aid')
12：获取表单的值
    12.1：监听表单的改变事件                        onChange
    12.2：在改变的事件里面获取表单输入的值           事件对象 或者 ref获取
    12.3：把表单输入的值赋值给username              this.setState({})
    12.4：点击按钮的时候获取 state里面的username     this.state.username
13：表单事件
    <input ref="msg" onkeyUp={this.inputKeyUp} />
    <input ref="msg" onkeyDown={this.inputKeyDown} />
    if(e.keyCode==13) //按下enter
14：类似vue双向数据绑定
    <input value={this.state.user} onChange={this.changdata} />
    changdata=(e)=> {
        this.setState({
            user:e.target.value
        })
    }
15：约束性和非约束性组件:
    非约束性组:<input type="text" defaultValue="a" />   这个 defaultValue 其实就是原生DOM中的 value 

属性。这样写出的来的组件，其value值就是用户输入的内容，React完全不管理输入的过程。
    约束性组件：<input value={this.state.username} type="text" onChange={this.handleUsername}  /> 

这里，value属性不再是一个写死的值，他是 this.state.username, this.state.username 是由 

this.handleChange 负责管理的。这个时候实际上 input 的 value 根本不是用户输入的内容。而是onChange 事

件触发之后，由于 this.setState 导致了一次重新渲染。不过React会优化这个渲染过程。看上去有点类似双向

数据绑定
         
四：获取表单数据
text radio select checkbox textarea

五：缓存数据 
HTML5 localStorage - 只能保存json字符串 不能保存数组
1：执行缓存
localStorage.setItem('todolist',JSON.stringify(tempList));
可以在调试框application内看到缓存数据

2：获取缓存数据：
首先 刷新获取localStorage方法 生命周期函数  页面加载就会触发 componentDidMount
然后取缓存 var todolist=JSON.parse(localStorage.getItem('todolist'));  放到函数内

另：可以封装缓存方法
var storage={
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    get(key){
        return JSON.parse(localStorage.getItem(key));
    },
    remove(key){
        localStorage.removeItem(key)
    }
};
export default storage;

使用：
1：引入 
import storage from '../model/storage';
2：使用
storage.set('todolist',tempList);  设置
var todolist=storage.get('todolist');  获取

五：父子组件传值

1：父组件给子组件传值和传方法
父组件news：
<Header title={this.state.title}  run={this.run}  news={this} />
子组件header: 
this.props.title 	可获取父组件title值
this.props.run   	可获取父组件run方法
this.props.news.getData 获取news组件的getData方法

2：子组件给父组件传值和传方法
父组件news：
getChildData=(result)=>{
  this.setState({
    msg:result
   })
}
或者直接：
this.refs.footer.state.msg  //需要dom加载完成
this.refs.header.run()
子组件header：
onClick={this.props.news.getChildData.bind(this,'我是子组件的数据')}

3：defaultProps  子组件中使用defaultProps定义的默认值
Header.defaultProps={
  title:'标题'
}

4：propTypes  定义父组件给子组件传值的类型
首先需要引入 import PropTypes from 'prop-types';
Childercom.propTypes={
  num:PropTypes.number
}

六：react获取服务器api接口数据   axios fetch-jsonp 看后台是那种 跨域问题

axios 
1：安装axios模块npm install axios  --save
2：在哪里使用就在哪里引入import axios from 'axios'
3：使用
var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'; //需要后台允许跨域

axios.get(api)
.then((response)=> {  //需要修改文档中的指向
    this.setState({
        list:response.data.result
    })
})
.catch(function (error) {
    console.log(error);
});

fetch-jsonp 和axios使用一样

七：react生命周期 //看图即可

八：react 路由的配置

官方文档 https://reacttraining.com/react-router/web/example/basic
1：安装 cnpm install react-router-dom --save
2：引入 import { BrowserRouter as Router, Route, Link } from "react-router-dom";
3：使用
<Router> //需全部包裹在router内 
<Link to="/">首页</Link>
<Link to="/news">新闻</Link>
<Link to="/product">商品</Link>

<Route exact path="/" component={Home} />
<Route path="/news" component={News} />    
<Route path="/product" component={Product} />   
</Router>
exact表示严格匹配

九：动态传值
1：动态路由传值 
1.1 <Route path="/lifecycledetail/:aid" component={Lifecycledetail} /> 配置
1.2 <Link to={`/lifecycledetail/${value.aid}`}>{value.title}</Link> 跳转
1.3 componentDidMount()内 this.props  获取值

2：路由get传值
2.1 <Route path="/topicsdetail" component={ReactFormDetail} /> 配置
2.1 <Link to={`/topicsdetail?aid=${value.aid}`}>{value.title}</Link> 跳转
2.3 componentDidMount()内 this.props  获取值 也可以componentDidMount()内 this.props  获取值 也可以

安装node.js安装url模块

3：localstorage 本地存储

十：react解析html
文档：https://reactjs.org/docs/dom-elements.html
使用：<div className="p_content"  dangerouslySetInnerHTML={{__html: this.state.list.content}}> 

</div>

十一：js实现路由跳转
1：引入Redirect import {BrowserRouter as Router,Route,Link,Redirect,withRouter} from "react-

router-dom";
2：定义一个flag
this.state = { 
   loginFlag:false            
};
3：render里面判断flag 来决定是否跳转 //注意在render下 return上
if(this.state.loginFlag){
   return <Redirect to='/Home' />;
}
4：要执行js跳转 通过js改变loginFlag的状态 改变以后从新render 就可以通过Redirect自己来跳转
this.setState({
   loginFlag: true
})

十二：路由嵌套
在跳转页面设置
<div className="left">
  <Link to="/content">首页</Link>
  <br /><br />
  <Link to="/content/contenttwo">内容</Link>
</div>
<div className="right">
  <Route exact path="/content" component={Contentone} />
  <Route path="/content/contenttwo" component={Contenttwo} />
</div>

路由分离
1：新建路由路径文件
const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/content",
    component: Content,
    routes:[   /*嵌套路由*/
        {
          path: "/content/",
          component: Contentone
        },
        {
          path: "/content/contenttwo",
          component: Contenttwo
        }
    ]
  },

2：引入
import routes from './model/routes'; //分离routes
3：
根组件使用
{
  routes.map((route,key)=>{
    if(route.exact){
      return (
        <Route key={key} exact path={route.path}                     
          render={props => (
            <route.component {...props} routes={route.routes} />
          )}
        />
      )
    }else{
      return (
        <Route key={key} path={route.path}                     
        render={props => (
          <route.component {...props} routes={route.routes} />
        )}
        />
      )
    }
  })
}
子组件使用
<div className="left">
    <Link to="/user">首页</Link>
    <br /><br />
    <Link to="/user/usertwo">内容</Link>
</div>
<div className="right">
    {
        this.props.routes.map((route,key)=>{
            return   <Route key={key} exact path={route.path} component={route.component} />
        })
    }
</div>


十三：React UI框架 Ant Design
1.antd官网：
https://ant.design/docs/react/introduce-cn

2、React中使用Antd
	1、安装antd   npm install antd --save    /   yarn add antd     /  cnpm install antd --save
	2、在您的react项目的css文件中引入 Antd的css
		@import '~antd/dist/antd.css';
	3、看文档使用：
		如使用Button： 
		1、在对应的组件中引入Antd        import { Button } from 'antd';
		2、<Button type="primary">Primary</Button>

3、React中使用Antd高级配置，按需引入css样式
我们现在已经把组件成功运行起来了，但是在实际开发过程中还有很多问题，例如上面的例子实际上加载了全部

的 antd 组件的样式（对前端性能是个隐患）。
	1、安装antd         npm install antd --save
	2、安装（react-app-rewired）一个对 create-react-app 进行自定义配置的社区解决方案 
	   	yarn add react-app-rewired    /  cnpm install  react-app-rewired --save
	3、修改 package.json
		react-scripts 需改为react-app-rewired
		"scripts": {
    			"start": "react-app-rewired start",
    			"build": "react-app-rewired build",
    			"test": "react-app-rewired test --env=jsdom",
    			"eject": "react-app-rewired eject"
 	 	}
	4、在项目根目录创建一个 config-overrides.js 用于修改默认配置
	5、安装babel-plugin-import   babel-plugin-import是一个用于按需加载组件代码和样式的 babel 插

件
		yarn add babel-plugin-import   /  cnpm install babel-plugin-import --save
	6、修改 config-overrides.js
		const { injectBabelPlugin } = require('react-app-rewired');

  		module.exports = function override(config, env) {
   			config = injectBabelPlugin(
     		   	['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        	   	config,
  	  		);
   	 		return config;
 	 	};
	7、然后移除前面在 src/App.css 里全量添加的 @import '~antd/dist/antd.css'; 直接引入组件使用

就会有对应的css
                                                        













 
