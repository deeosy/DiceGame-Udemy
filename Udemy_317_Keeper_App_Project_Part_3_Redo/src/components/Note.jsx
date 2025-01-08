import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note({ title, content, id, deleteNote, editNote }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => deleteNote(id)}><DeleteIcon /></button>
      <button onClick={() => editNote(id)}>Edit</button>
    </div>
  );
}

export default Note;