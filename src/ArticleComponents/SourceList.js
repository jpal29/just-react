import React, { Component } from 'react';
import { Row, Col, Thumbnail } from 'react-bootstrap';
import '../App.css';

class SourceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: []
    }
  }

  componentDidMount(){
    fetch(' https://newsapi.org/v1/sources?country=us&category=technology')
    .then(res => res.json())
    .then(sources => this.setState({sources: sources.sources}))
  }

  render(){
    return(
      <div>
      <h1>Sources</h1>
      <Row>
        {this.state.sources.map(source =>
          <a href={source.url} key={source.id}>
            <Col lg={3}>
              <Thumbnail className="Article-thumbnail" src={source.urlsToLogos.small} alt="242x200">
                <h4>{source.name}</h4>
                <span>{source.description}</span>
              </Thumbnail>
            </Col>
          </a>
        )}
      </Row>
      </div>
    )
  }
}

export default SourceList
