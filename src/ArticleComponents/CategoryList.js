import React, { Component } from 'react';
import { Row, Col, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        'business',
        'entertainment',
        'gaming',
        'general',
        'music',
        'politics',
        'science-and-nature',
        'sport',
        'technology'
      ]
    }
  }

  render() {

    return(
      <div>
      <h1>News Categories</h1>
      <Row className="Row-style">
        {this.state.categories.map((category, index) =>
          <Link to={`/${category}`} key={index}>
            <Col lg={3}>
              <Thumbnail className="Category-thumbnail" >
                <h4>{category}</h4>
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

export default CategoryList;
