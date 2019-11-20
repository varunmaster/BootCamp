import React from "react";

function Alert(props) { //props is passed in from the App.js file
  console.log(props); //look at this in the browser

  return (
    <div className={`alert alert-${props.type || "success"}`} role="alert">
      {props.children}
    </div>
  );
}

export default Alert;
