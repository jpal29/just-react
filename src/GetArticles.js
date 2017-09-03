import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './App.css';
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
        <Row>
          {this.state.articles.map((article, index) =>
            <a href={article.url} key={index}>
              <Col className="Article-column" md={3}>
                <h4>{article.title}</h4>
                <span>{article.description}</span>
              </Col>
            </a>
          )}
        </Row>
      </div>
    )
  }
}

export default GetArticles;