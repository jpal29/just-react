import React, { Component } from 'react';
import { Row, Col, Thumbnail, Grid } from 'react-bootstrap';
import '../App.css';
class GetArticles extends Component {

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      sourceid: this.props.match.params.sourceid
    }
  }

  componentDidMount() {
    fetch('https://newsapi.org/v1/articles?source=' + this.state.sourceid + '&sortBy=latest&apiKey=c4dfbc715df444bd9e673e5ca0e0f005')
    .then(res => res.json())
    .then(articles => {
      this.setState({articles: articles.articles});
      console.log('Retrieved the articles');
    });
  }

  render() {
    return (
      <div>
        <h1>Articles</h1>
        <Grid fluid={true}>
          <Row className=".Article-row">
            {this.state.articles.map((article, index) =>
              <a href={article.url} key={index}>
                <Col md={3}>
                  <Thumbnail className="Article-thumbnail" src={article.urlToImage} alt="242x200">
                    <h4>{article.title}</h4>
                    <p>{article.description}</p>
                  </Thumbnail>
                </Col>
              </a>
            )}
          </Row>
        </Grid>
      </div>
    )
  }
}

export default GetArticles;
