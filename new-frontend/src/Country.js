import React from 'react';
import { Dropdown } from './Dropdown'
import AddCountryForm from './CountryForm'

export default class Country extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            countries: [],
        };
    }

    updateCountryDropdown(){
        //API call to get country info (gets a promise back)
        //'https://xc-ajax-demo.herokuapp.com/api/countries/' was Matt's link 
        fetch('http://localhost:8000/countries/')
        .then(response => response.json())
        .then(countries => this.setState({countries}));
    }

    //lifecycle methods
    componentDidMount(){
        this.updateCountryDropdown()
    }

    handleChange = (e) => {
        this.props.updateCountry(e.target.value); 
    }

    inputNewCountryHandler = (event) => {
        this.setState({countryName: event.target.value});
    }

    handlePost = (event) => {
        this.updateCountryDropdown()
    }

    render() {
        return(
            <div id='main'>
                <Dropdown dropdownText='Select Country' items={this.state.countries} onChange={this.handleChange}/>
                <AddCountryForm onPost={this.handlePost}/>
                <br></br>
            </div>
        )
    }
};

// <AddCountryForm onChange={this.inputNewCountryHandler}/>

//old stuff under componentDidMount()
        //updates values and re-renders component
        //optional second param (callback function)
        // this.setState({
        //   countries: [
        //       countryData
            //{id:'1', code:'ALB', name: 'Albania'},
            //{id:'2', code: 'AUS', name: 'Australia'},
        //   ] 
        // });