import React from 'react'
import classes from './GetWeatherButton.module.css'

const GetWeatherButton = props => {
    return (
        <button
            onClick={props.addCity}
            onKeyPress={props.onPressEnter}
            className={classes.button}>
            Get weather
        </button>)
}

export default GetWeatherButton