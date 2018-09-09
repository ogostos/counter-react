import React, { Component } from 'react';
import API from '../API';

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
       counter: 'fetching...',
       min: -50,
       max: 50
    }
  }

  componentDidMount = async () => {
    const { min, max } = this.state;
    const randomNumber = await API.getRandomNumber(min, max);
    this.setState({
      counter: randomNumber
    })
  }

  dec = () => {
    this.setState(({ counter }) => ({
      counter: --counter
    }));
  }

  inc = () => {
    this.setState(({ counter }) => ({
      counter: ++counter
    }));
  }

  randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  rand = () => {
    const { min, max } = this.state;
    const randomNumber = this.randomNumber(min, max);
    this.setState({
      counter: randomNumber
    })
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="counterContainer">
        <div className="counter">
          {counter}
        </div>
        <button onClick={this.rand}>
          {'Randomize'}
        </button>
        <button onClick={this.dec}>
          {'Decrement'}
        </button>
        <button onClick={this.inc}>
          {'Increment'}
        </button>
      </div>
    )
  }
}
