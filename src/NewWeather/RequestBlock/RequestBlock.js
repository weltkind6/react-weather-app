import React from 'react'
import classes from './RequestBlock.module.css'
import InterfaceBlock from "./InterfaceBlock/InterfaceBlock";

const RequestBlock = props => {
    return (
        <div>
            <p>Country: {props.state.country}</p>
            <p>Feels like: {props.state.feels_like}</p>

            <div className={classes.interface_block}>
                <InterfaceBlock addCity={props.addCity} changeCity={props.changeCity}/>
            </div>
        </div>
    )

}

export default RequestBlock