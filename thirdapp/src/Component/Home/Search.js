import React,{ Component }from 'react';
import './Search.css';

class Search extends Component {
    constructor(props){
        super(props)

        this.state={
            location:'',
            hotels:''
        }
    }
    render(){
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select class="locationDropDown">
                        <option>-------SELECT CITY-----------</option>
                    </select>
                    <select class="hotelDropDown">
                        <option>-------SELECT HOTEL-----------</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Search