import React from 'react';
import { Dropdown } from './Dropdown'
import AddStateForm from './StateForm'

export default class State extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            states: []
        };
    }

    componentDidUpdate(prevProps){
        console.log(this.props.selectedCountry);
        console.log(this.props.updateCountry);
        // == does value comparison, === does type and value comparison
        // != does value comparison, !== does type and value
        if (this.props.selectedCountry !== prevProps.selectedCountry) {
            if (this.props.selectedCountry !== '') {
                const url = 'http://localhost:8000/countries/' + this.props.selectedCountry + '/states/';
                //const url = 'https://xc-ajax-demo.herokuapp.com/api/states/';
                fetch(url)
                    .then(response => response.json())
                    .then(states => this.setState({states: states}));
            }
        }
    }

    render(){
        return <div id='main'>
            <Dropdown dropdownText='Select State' items={this.state.states} />
            <AddStateForm />
        </div>
        
    }
};