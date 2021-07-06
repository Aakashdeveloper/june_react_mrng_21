import React,{ Component }from 'react';
import './Search.css';

const CityUrl = "https://developerfunnel.herokuapp.com/location";
const hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component {
    constructor(props){
        super(props)
        console.log(">>>>>inside constructor ")
        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }
    handleCity = (event) => {
        console.log(event.target.value)
        const cityId = event.target.value;
        fetch(`${hotelUrl}${cityId}`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            console.log(data)
            this.setState({hotels:data})
        })
    }

    render(){
        console.log(">>>>>inside render ",this.state.location)
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select class="locationDropDown" onChange={this.handleCity}>
                        <option>-------SELECT CITY-----------</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select class="hotelDropDown">
                        <option>-------SELECT HOTEL-----------</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    //on page load call api 
    componentDidMount(){
        console.log(">>>>>inside component Did Mount ")
        // we get the data and update state
        fetch(CityUrl, {method:'GET'})
        // return the promise here
        .then((res) => res.json())
        // get the data
        .then((data) => {
            // console.log(data)
            //setting data in state
            this.setState({location:data})
        })
        // error handling
        .catch((err) => {
            console.log(err)
        })
    }
}

export default Search