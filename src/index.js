// developer.mozilla.org/en-US/docs/Web/API/Geolocation_API: Used to get the users physical location
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getLocation();
    // direct assignment to state only to INITIALIZE state
    this.state = { lat: null, errorMessage: "" };
  }

  getLocation() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // setState function is extended from React.Component
        // setState is called to UPDATE state
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
