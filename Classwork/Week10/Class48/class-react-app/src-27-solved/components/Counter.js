import React from "react";

//stateful apps need to use class
// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = { //any time there is a change in the state, the UI DOM will update automatically but only that piece, not the entire DOM. must use the word state
    count: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 }); //must use setState method so the compiler knows to update the DOM automatically. setState knows to update the variable state from above
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
