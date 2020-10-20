import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            sayings: [
                'uff-dah',
                'mee-scuzi',
                'shiver me timbers',
                'shark boy and lava girl',
                'ope'
            ],
            userInput: '',
            filteredSayings: []
        }
    }
    
    handleChange(val){
        this.setState({userInput: val})
    }

    filterSayings(userInput){
        let sayings = this.state.sayings;
        let filteredSayings = [];

        for(let i = 0; i < sayings.length; i++){
            if(sayings[i].includes(userInput)){
                filteredSayings.push(sayings[i])
            }
        }
        this.setState({filteredSayings: filteredSayings})
    }
    
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4> Filter String </h4>
                <span className='puzzleText'> Sayings: {JSON.stringify(this.state.sayings, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton'> Filter </button>
                <span className='resultsBox filterStringRB'> Filtered Sayings: {JSON.stringify(this.state.filteredSayings, null, 10)} </span>
            </div>
        )
    }
}

export default FilterString