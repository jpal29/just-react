import React, { Component } from 'react';
import Clock from './Clock.js';

class ToggleClock extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make this work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const isToggleOn = this.state.isToggleOn;
    if (isToggleOn) {
      return(
        <div>
          <button onClick={this.handleClick}>Hide Clock</button>
          <Clock />
        </div>
      )
    } else {
      return(
        <button onClick={this.handleClick}>Show Clock</button>
      )

    }
  }
}

export default ToggleClock;
