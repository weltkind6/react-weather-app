// import React from 'react'
// import WeatherContainer from "./weather";
//
// class WeatherContainer extends React.Component {
//
//     state = {
//         data: [
//             {city: 'Prague', id: 2},
//             {city: 'Moscow', id: 3},
//         ],
//         newCity: ''
//     }
//
//
//     addCityHandler = () => {
//         const newCity = {
//             city: this.state.newCity,
//             id: 5
//         }
//         this.setState({
//             data: [...this.state.data, newCity]
//         })
//
//     }
//     changeCityHandler = addNewCity => {
//         this.setState({
//             newCity: addNewCity,
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <WeatherContainer
//                     addCityHandler={() => this.addCityHandler()}
//                     changeCityHandler={this.changeCityHandler.bind(this)}
//                     state={this.state}/>
//             </div>
//         );
//     }
// }
//
// export default WeatherContainer
