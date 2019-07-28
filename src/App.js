import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://res.cloudinary.com/pieol2/image/upload/v1541611076/melly.jpg" className="App-logo" alt="logo" />
            <p>Melly use you head </p>
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
