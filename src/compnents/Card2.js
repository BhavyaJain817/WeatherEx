import React, { useState } from "react";
import axios from "axios";

function Card2() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=be92df294c1ccd262d42e43e3e67fa3a`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  const degToCompass = (num) => {
    var val = Math.floor(num / 22.5 + 0.5);
    var arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return arr[val % 16];
  };
  const temp = data.main ? data.main.temp : null;
  let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy


const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date(today);
let day = weekday[d.getDay()];


  return (
    <>
      <div className="hero" data-bg-image="images/banner.png">
        <div className="container">
          <form action="#" className="find-location">
            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              type="text"
              placeholder="Find your location..."
            />
            <input type="submit" value="Find" />
          </form>
        </div>
      </div>
      <div className="forecast-table">
        <div className="container">
          <div className="forecast-container">
            <div className="today forecast">
              <div className="forecast-header">
                <div className="day">{day}, &nbsp;{today}</div>

                <div className="date"></div>
              </div>
              <div className="forecast-content">
                <div className="location">
                  <p>{data.name}</p>
                </div>
                <div className="degree">
                  <div className="num">
                    {temp}
                    <sup>o</sup>C
                  </div>
                  <div className="forecast-icon">
                    <img
                      src={`http://openweathermap.org/img/wn/${data.weather ? data.weather[0].icon : null}@2x.png`}
                      alt=""
                      width="90"
                    />
                    <span className="maint">{data.weather ? data.weather[0].main : null}</span>
                  </div>
                </div>
                <span>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/icon-umberella.png`}
                    alt=""
                  />
                  {data.main ? data.main.humidity : null}%
                </span>
                <span>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/icon-wind.png`}
                    alt=""
                  />
                  {data.wind ? data.wind.speed : null}km/h
                </span>
                <span>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/icon-compass.png`}
                    alt=""
                  />
                  {data.wind ? degToCompass(data.wind.deg) : null}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card2;
