import React from 'react'
import classes from './Weather.module.css'
import RequestBlock from "./RequestBlock/RequestBlock";

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
                    <RequestBlock
                        state={state}
                        addCity={props.cityHandler}
                        changeCity={props.changeCityHandler}
                    />
                </div>


            </div>


        </div>
    )
}

export default Weather