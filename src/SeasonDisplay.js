import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  }
  if (month < 3 && month > 10) {
    return lat > 0 ? "Winter" : "Summer";
  }
  return "Sorry the season is undetermined.";
};

const SeasonDisplay = (props) => {
  let date = new Date().getMonth();
  const season = getSeason(props.lat, date);
  return <div>Your season is {season}!</div>;
};

export default SeasonDisplay;
