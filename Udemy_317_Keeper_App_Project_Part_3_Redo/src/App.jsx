import React, { useState } from "react";
import Header from './components/Header'
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import './App.css'



function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((previousNotes) => [...previousNotes, note]);
  };

  const deleteNote = (id) => {
    setNotes((previousNotesArray) =>
      previousNotesArray.filter((noteItem) => noteItem.id !== id)
    );
  };

  const editNote = (id, editedEntry) => {
    setNotes(notes.map((note)=>{
      if(note.id === id) {
        return {...note, ...editedEntry}
      } else{
        return note
      }
    }))
  };


  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          deleteNote={deleteNote}
          title={note.title}
          content={note.content}
          editNote={editNote}
          />
        ))
      }

      <Footer />
    </div>
  );
}

export default App;

