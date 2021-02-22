import React from 'react';
import ReactDOM from 'react-dom';

export default class AddCountryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryName: '',
            countryCode: ''
        }
    }
    //need 2 event handlers due to having 2 text boxes getting data?
    changeHandlerName = (event) => {
        this.setState({countryName: event.target.value});
    }

    changeHandlerCode = (event) => {
        this.setState({countryCode: event.target.value});
    }

    submitHandler = (event) => {
        //event.preventDefault();  //causes the input fields not to clear
        console.log(this.state.countryName) //here for now
        console.log(this.state.countryCode) //just to check
        
        if (this.state.countryName=='' || this.state.countryCode=='') {
            alert("You are missing required input fields.")
        } else {
            alert("You are adding the country: " + this.state.countryName + ', ' + this.state.countryCode);
            fetch('http://localhost:8000/countries/', {
                method: 'POST',
                body: JSON.stringify({name:this.state.countryName, code:this.state.countryCode}),
                headers: {'Content-Type': 'application/json'}
            });
            this.props.onPost()
        }

    }

    render() {
        return (
            <div>
            <form onSubmit={this.submitHandler}>
                <p>Enter a new country name:</p>
                <input 
                    type="text"
                    name='countryName'
                    onChange={this.changeHandlerName}
                />
                <p>Enter the country code:</p>
                <input 
                    type='text'
                    name='countryCode'
                    onChange={this.changeHandlerCode}
                />
                <input 
                    type="submit"
                />
            </form>
            </div>
        );
    }
};
