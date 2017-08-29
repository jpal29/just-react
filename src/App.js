import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleClock from './Toggle.js';
import Greeting from './Greeting.js';
import NoteCollection from './NoteCollection.js';

class App extends Component {

  render() {
    return (
      <div>
        <Greeting />
        <ToggleClock />
        <NoteCollection />
      </div>
    );
  }
}

export default App;
