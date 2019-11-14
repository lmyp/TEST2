import React, { Component } from 'react';
import $ from 'jquery'
import axios from 'axios'
// import http from '../server/server'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state ={
          dorm:[],
          inputValue:'',
          inputValue2:'',
          findResult:[]
        }
        this.changeInputValue = this.changeInputValue.bind(this)
        this.changeInputValue2 = this.changeInputValue2.bind(this)
        this.addList = this.addList.bind(this)
        this.updateClick = this.updateClick.bind(this)
        this.deleteClick = this.deleteClick.bind(this)
        this.findUser = this.findUser.bind(this)
    }
    changeInputValue(e) {
        console.log(e.target.value)
        this.setState({
            inputValue: e.target.value,
        })
    }
    changeInputValue2(e) {
        console.log(e.target.value)
        this.setState({
            inputValue2: e.target.value
        })
    }
    // _onNewItem (newItem) {
	// 	const that = this;
	// 	$.ajax({
	// 		url: '/addItem',
	// 		type: 'post',
	// 		dataType: 'json',
	// 		data: newItem,
	// 		success: data => {
	// 			console.log(data);
	// 			const todoList = that.todoSort(data);
	// 			that.setState({ 
	// 				todoList 
	// 			});
	// 		},
	// 		error: err => {
	// 			console.log(err);
	// 		}
	// 	})
	// }
    addList() {
        // var that = this
        var name = this.state.inputValue
        var age = this.state.inputValue2
        let datas = [name,age]
        console.log('datas:',datas)
        axios.post('http://localhost:9093/api/user/addUser',{
            name:name,
            age:age
        }).then(res=> {
                console.log('res:',res.data)
                let data = JSON.parse(JSON.stringify(res.data));
                var dorm = [];
                for (var i = 0; i < data.length; i++) {
                    dorm.push(data[i]);
                }
                this.setState({
                    dorm: data
                })
            })
        // $.ajax({
		// 	url: 'http://localhost:9093/api/user/addUser',
		// 	type: 'POST',
        //     dataType: 'json',
        //     contentType: "application/json",
		// 	data: datas,
		// 	success: function(data){
		// 		console.log(data);
		// 		// that.setState({ 
		// 		// 	dorm :data
		// 		// });
		// 	}.bind(this),
		// 	error: err => {
		// 		console.log(err);
		// 	}
        // })
    }
    updateClick(e) {
        var _id = this.state.dorm
       console.log('id:',_id)
        
//     var itemli = document.getElementsByTagName("li");
//     for(var i = 0; i<itemli.length; i++){
// 　　　　itemli[i].index = i; 
// 　　　　itemli[i].onclick = function(){
               
// 　　　　　　console.log(this.index,this.innerText); 
// 　　　　}
//     }
 
        var name = this.state.inputValue
        var age = this.state.inputValue2
        axios.post('http://localhost:9093/api/user/updateUser',{
            _id:_id,
            name: name,
            age:age
        }).then(res=> {
                console.log('update:',res)
                // let data = JSON.parse(JSON.stringify(res.data));
                // var dorm = [];
                // for (var i = 0; i < data.length; i++) {
                //     dorm.push(data[i]);
                // }
                // this.setState({
                //     dorm: data
                // })
            })
    }
    // 删除
    deleteClick(e) {
    //     var _id = this.state.dorm
    //    console.log('id:',_id)
        
        var name = this.state.inputValue
        var age = this.state.inputValue2
        axios.post('http://localhost:9093/api/user/deleteUser',{
            // _id:_id,
            name: name,
            age:age
        }).then(res=> {
                console.log('delete:',res)
            })
    }
    // 查询
    findUser(e) {
        //     var _id = this.state.dorm
        //    console.log('id:',_id)
            
            var name = this.state.inputValue
            var age = this.state.inputValue2
            axios.post('http://localhost:9093/api/user/findUser',{
                // _id:_id,
                name: name,
                age:age
            }).then(res=> {
                    console.log('findUser:',res.data)
                    this.setState({
                        findResult:res.data
                    })
                })
        }
     // "proxy": "http://localhost:9093/data"
    componentDidMount() {
        var name = this.state.inputValue
        var age = this.state.inputValue2
        let datas = [name,age]
            $.ajax({
                "url": `http://localhost:9093/api/user/findUser`,
                method: "GET",
                // get要和userApi中router.get一样，post同为post
                crossDomain: true,
                data: datas,
                // headers:{'Content-Type':'application/jspn;charset=UTF-8'}
            })
            .then((result) => {
                console.log(result)
                let data = JSON.parse(JSON.stringify(result));
                console.log('data:',data)
                var dorm = [];
                for (var i = 0; i < data.length; i++) {
                    dorm.push(data[i]);
                }
                this.setState({
                    dorm: data
                })
            }, (err) => {
                //出错
                console.log(err);
            })
            console.log("state:",this.state)
          
    }
    render() {
        return (  
            <div className="list">
            <p>姓名:<input type="text" value={this.state.inputValue} onChange={this.changeInputValue} 
            // ref={(input) => {this.input = input}}
            ></input></p>
            <p>年龄:<input type="text" value={this.state.inputValue2} onChange={this.changeInputValue2} 
            // ref={(input) => {this.input = input}}
                        ></input></p>
            <button onClick={this.addList}>增加</button>
            <button onClick={this.findUser}>查询</button>
        <div>查询结果为:
            {
                this.state.findResult.map((item,index) => {
                    return (
                        <div className="find" key={index}>
                            <p>姓名:{item.name}</p>
                            <p>年龄:{item.age}</p>
                        </div>
                    )
                })
            }
        </div>
            <ul id="menu">
               {
                    this.state.dorm.map((user,i)=>{
                    return (
                        
                        <div key={i}>
                            {/* <span className="userId">{user._id}</span> */}
                            <span className="name">{user.name}</span>
                            <span className="age">{user.age}</span>
                            <span><button onClick={this.updateClick}>更新</button></span>
                            <span><button onClick={this.deleteClick}>删除</button></span>
                        </div>
                        
                    )       
                })}
            </ul> 
            </div>
        );
    }
}
 
export default Home;