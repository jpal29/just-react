import React, {Component} from 'react';
import Welcome from './Welcome.js';
import LoginPage from './LoginPage.js';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      return <Welcome name="Josh" />
    } else {
      return <LoginPage />
    }
  }
}

export default Greeting;
