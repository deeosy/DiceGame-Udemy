import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
  return (
    <header>
      <h1 className=" flex gap-1 items-center" ><HighlightIcon /> Keeper</h1>
    </header>
  );
}

export default Header;