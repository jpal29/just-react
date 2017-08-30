import React, {Component} from 'react';
import AddNote from './AddNote.js';

class NoteCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {notes: []};
    this.updateNoteState = this.updateNoteState.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(notes => this.setState({ notes }));
  }

  updateNoteState() {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(notes => {
        this.setState({ notes });
        this.shouldComponentUpdate();
      })
  }


  render() {
    return (
      <div>
        <h1>Notes</h1>
        {this.state.notes.map(note =>
          <div key={note._id}>{note.text}</div>
        )}
        < AddNote action={this.updateNoteState}/>
      </div>
    )
  }
}

export default NoteCollection;
