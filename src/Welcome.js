import React, {Component} from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {name: []};
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}

export default Welcome;
