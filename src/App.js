import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  var redux = require('redux');    
  var oldState= {
    num:["man hinh","chuot","ban phim"],
    editStatus:true
  }
  var reducer1 = (state = oldState,action) => {
    switch (action.type) {
      case "CHANGE_EDIT_STATUS":
        return {...state,editStatus:!state.editStatus}
        break;
    
      default:
        break;
    }
    return state;
  }
  var store1 = redux.createStore(reducer1);
  console.log(store1.getState());
  store1.dispatch({type:"CHANGE_EDIT_STATUS"})
  console.log(store1.getState());

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default App;
