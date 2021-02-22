import React from 'react';

 export class Dropdown extends React.Component{
    render() {
        let itemList = this.props.items.length > 0 
        && this.props.items.map((item) => {
        return (
            <option key={item.id} value={item.code}>{item.name}</option>
        )
    }, this);

        return(
            <div>
                <select onChange={this.props.onChange}>
                    <option>{this.props.dropdownText}</option>
                    {itemList}
                </select>
            </div>
        );
    }
};

//const is used for variables that you don't plan to change like pi=3.14
//var and let are used for changing variables, but with different scopes
//we use let here, which is the more local one


//  const { countries } = this.state;
//  let countriesList = countries.length > 0
//      && countries.map((item) => {
//      return (
//          <option key={item.id} value={item.code}>{item.name}</option>
//      )
//  }, this); //don't need this here

//  const { states } = this.state;
//  let statesList = states.length > 0
//      && states.map((item) => {
//      return (
//          <option key={item.id} value={item.code}>{item.name}</option>
//      )
//  }, this);

// define itemList or pass in the name of it somewhere?
// in the future, this would be put into Country.js render 
// <Dropdown dropdownText='Select Country' />
