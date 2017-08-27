import React, {Component} from 'react';

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.addNote = this.addNote.bind(this);
    this.state = {
      title:'',
      text:''
    }
  }


  handleTitleChange(e) {
    this.setState({title:e.target.value});
  }

  handleSubjectChange(e) {
    this.setState({text:e.target.value});
  }

  addNote(e) {
    e.preventDefault();
    fetch('http://localhost:8000/notes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        text: this.state.text
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
      <form onSubmit={this.addNote}>
        <input type="text" onChange={this.handleTitleChange} placeholder="Title" ref="title"/>
        <input type="text" onChange={this.handleSubjectChange} placeholder="Text" ref="text" />
        <input type="submit" />
      </form>
    )
  }
}

export default AddNote;
