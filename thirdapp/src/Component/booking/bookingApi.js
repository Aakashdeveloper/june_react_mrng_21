import React, {Component} from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDetails';

const url = "http://localhost:7600/bookings"

class ViewBooking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            booking:''
        }
    }
    render(){
        return(
            <div>
                <BookingDisplay bookdata={this.state.booking}/>
            </div>
        )
    }

    // api and patch response after payment 
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({booking:res.data})})
    }
}

export default ViewBooking;