import React, { Component } from 'react';
import { Row, Col, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

class SourceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      sourcedescription: this.props.match.params.sourcedescription
    }
  }

  componentDidMount(){
    fetch('https://newsapi.org/v1/sources?country=us&category=' + this.state.sourcedescription)
    .then(res => res.json())
    .then(sources => this.setState({sources: sources.sources}))
  }

  render(){
    return(
      <div>
      <h1>Sources</h1>
      <Row>
        {this.state.sources.map(source =>
          <Link to={`/${source.category}/${source.id}/articles`} key={source.id}>
            <Col lg={3}>
              <Thumbnail className="Article-thumbnail" src={source.urlsToLogos.small}>
                <h4>{source.name}</h4>
                <p>{source.description}</p>
              </Thumbnail>
            </Col>
          </Link>
        )}
      </Row>
      <footer>Made possible by the services of <a href="https://newsapi.org/">News API</a></footer>
      </div>
    )
  }
}

export default SourceList
