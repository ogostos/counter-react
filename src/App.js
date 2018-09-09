import React, { Component } from 'react';
import logo from './logo.svg';
import Counter from './components/Counter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       counterCompNum: 1
    }
  }

  addCounter = () => {
    this.setState(({counterCompNum}) => ({
      counterCompNum: ++counterCompNum
    }))
  }

  render() {
    const { counterCompNum } = this.state;
    const counters = Array.from({length: counterCompNum}).map((x, i) => <Counter key={i} />);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Counter App</h1>
        </header>
        <button className="gold-button" onClick={this.addCounter}>
          {'Add counter'}
        </button>
        {counters}
      </div>
    );
  }
}

export default App;
