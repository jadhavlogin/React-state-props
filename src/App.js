import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChildComponent from './ChildComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      counter: 10
    };
  }
  updateCnt(){
    this.setState({
      counter: this.state.counter + 5
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React State and Props</h1>
        </header>
        <p className="App-intro">
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <h2>Parent Counter - {this.state.counter}</h2>
        </p>
        <ChildComponent parentCounter={this.state.counter} updateCounter={this.updateCnt.bind(this)}></ChildComponent>
      </div>
    );
  }
}

export default App;
