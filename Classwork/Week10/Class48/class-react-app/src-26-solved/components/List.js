import React from "react";

function List(props) {
  //props is passed in from App.js file
  let notPurchased = props.groceries.filter(item => !item.purchased)

  return (
    <div>
      <ul className="list-group">
        {/* Using the map method, render one li element displaying the text property of each grocery
      object. */}
        {props.groceries.map(item => <li className="list-group-item" key={item.id} name={item.name}>{item.name}</li>)}
      </ul>
      <br />
      <br />
      <ul className="list-group">
        {notPurchased.map(item => <li className="list-group-item" key={item.id} name={item.name}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default List;
