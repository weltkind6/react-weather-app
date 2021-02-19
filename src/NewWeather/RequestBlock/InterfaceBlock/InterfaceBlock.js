import React from 'react'
import classes from './Interface.module.css'
import GetWeatherButton from "./Button/GetWeatherButton";

const InterfaceBlock = (props) => {
    return (
        //
        <div className={classes.interface}>
            <input type="text" placeholder={'Enter the city'} onChange={props.changeCity}
                   className={classes.input}
                   onKeyPress={props.onPressEnter}/>
            <GetWeatherButton addCity={props.addCity} onPressEnter={props.onPressEnter}/>
        </div>
    )
}

export default InterfaceBlock