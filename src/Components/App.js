import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import TableData from './TableData';
import Search from './Search';
import AddUser from './AddUser';
import DataUser from './Data.json';
const uuidv1 =require('uuid/v1');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data:DataUser,
      searchText:""
    }
  }

  getNewUserData = (name,tel,Permission) =>{

    var item ={};
    item.id= uuidv1();
    item.name= name;
    item.tel= tel;
    item.Permission =Permission;
    var items = this.state.data;

    items.push(item);
    this.setState({
      data:items
    });
    console.log('ket noi ok ok');
    console.log(this.state.data);
  }

  getTextSearch = (dl) =>{
    this.setState({
      searchText:dl
    });
    // console.log('Du lieu bo nhan duoc la : '+this.state.searchText);
  }

  doiTrangThai = ()=>{
    this.setState({
      hienThiForm: !this.state.hienThiForm
    }
    );
  }
  
  thongBao = ()=> {alert("Ket noi thanh cong");}
  render() {
    var ketQua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketQua.push(item);
      }
    });
    console.log(ketQua);
    // console.log(this.state.data);
    return (

      <div >
          <Header/>
          <div className="searchForm">
            <div className="container">
              <div className="row">
                <Search 
                 checkConnectProps={(dl)=>this.getTextSearch(dl)}
                 ketNoi={()=>this.doiTrangThai()} hienThiForm={this.state.hienThiForm}/>
                <TableData  dataUserProps={ketQua}/>
                <AddUser add={(name,tel,Permission)=>this.getNewUserData(name,tel,Permission  )} hienThiForm={this.state.hienThiForm}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
