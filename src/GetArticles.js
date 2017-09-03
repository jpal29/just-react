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
        <Row className="Article-row">
          {this.state.articles.map((article, index) =>
            <Col md={3}>{article.title}</Col>
          )}
        </Row>
      </div>
    )
  }
}

export default GetArticles;
