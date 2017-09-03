import React, { Component } from 'react';

class GetArticles extends Component {

  constructor(props){
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    fetch(' https://newsapi.org/v1/articles?source=al-jazeera-english&sortBy=latest&apiKey=c4dfbc715df444bd9e673e5ca0e0f005')
    .then(res => res.json())
    .then(articles => this.setState({articles: articles.articles}));
  }

  render() {
    return (
      <div>
        <h1>Articles</h1>
        <ul>
        {this.state.articles.map((article, index) =>
          <div key={index}>{article.title}</div>
        )}
        </ul>
      </div>
    )
  }
}

export default GetArticles;
