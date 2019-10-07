import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <p>
          <strong> City :</strong> {this.props.city},{this.props.country}
        </p>
        <p>
          <strong>Temperature:</strong> {this.props.temperature}
        </p>
        <p>
          <strong>Humidity:</strong> {this.props.humidity}
        </p>
        <p>
          <strong>Condition:</strong> {this.props.description}
        </p>
      </div>
    );
  }
}

export default Weather;
