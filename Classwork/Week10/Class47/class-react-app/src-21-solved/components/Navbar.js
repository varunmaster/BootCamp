import React from "react";
import "../styles/Navbar.css"

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6"
  },
  heading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  }
};

function Navbar() {
  return (
    <div style={styles.card}>{/*we can also do inline style with styles object*/}
      <div style={styles.heading} className="navbar">Home</div> {/*Bc we imported thed navbar.css, we can refer to the styles inside that file now by className="name"*/}
    </div>
  );
}

export default Navbar;
