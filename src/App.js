import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleChange = ({ target }) => {
    // handle key presses
    const value = target.value;
    setLocation(value);
  };

  const handleSubmit = e => {
    // handle form submit
    e.preventDefault();
    getWeather(location);
    setLoading(true);
  };

  const getWeather = location => {
    console.log(location);
    // call Open Weather API
    const myApiKey = "e5fe5219a05002ab0dc746280be28be0";
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
        location +
        "&appid=" +
        myApiKey
    )
      .then(res => res.json())
      .then(json => setWeather(json))
      .catch(error => setError(error));
  };

  return (
    <div>
      Hello World!
      <div>
        <form>
          <label>
            Location:
            <input type="text" onChange={handleChange}></input>
            <button onClick={handleSubmit}>Submit</button>
          </label>
        </form>
        <div>The weather in {location} is:</div>
      </div>
    </div>
  );
}

//"api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + myApiKey
