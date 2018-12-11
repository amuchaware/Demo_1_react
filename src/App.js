import React, { Component } from 'react';
import logo from './biz4solutions-logo.png';
import './App.css';

import {withAuthenticator} from 'aws-amplify-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <a
            className="App-link"
            href="https://biz4solutions.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Welcome to Biz4solutions!.
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator (App, { includeGreetings : true });
