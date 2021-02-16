import './App.css';
import React from 'react'
import WeatherContainer from "./weatherComp/weatherContainer";
import NewWeather from "./NewWeather/NewWeather";
import Example from "./NewWeather/api";
import Weather3 from "./W3/w3";


function App() {
  return (
    <div>
        <WeatherContainer/>
        <NewWeather />
        <Example />
        <Weather3 />
    </div>
  );
}

export default App;
