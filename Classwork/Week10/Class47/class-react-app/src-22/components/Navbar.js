import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const styles = {
  nav: {
    background: "red"
  }
}

function Navbar() {
  return (
    <nav className={styles.nav}> {/*className="navbar" */}
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
