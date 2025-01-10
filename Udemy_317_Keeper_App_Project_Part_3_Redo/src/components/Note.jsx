import React,{ useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Fab, } from "@mui/material";
import {EditBtnModal} from "./EditBtnModal";



function Note({ title, content, id, deleteNote, editNote }) {

  const btnCustomStyle= {
    backgroundColor: '#f5ba13',
    color: '#817d7d', 
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <Fab onClick={() => deleteNote(id)}> 
        <DeleteIcon className='del-custom ' /> 
        </Fab>
      <EditBtnModal  editNote={editNote} style={btnCustomStyle} title={title} content={content} id={id} />
    </div>
  );
}


export default Note;