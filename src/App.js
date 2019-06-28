import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {firebaseConnect} from './firebaseConnect';
import * as firebase from 'firebase';


class App extends Component {

  deleteData = (id) => {
    var connectData = firebase.database().ref('dataForNote');
    connectData.child(id).remove();
    console.log("Xoa thanh cong phan tu co id la : "+id)
  }

  pushData = () =>{
    var connectData= firebase.database().ref('dataForNote');
    connectData.push({
      title:"Ghi chu so 3",
      content:"Noi dung ghi chu so 3"
    })
    console.log('Bang vua them du lieu vao firebase')
  }
  render() {
    console.log(firebaseConnect);
    return (
      <div>
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <button onClick={()=>this.pushData()}>Click de them moi bang ham push</button>
      <button onClick={()=>this.deleteData('-LiUJXGXu8tcpEC0OEIK')}>Click de xoa du lieu</button>
    </div>
      </div>
    );
  }
}

export default App;
