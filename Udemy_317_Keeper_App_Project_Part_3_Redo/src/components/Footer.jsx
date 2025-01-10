import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="text-[14px]" >Copyright ⓒ {year} Code by D33 </p>
    </footer>
  );
}

export default Footer;
