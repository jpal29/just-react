import React, { Component } from 'react';
import { Row, Col, Thumbnail, Grid } from 'react-bootstrap';
import '../App.css';
class GetArticles extends Component {

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      articleError: false,
      sourceid: this.props.match.params.sourceid
    }
  }

  componentDidMount() {
    fetch('https://newsapi.org/v1/articles?source=' + this.state.sourceid + '&apiKey=c4dfbc715df444bd9e673e5ca0e0f005')
    .then(res => {
      if(res.error){
        this.setState({articleError: true})
        console.log("error")
      }
      else {
        console.log("no error")
        console.log(res)
        return res.json()
      }
    })
    .then(articles => {
      this.setState({articles: articles.articles});
      console.log('Retrieved the articles');
    });
  }

  render() {
    if (!this.state.articleError) {
      return (
        <div>
          <h1>Articles</h1>
          <Grid fluid={true}>
            <Row>
              {this.state.articles.map((article, index) =>
                <a href={article.url} key={index}>
                  <Col md={3}>
                    <Thumbnail className="Article-thumbnail" src={article.urlToImage}>
                      <h4>{article.title}</h4>
                      <p>{article.description}</p>
                    </Thumbnail>
                  </Col>
                </a>
              )}
            </Row>
          </Grid>
          <footer>Made possible by the services of <a href="https://newsapi.org/">News API</a></footer>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Looks like these guys don't want to share their news with you</h2>
        </div>
      )
    }
  }
}

export default GetArticles;
