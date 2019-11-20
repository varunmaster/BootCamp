import React from "react";

function HelloDiv() {
  return ( //JSX can only have ONE html tag. need a wrapper around other html
    <div>
      <h1>Hey guys! I'm a header!</h1>
      <h2>Things I like!</h2>
      <ul>
        <li>Peas</li>
        <li>Carrots</li>
        <li>Love</li>
      </ul>
    </div>
  );
}

export default HelloDiv;
