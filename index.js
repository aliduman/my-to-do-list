import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Benim react uygulamam'
    };
  }

  render() {
    return (<h1>{this.state.name}</h1>);
  }
}

render(<App />, document.getElementById('root'));
