import React from 'react';
import ReactDOM from 'react-dom';
import Country from './Country'

export default class AddStateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { stateName: ''}
    }

    changeHandler = (event) => {
        this.setState({stateName: event.target.value});
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state.stateName)

        if (this.state.stateName=='') {
            alert("You are missing required input fields.")
        } else {
            alert("You are adding the state: " + this.state.stateName);
        }
    }

    render() {
        return (
            <div>
            <form onSubmit = {this.submitHandler}>
                <p>Enter a new state:</p>
                <input 
                    type="text"
                    onChange={this.changeHandler}
                />
                <input 
                    type="submit"
                />
            </form>

            </div>
        );
    }
}
 //how can i resuse what I have creating the first country dropdown to create another one and use it as a form for
 //what country to add a new state to (dropdown list, will have to get data on name and code of country?)