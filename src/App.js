import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import GetArticles from './ArticleComponents/GetArticles.js';
import SourceList from './ArticleComponents/SourceList.js';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={SourceList} />
        <Route path='/:sourceid/articles' component={GetArticles} />
      </Switch>
    );
  }
}

export default App;
