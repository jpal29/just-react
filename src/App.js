import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetArticles from './ArticleComponents/GetArticles.js';
import SourceList from './ArticleComponents/SourceList.js';

class App extends Component {

  render() {
    return (
      <div>
        <SourceList />
      </div>
    );
  }
}

export default App;
