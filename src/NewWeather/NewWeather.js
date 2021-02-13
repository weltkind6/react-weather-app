import React from 'react'

class NewWeather extends React.Component {

    state = {
        data: [
            {city: 'Moscow'}
        ]
    }

    componentDidMount() {
        const apiKey = `cbb5fd1b67ee32baa24dcaaec18392db`
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.data[0].city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(response => this.setState({
                newArr: response,
                loading: true
            }))
    }

    render() {
        const {newArr, loading} = this.state
        console.log(newArr)
        if (!loading) {
            return <h3>Your data is loading...</h3>
        } else return (
            <div>
                <h2>Current weather:</h2>
                <div>{newArr.name}</div>
                <div> {newArr.main.temp}</div>
                <div> {newArr.visibility}</div>
            </div>
        );

    }
}

export default NewWeather