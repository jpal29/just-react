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
    .then(response => {
      console.log(response);
      this.setState({title:"", text:""});
      return response.json()
    }).then(body => {
      console.log(body);
    });
    console.log(this.state);
  }




  render() {
    return (
      <form onSubmit={this.addNote}>
        <input type="text" onChange={this.handleTitleChange}  value={this.state.title} className="form-control" placeholder="Title" />
        <input type="text" onChange={this.handleSubjectChange} value={this.state.text} className="form-control" placeholder="Text"  />
        <input type="submit" />
      </form>
    )
  }
}

export default AddNote;
