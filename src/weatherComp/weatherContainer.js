import React from 'react'
import Weather from "./weather";

class WeatherContainer extends React.Component {

    state = {
        data: [
            {city: 'Prague', id: 2},
            {city: 'Moscow', id: 3},
        ],
        newCity: ''
    }

    addCityHandler = () => {
        const newCity = {
            city: this.state.newCity,
            id: 5
        }
        this.setState({
            data: [...this.state.data, newCity]
        })

    }
    changeCityHandler = addNewCity => {
        this.setState({
            newCity: addNewCity,
        })
    }

    render() {
        return (
            <div>
                <Weather
                    addCityHandler={() => this.addCityHandler()}
                    changeCityHandler={this.changeCityHandler.bind(this)}
                    state={this.state}/>
            </div>
        );
    }
}

export default WeatherContainer

// export const state = {
//     data: [
//         {city: 'Prague', id: 2},
//         {city: 'Moscow', id: 3},
//     ],
//     newCity: ''
// }
//
// export const addCityHandler = () => {
//     const newOneCity = {
//         city: state.newCity,
//         id: 3
//     }
//     state.data.push(newOneCity)
//     console.log(state.data)
// }
// export const changeCityHandler = getNewCity => {
//     state.newCity = getNewCity
// }

