import React from 'react'
import classes from './Weather.module.css'
import RequestBlock from "./RequestBlock/RequestBlock";
import TempBlock from "./TempBlock/TempBlock";

const Weather = props => {
    const state = props.state
    return (
        <div className={classes.weather_wrapper}>
            <div className={classes.weather_block}>
                <TempBlock state={state}/>

                <div className={classes.request_block}>
                    <RequestBlock
                        state={state}
                        addCity={props.cityHandler}
                        changeCity={props.changeCityHandler}
                        onPressEnter={props.onPressEnter}
                    />
                </div>
            </div>
        </div>
    )
}

export default Weather