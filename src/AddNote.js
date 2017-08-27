import React, {Component} from 'react';

class AddNote extends Component {
  constructor() {
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.state = {
      title:'',
      text:''
    }
  }


  handleTitleChange(e) {
    e.preventDefault();
    this.setState({title:e.target.value});
  }

  handleSubjectChange(e) {
    e.preventDefault();
    this.setState({text:e.target.value});
  }

  addNote(){
    
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.handleTitleChange} placeholder="Title" ref="title"/>
        <input type="text" onChange={this.handleSubjectChange} placeholder="Text" ref="text" />
        <input type="submit" />
      </form>
    )
  }
}

export default AddNote;
