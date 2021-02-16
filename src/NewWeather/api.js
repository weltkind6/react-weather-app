import React from 'react'

class Example extends React.Component {
    state = {
        city: '',
        temp: '',
        feels_like: '',
        newCity: '',
        country: ''
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
                country: response.sys.country
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
        const {
            newCity,
            temp,
            feels_like,
            country} = this.state
        return (
            <div>
                <h3>City: {newCity}</h3>
                <span>Country: {country}</span>
                <p>Temp: {temp}</p>
                <p>Feels like: {feels_like}</p>

                <input type="text" placeholder={'Enter the city'} onChange={this.changeCityHandler}
                       onKeyPress={this.onPressEnter}/>
                <button onClick={this.cityHandler}>
                    Get weather!
                </button>
            </div>
        );
    }
}

export default Example