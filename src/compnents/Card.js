import React, { Component } from "react";
import PropTypes from "prop-types";
import MiniCard from "./MiniCard";

export class Card extends Component {
//   articles = [
//     {
//       datetime: "2022-08-02",
//       datetimeEpoch: 1659378600,
//       tempmax: 94.9,
//       tempmin: 80.5,
//       temp: 87.9,
//       feelslikemax: 112.6,
//       feelslikemin: 87.9,
//       feelslike: 100.1,
//       dew: 77.8,
//       humidity: 74.0,
//       precip: 0.05,
//       precipprob: 100.0,
//       precipcover: 12.5,
//       preciptype: ["rain"],
//       snow: 0.0,
//       snowdepth: 0.0,
//       windgust: 9.6,
//       windspeed: 86.3,
//       winddir: 239.3,
//       pressure: 1001.2,
//       cloudcover: 50.7,
//       visibility: 3.6,
//       solarradiation: 219.1,
//       solarenergy: 19.2,
//       uvindex: 9.0,
//       severerisk: 30.0,
//       sunrise: "05:42:59",
//       sunriseEpoch: 1659399179,
//       sunset: "19:11:35",
//       sunsetEpoch: 1659447695,
//       moonphase: 0.1,
//       conditions: "Rain, Partially cloudy",
//       description: "Partly cloudy throughout the day with storms possible.",
//       icon: "rain",
//       stations: ["VIDP", "remote"],
//       source: "comb",
//     },
//     {
//       datetime: "2022-08-03",
//       datetimeEpoch: 1659465000,
//       tempmax: 100.8,
//       tempmin: 89.0,
//       temp: 94.0,
//       feelslikemax: 108.2,
//       feelslikemin: 96.1,
//       feelslike: 101.4,
//       dew: 71.1,
//       humidity: 48.5,
//       precip: 0.03,
//       precipprob: 19.0,
//       precipcover: 8.33,
//       preciptype: ["rain"],
//       snow: 0.0,
//       snowdepth: 0.0,
//       windgust: 14.8,
//       windspeed: 13.0,
//       winddir: 121.1,
//       pressure: 1000.4,
//       cloudcover: 74.5,
//       visibility: 15.0,
//       solarradiation: 214.5,
//       solarenergy: 18.4,
//       uvindex: 8.0,
//       severerisk: 30.0,
//       sunrise: "05:43:33",
//       sunriseEpoch: 1659485613,
//       sunset: "19:10:52",
//       sunsetEpoch: 1659534052,
//       moonphase: 0.14,
//       conditions: "Partially cloudy",
//       description: "Partly cloudy throughout the day.",
//       icon: "partly-cloudy-day",
//       stations: null,
//       source: "fcst",
//     }, {
// 		"datetime" : "2022-08-04",
// 		"datetimeEpoch" : 1659551400,
// 		"tempmax" : 101.4,
// 		"tempmin" : 86.6,
// 		"temp" : 92.0,
// 		"feelslikemax" : 109.0,
// 		"feelslikemin" : 94.0,
// 		"feelslike" : 99.7,
// 		"dew" : 71.9,
// 		"humidity" : 53.4,
// 		"precip" : 0.15,
// 		"precipprob" : 66.7,
// 		"precipcover" : 25.0,
// 		"preciptype" : [ "rain" ],
// 		"snow" : 0.0,
// 		"snowdepth" : 0.0,
// 		"windgust" : 11.2,
// 		"windspeed" : 10.5,
// 		"winddir" : 152.9,
// 		"pressure" : 1001.1,
// 		"cloudcover" : 71.7,
// 		"visibility" : 14.0,
// 		"solarradiation" : 221.9,
// 		"solarenergy" : 19.0,
// 		"uvindex" : 9.0,
// 		"severerisk" : 30.0,
// 		"sunrise" : "05:44:06",
// 		"sunriseEpoch" : 1659572046,
// 		"sunset" : "19:10:08",
// 		"sunsetEpoch" : 1659620408,
// 		"moonphase" : 0.2,
// 		"conditions" : "Rain, Partially cloudy",
// 		"description" : "Partly cloudy throughout the day with storms possible.",
// 		"icon" : "rain",
// 		"stations" : null,
// 		"source" : "fcst",
// 		}, {
// 			"datetime" : "2022-08-05",
// 			"datetimeEpoch" : 1659637800,
// 			"tempmax" : 97.1,
// 			"tempmin" : 87.5,
// 			"temp" : 91.6,
// 			"feelslikemax" : 105.4,
// 			"feelslikemin" : 94.9,
// 			"feelslike" : 100.1,
// 			"dew" : 72.7,
// 			"humidity" : 54.7,
// 			"precip" : 0.14,
// 			"precipprob" : 90.5,
// 			"precipcover" : 29.17,
// 			"preciptype" : [ "rain" ],
// 			"snow" : 0.0,
// 			"snowdepth" : 0.0,
// 			"windgust" : 7.8,
// 			"windspeed" : 6.5,
// 			"winddir" : 147.4,
// 			"pressure" : 999.3,
// 			"cloudcover" : 89.4,
// 			"visibility" : 13.6,
// 			"solarradiation" : 151.3,
// 			"solarenergy" : 13.1,
// 			"uvindex" : 8.0,
// 			"severerisk" : 30.0,
// 			"sunrise" : "05:44:40",
// 			"sunriseEpoch" : 1659658480,
// 			"sunset" : "19:09:22",
// 			"sunsetEpoch" : 1659706762,
// 			"moonphase" : 0.25,
// 			"conditions" : "Rain, Partially cloudy",
// 			"description" : "Partly cloudy throughout the day with storms possible.",
// 			"icon" : "rain",
// 			"stations" : null,
// 			"source" : "fcst",
// 		}, {
// 			"datetime" : "2022-08-06",
// 			"datetimeEpoch" : 1659724200,
// 			"tempmax" : 101.0,
// 			"tempmin" : 86.6,
// 			"temp" : 93.3,
// 			"feelslikemax" : 110.7,
// 			"feelslikemin" : 95.3,
// 			"feelslike" : 102.3,
// 			"dew" : 72.8,
// 			"humidity" : 52.3,
// 			"precip" : 0.11,
// 			"precipprob" : 71.4,
// 			"precipcover" : 37.5,
// 			"preciptype" : [ "rain" ],
// 			"snow" : 0.0,
// 			"snowdepth" : 0.0,
// 			"windgust" : 6.3,
// 			"windspeed" : 4.3,
// 			"winddir" : 138.2,
// 			"pressure" : 996.7,
// 			"cloudcover" : 61.5,
// 			"visibility" : 14.6,
// 			"solarradiation" : 178.4,
// 			"solarenergy" : 15.5,
// 			"uvindex" : 8.0,
// 			"severerisk" : 30.0,
// 			"sunrise" : "05:45:14",
// 			"sunriseEpoch" : 1659744914,
// 			"sunset" : "19:08:36",
// 			"sunsetEpoch" : 1659793116,
// 			"moonphase" : 0.31,
// 			"conditions" : "Rain, Partially cloudy",
// 			"description" : "Partly cloudy throughout the day with storms possible.",
// 			"icon" : "rain",
// 			"stations" : null,
// 			"source" : "fcst",
// 		}, {
// 			"datetime" : "2022-08-07",
// 			"datetimeEpoch" : 1659810600,
// 			"tempmax" : 92.0,
// 			"tempmin" : 85.7,
// 			"temp" : 87.9,
// 			"feelslikemax" : 99.9,
// 			"feelslikemin" : 92.6,
// 			"feelslike" : 96.7,
// 			"dew" : 74.0,
// 			"humidity" : 63.8,
// 			"precip" : 0.67,
// 			"precipprob" : 71.4,
// 			"precipcover" : 45.83,
// 			"preciptype" : [ "rain" ],
// 			"snow" : 0.0,
// 			"snowdepth" : 0.0,
// 			"windgust" : 15.2,
// 			"windspeed" : 11.9,
// 			"winddir" : 133.4,
// 			"pressure" : 996.8,
// 			"cloudcover" : 98.7,
// 			"visibility" : 11.2,
// 			"solarradiation" : 141.9,
// 			"solarenergy" : 12.1,
// 			"uvindex" : 5.0,
// 			"severerisk" : 30.0,
// 			"sunrise" : "05:45:47",
// 			"sunriseEpoch" : 1659831347,
// 			"sunset" : "19:07:48",
// 			"sunsetEpoch" : 1659879468,
// 			"moonphase" : 0.36,
// 			"conditions" : "Rain, Overcast",
// 			"description" : "Cloudy skies throughout the day with storms possible.",
// 			"icon" : "rain",
// 			"stations" : null,
// 			"source" : "fcst",
// 		}, {
// 			"datetime" : "2022-08-08",
// 			"datetimeEpoch" : 1659897000,
// 			"tempmax" : 100.7,
// 			"tempmin" : 84.5,
// 			"temp" : 92.0,
// 			"feelslikemax" : 107.7,
// 			"feelslikemin" : 89.9,
// 			"feelslike" : 98.9,
// 			"dew" : 71.1,
// 			"humidity" : 51.7,
// 			"precip" : 0.0,
// 			"precipprob" : 47.6,
// 			"precipcover" : 0.0,
// 			"preciptype" : [ "rain" ],
// 			"snow" : 0.0,
// 			"snowdepth" : 0.0,
// 			"windgust" : 6.7,
// 			"windspeed" : 4.7,
// 			"winddir" : 100.7,
// 			"pressure" : 996.5,
// 			"cloudcover" : 86.5,
// 			"visibility" : 15.0,
// 			"solarradiation" : 218.5,
// 			"solarenergy" : 18.9,
// 			"uvindex" : 8.0,
// 			"severerisk" : 30.0,
// 			"sunrise" : "05:46:21",
// 			"sunriseEpoch" : 1659917781,
// 			"sunset" : "19:06:59",
// 			"sunsetEpoch" : 1659965819,
// 			"moonphase" : 0.41,
// 			"conditions" : "Rain, Partially cloudy",
// 			"description" : "Partly cloudy throughout the day with storms possible.",
// 			"icon" : "rain",
// 			"stations" : null,
// 			"source" : "fcst",
// 		}
//   ];
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=metric&key=4528GJGLDUTTH96BN2GQM7B6S&contentType=json`;
      ;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,

     });
  }

  render() {
    return (
      <>
        <div className="forecast-table">
          <div className="container">
            <div className="forecast-container">
                  <div className="today forecast">
                    <div className="forecast-header">
                      <div className="day">Monday</div>

                      <div className="date"></div>
                    </div>
                    <div className="forecast-content">
                      <div className="location"></div>
                      <div className="degree">
                        <div className="num">
                          23<sup>o</sup>C
                        </div>
                        <div className="forecast-icon">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/images/icons/icon-1.svg`}
                            alt=""
                            width="90"
                          />
                        </div>
                      </div>
                      <span>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/icon-umberella.png`}
                          alt=""
                        />
                        20%
                      </span>
                      <span>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/icon-wind.png`}
                          alt=""
                        />
                        18km/h
                      </span>
                      <span>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/icon-compass.png`}
                          alt=""
                        />
                        East
                      </span>
                    </div>
                  </div>
                

              {this.state.articles.map((element) => {
				var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
				var d = new Date(element.days ? element.days.datetime : null);
				var dayName = days[d.getDay()];
                return <MiniCard day={dayName}  />;
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Card;
