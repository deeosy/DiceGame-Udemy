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
      previousNotesArray.filter((noteItem, index) => index !== id)
    );
  };

  const editNote = (id) => {

  };

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          deleteNote={deleteNote}
          title={note.title}
          content={note.content}
          editNote={editNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

