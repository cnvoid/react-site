import React from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';

import './assets/css/common.styl'

import {connect} from 'react-redux'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="GreenH">
          Edit <code>src/App.js</code> and save7777777777777777 765364536456456to reload.
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

export default App;
