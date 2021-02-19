import React from 'react'
import classes from './TempBlock.module.css'

const TempBlock = props => {
    return (
        <div className={classes.temp_block}>
            <h1>{props.state.newCity}</h1>
            <div className={classes.temp_block_wrapper}>
                <div>{props.state.temp}</div>
                <div>{props.state.id > 0
                    ? <img
                        src={`https://openweathermap.org/img/wn/${props.state.icon}@2x.png`}
                        alt='weather-state'
                        className={classes.w_img}
                    />
                    : null}
                </div>
            </div>
            <h2>{props.state.description}</h2>
        </div>
    )
}

export default TempBlock