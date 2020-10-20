import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            pals: [
                {
                    name: 'Larry', 
                    age: 24, 
                    hairColor: 'brown', 
                    homeTown: 'Atlanta'
                },
                {
                    name: 'Beth', 
                    age: 27, 
                    homeTown: 'Minneapolis', 
                    married: true
                },
                {
                    name: 'Dubya', 
                    age: 72, 
                    homeTown: 'Dallas', 
                    gunOwner: true
                }
            ],
            userInput: '',
            filteredPals: []
        }
    }
    
    handleChange(val){
        this.setState({userInput: val})
    }

    filterPals(prop){
       let pals = this.state.pals;
       let filteredPals = [];
       
       for(let i = 0; i < pals.length; i++){
           if(pals[i].hasOwnProperty(prop)){
               filteredPals.push(pals[i]);
           }
       }
       this.setState({filteredPals: filteredPals})
    }
    
    render(){
        return  (
            <div className='puzzleBox filterObjectPB'>
                <h4> Filter Object</h4>
                <span className='puzzleText'> Original : {JSON.stringify(this.state.pals, null, 10)}</span>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={ () => this.filterPals(this.state.userInput)}> Filter</button>
                <span className='resultsBox filterObjectRB'> Filtered: {JSON.stringify(this.state.filteredPals, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject