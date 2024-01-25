import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
const WeatherApp = () => {
  const [data, setdata] = useState("");

  const [location, setLocation] = useState("");

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f1b33d368e5ca3cf5204b92025b6a69d`;

  const LoadQuotes = () => {
    axios
      .get(url)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="w_container">
        <div className="content">
          <div className="search">
            <div>
              <input
                type="text"
                value={location}
                onChange={() => setLocation(event.target.value)}
                placeholder="Enter Location"
              />
              <SearchIcon onClick={LoadQuotes} />
            </div>
          </div>
          <div className="background">
            <div className="location">
              {data.name ? <p>{data.name}</p> : <p>city</p>}
            </div>

            <div className="temp p">
              {data.main ? (
                <h1>{Math.floor(data.main.temp)}°F </h1>
              ) : (
                <h1>0 °F</h1>
              )}
            </div>
          </div>

          <div className="bottom1">
            <div className="humidity p">
              {data.main ? (
                <p>{Math.floor(data.main.humidity)}% </p>
              ) : (
                <p>0%</p>
              )}
              <p>Humidity</p>
            </div>
            <div className="feels p">
              {data.wind ? <p>{data.wind.speed}MPH</p> : <p>0MPH</p>}
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
