import React from "react";
import "./NavLinks.css";

function NavLinks({ txt }: { txt: string }) {
  return (
    <button className="cta">
      <span className="hover-underline-animation"> {txt} </span>
    </button>
  );
}

export default NavLinks;
