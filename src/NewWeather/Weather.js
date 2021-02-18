import React from 'react'
import classes from './Weather.module.css'

const Weather = props => {
    const state = props.state
    return (
        <div className={classes.weather_wrapper}>
            <div className={classes.weather_block}>
                <div className={classes.temp_block}>
                    <h1>{state.newCity}</h1>
                    <div className={classes.temp_block_wrapper}>
                        <div>{state.temp}</div>
                        <div>{state.id > 0
                            ? <img src={`https://openweathermap.org/img/wn/${state.icon}@2x.png`} alt='weather-state'/>
                            : null}
                        </div>

                    </div>
                    <h2>{state.description}</h2>
                </div>

                <div className={classes.request_block}>
                    <p>Country: {state.country}</p>
                    <p>Feels like: {state.feels_like}</p>

                    <div className={classes.interface_block}>
                        <input type="text" placeholder={'Enter the city'} onChange={props.changeCityHandler}
                               className={classes.input}
                               onKeyPress={props.onPressEnter}/>
                        <button onClick={props.cityHandler} className={classes.button}>
                            Get weather
                        </button>
                    </div>
                </div>
            </div>










        </div>
    )
}

export default Weather