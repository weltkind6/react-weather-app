import React from 'react'

const newWeather = () => {

    const getWeatherHandler = e => {
        const apiKey = `cbb5fd1b67ee32baa24dcaaec18392db`
        const url = `http://api.openweathermap.org/data/2.5/weather?q`
        const city = e.target.value

        fetch(`${url}=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => console.log(data))

    }

    const getWeather = () => {
    }


    return (
        <div>
            <div>
                <input type="submit" value={'Get weather'} onClick={getWeather}/>
                <input type="text" placeholder='Enter the city' onChange={getWeatherHandler}/>
            </div>
        </div>
    );
}

export default newWeather