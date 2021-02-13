import React from 'react'


const Weather = props => {

    const weatherMap = props.state.data.map(i => <div key={i.id}>{i.city}</div>)

    const addCity = () => {
        props.addCityHandler()
    }
    const changeCity = e => {
        const text = e.target.value
        props.changeCityHandler(text)
    }

    return (
        <div>
            <h1>Current Weather</h1>
            {weatherMap}
            <button onClick={addCity}>Get</button>
            <textarea onChange={changeCity}/>
        </div>
    )
}

export default Weather