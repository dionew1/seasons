// developer.mozilla.org/en-US/docs/Web/API/Geolocation_API: Used to get the users physical location
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getLocation();
    // direct assignment to state only to INITIALIZE state
    this.state = { lat: null };
  }

  getLocation() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // setState function is extended from React.Component
        // setState is called to UPDATE state
        this.setState({ lat: position.coords.latitude });
      },
      (error) => console.error(error)
    );
  }

  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
