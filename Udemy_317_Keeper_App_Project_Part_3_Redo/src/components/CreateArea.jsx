import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import {v4 as uuid} from 'uuid'

function CreateArea({ addNote }) {
  const [createNote, setCreateNote] = useState({ title: "", content: "", id:uuid() });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateNote((previousValue) => ({ ...previousValue, [name]: value }));
  };

  const addBtn = (e) => {
    addNote(createNote);
    setCreateNote({ title: "", content: "", id:uuid() });
    e.preventDefault();
  };

  const [isExpand, setIsExpand] = useState(false)
  const handleExpansion =()=>{
    setIsExpand(true)
  }

  return (
    <div>
      <form className="create-note" >
        {/* code below handles expansion if expand is true show input title text */}
        {isExpand &&
        <input
          onChange={handleChange}
          value={createNote.title}
          name="title"
          placeholder="Title"
        /> }
        <textarea onClick={handleExpansion}
          onChange={handleChange}
          value={createNote.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpand ? '3' : '1'}
        />
        <Zoom in={isExpand? true: false} >
          <Fab onClick={addBtn}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
