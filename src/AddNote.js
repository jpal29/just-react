import React, {Component} from 'react';

class AddNote extends Component {
  constructor() {
    super();
    //this.state = {note: []};
    this.onSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log(typeof this.refs.noteTitle.value);
    fetch('http://localhost:8000/notes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.refs.noteTitle.value,
        text: this.refs.noteText.value
      })
    })
    .then(function(response) {
      return response.json()
    }).then(function(body) {
      console.log(body);
    });
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Title" ref="noteTitle"/>
        <input type="text" placeholder="Text" ref="noteText" />
        <input type="submit" />
      </form>
    )
  }
}

export default AddNote;
