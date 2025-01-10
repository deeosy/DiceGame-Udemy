import React, {useState} from "react";
import {  Dialog } from "@material-tailwind/react";
import { Fab, Zoom } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
 
export function EditBtnModal({editNote, content, title, id }) {
  const [size, setSize] = React.useState(null);
 
  const handleOpen = (value) => setSize(value);

  const [createNote, setCreateNote] = useState({ title, content,});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateNote((previousValue) => ({ ...previousValue, [name]: value }));
  };

  const handleEditedEntry = (e) => {
    let updatedNote = { ...createNote};  // Use createNote state for updated title and content
    updatedNote.id = id;  // Ensure the id is passed along with the updated note
    editNote(id, updatedNote); // Pass the updated note to the parent component for saving
    handleOpen(null); // Close the dialog after editing
    e.preventDefault(); // Prevent form submission (default behavior)
  };
 
  return (
    <>
      <div className="mb-3">
        <Fab onClick={() => handleOpen("xs")} variant="gradient">
          <EditIcon   />
        </Fab>
      </div>
      <Dialog
        open={
          size === "xs"
        }
        size={size || "md"}
        handler={handleOpen}
        style={{padding:'16px'}}
      >
      <form className="edit-note "   >
        <input
          onChange={handleChange}
          value={createNote.title}
          name="title"
          placeholder="Title"
        /> 
        <textarea 
          onChange={handleChange}
          value={createNote.content}
          name="content"
          placeholder="Take a note..."
          rows='3'
        />
        <Zoom in={true} >
          <Fab onClick={() => handleOpen(null)} style={{right: '64px'}} ><CloseIcon /></Fab>
        </Zoom>
        <Zoom in={true} >
          <Fab onClick={handleEditedEntry} ><CheckIcon/></Fab>
        </Zoom>
      </form>
        {/* <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter> */}
      </Dialog>
    </>
  );
}