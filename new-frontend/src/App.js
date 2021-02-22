//import logo from './logo.svg';
//import './App.css';
//import { render } from 'react-dom';
import React from 'react';
import Country from './Country';
import State from './State';
import AddCountryForm from './CountryForm';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {selectedCountry:''};

  }

  updateSelectedCountry = (newCountry) => {
    this.setState({selectedCountry: newCountry});
  }

  render(){
    return (
      <div id='main'>
        <Country updateCountry={this.updateSelectedCountry}/>
        <State selectedCountry={this.state.selectedCountry}/>
      </div>
    );
  }
}



