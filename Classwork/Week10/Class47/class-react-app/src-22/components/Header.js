import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const styles = {
  header: {
    background: "green"
  }
}

function Header() {
  return (
    <header className={styles.header}> {/*className="header"  */}
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
