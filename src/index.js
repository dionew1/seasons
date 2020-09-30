import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.error(error)
  );
  return <div>Hello there!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));

// developer.mozilla.org/en-US/docs/Web/API/Geolocation_API: Used to get the users physical location
