import React, { Component } from "react";

export class MiniCard extends Component {
  render() {
    let  {day, temp, feelsLike, icon} = this.props;
    return (
      <div className="forecast">
        <div className="forecast-header">
          <div className="day">{day}</div>
        </div>
        <div className="forecast-content">
          <div className="forecast-icon">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/icons/icon-3.svg`}
              alt=""
              width="48"
            />
          </div>
          <div className="degree">
            {temp}
            <sup>o</sup>F
          </div>
          <small>
            {feelsLike}
            <sup>o</sup>F
          </small>
        </div>
      </div>
    );
  }
}

export default MiniCard;