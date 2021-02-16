import React from 'react'
import Weather from "./Weather";

class WeatherContainer extends React.Component {
    state = {
        city: '',
        temp: '',
        feels_like: '',
        newCity: '',
        country: '',
        description: '',
        id: '',
        icon: ''
    };


    cityHandler = () => {
        const apiKey = `cbb5fd1b67ee32baa24dcaaec18392db`
        const url = `http://api.openweathermap.org/data/2.5/weather?q`

        fetch(`${url}=${this.state.city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(response => this.setState({
                city: response.name,
                temp: Math.floor(response.main.temp - 273.15),
                feels_like: Math.floor(response.main.feels_like - 273.15),
                newCity: response.name,
                country: response.sys.country,
                description: response.weather[0].description,
                id: response.weather[0].id,
                icon: response.weather[0].icon
            }))
            .catch(err => alert('City not found!'))

    }


    onPressEnter = e => {
        if (e.code === 'Enter') {
            this.cityHandler()
        }
    }

    changeCityHandler = event => {
        this.setState({
            city: event.target.value
        })
    }

    render() {

        return (
            <div>
                <Weather
                    cityHandler={() => this.cityHandler()}
                    changeCityHandler={this.changeCityHandler.bind(this)}
                    onPressEnter={(e) => this.onPressEnter(e)}
                    state={this.state}/>
            </div>
        );
    }
}

export default WeatherContainer