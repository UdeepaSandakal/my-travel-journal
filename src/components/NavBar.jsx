import React from "react";
import World from "../assets/world.png";

function NavBar() {
  return (
    <nav className="nav">
      <img src={World} className="nav--logo" />
      <h3 className="nav--header">My Travel Journal</h3>
    </nav>
  );
}

export default NavBar;
