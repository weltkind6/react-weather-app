import React from 'react'

const Weather = props => {
    const state = props.state
    return (
        <div>
            <h3>City: {state.newCity}</h3>
            <p>Country: {state.country}</p>
            <p>Description: {state.description}</p>
            <p>Temp: {state.temp}</p>
            <p>Feels like: {state.feels_like}</p>
            {state.id > 0 ? <img src={`https://openweathermap.org/img/wn/${state.icon}@2x.png`} alt='weather-state' /> : null}


            <input type="text" placeholder={'Enter the city'} onChange={props.changeCityHandler}
                   onKeyPress={props.onPressEnter}/>
            <button onClick={props.cityHandler}>
                Get weather!
            </button>
        </div>
    )
}

export default Weather