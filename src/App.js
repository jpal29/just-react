import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import GetArticles from './ArticleComponents/GetArticles.js';
import SourceList from './ArticleComponents/SourceList.js';
import CategoryList from './ArticleComponents/CategoryList';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={CategoryList} />
        <Route exact path='/:sourcedescription' component={SourceList} />
        <Route exact path='/:sourcedescription/:sourceid/articles' component={GetArticles} />
      </Switch>
    );
  }
}

export default App;
