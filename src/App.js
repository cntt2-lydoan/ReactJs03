import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // var p1 = {
    //   ten:"man hinh",
    //   gia:90
    // }
    // console.log(p1);
    // var p2 = {...p1} ;
    // p2.gia=100;
    // console.log(p2);
    // console.log(p1);

    var a1=[3,5,6,7];
    var a2 = [...a1];
    console.log(a1);
    a2[0] = 100;
    console.log(a1);
    console.log(a2);

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
