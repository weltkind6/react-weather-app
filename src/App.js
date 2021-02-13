import './App.css';
import React from 'react'
import WeatherContainer from "./weatherComp/weatherContainer";
import NewWeather from "./NewWeather/NewWeather";


function App() {
  return (
    <div>
        <WeatherContainer/>
        <NewWeather />
    </div>
  );
}

export default App;
