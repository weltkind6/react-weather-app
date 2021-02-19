import React from 'react'
import classes from './RequestBlock.module.css'
import InterfaceBlock from "./InterfaceBlock/InterfaceBlock";

const RequestBlock = props => {
    return (
        <div>
            <div className={classes.info_block}>
                <p>Country: {props.state.country}</p>
                <p>Feels like: {props.state.feels_like}</p>
            </div>

            <div className={classes.interface_block}>
                <InterfaceBlock
                    addCity={props.addCity}
                    changeCity={props.changeCity}
                    onPressEnter={props.onPressEnter}
                />
            </div>
        </div>
    )

}

export default RequestBlock