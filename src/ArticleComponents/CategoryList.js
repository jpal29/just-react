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
      <h1>Categories</h1>
      <Row>
        {this.state.categories.map((category, index) =>
          <Link to={`/${category}`} key={index}>
            <Col lg={3}>
              <Thumbnail className="Article-thumbnail" alt="242x200">
                <h4>{category}</h4>
              </Thumbnail>
            </Col>
          </Link>
        )}
      </Row>
      </div>
    )
  }
}

export default CategoryList;
