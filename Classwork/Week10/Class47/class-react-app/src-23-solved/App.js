import React from "react";
import Alert from "./components/Alert";

function App() {
  return <Alert type="danger">Invalid user id or password</Alert>; {/*The Alert tag is using the Alert.js file and passes in 'type'*/}
}

export default App;
