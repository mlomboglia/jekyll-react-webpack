import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';
import './App.scss';
import myimg from './assets/1.png';

class App extends Component {
  render() {
    return <h1>
      Hello World!
      <img src={handWave} />
    </h1>;
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
