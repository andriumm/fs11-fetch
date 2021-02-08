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
    <div className="text-center my-4">
      <h1 className="text-dark">Get your weather!</h1>
      <div className="mt-4">
        <form>
          <label>
            <h3 className="text-dark">Tell me the city: </h3>
            <input
              type="text"
              onChange={handleChange}
              className="form-control mb-2"
            ></input>
            <button onClick={handleSubmit} className="btn btn-primary mb-4">
              Submit
            </button>
          </label>
        </form>
        <div>
          <h4 className="text-dark">The weather in your location is :</h4>
        </div>
      </div>
    </div>
  );
}

//"api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + myApiKey
