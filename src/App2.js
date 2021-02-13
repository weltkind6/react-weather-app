import React from 'react'

class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                { name: "Ford", year: 2018 },
                { name: "Audi", year: 2016 },
                { name: "Mazda", year: 2010 }
            ],
            inputValues: { name: "", year: "" },
            pageTitle: "React components",
            showCars: false,
            newCar: {}
        };
    }

    onChangeHandler = e => {
        this.setState({
            inputValues: {...this.state.inputValues, [e.target.name]: e.target.value}
        })
    };

    onSubmitHandler = e => {
        e.preventDefault();
        this.setState({
            cars: [...this.state.cars, {name: this.state.inputValues.name, year: this.state.inputValues.year}]
        })

    };

    render() {
        console.log(this.state);
        return (
            <>
                <form onSubmit={this.onSubmitHandler}>
                    <input
                        onChange={this.onChangeHandler}
                        name="name"
                        type="text"
                        placeholder={"name"}
                    />
                    <input
                        onChange={this.onChangeHandler}
                        name="year"
                        type="text"
                        placeholder={"year"}
                    />
                    <button type="submit">xxxx</button>
                </form>
            </>
        );
    }
}

export default App2