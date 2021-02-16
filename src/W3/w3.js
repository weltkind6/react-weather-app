import React from 'react'

class Weather3 extends React.Component {

    state = {
        city: [],

    }

    componentDidMount() {
        const apiKey = `cbb5fd1b67ee32baa24dcaaec18392db`
        const url = `http://api.openweathermap.org/data/2.5/weather?q`

        fetch(`${url}=Nepal&appid=${apiKey}`)
            .then(response => response.json())
            .then(response => this.setState({
                city: response,
            }))
    }

    render() {
        console.log(this.state.city)
        return (
            <div>

            </div>
        );
    }
}

export default Weather3