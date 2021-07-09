import React, {Component} from 'react';
const url = "http://localhost:7600/bookings";

class PlaceBooking extends Component {
    constructor(props) {
        super(props);

        this.state={
            id:Math.floor(Math.random()*1000000),
            hotel_name:this.props.match.params.hotel_name,
            name:'',
            phone:'',
            email:'',
            cost:sessionStorage.getItem('cost')
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state)
        fetch(url, 
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .then(this.props.history.push('/viewBooking'))
    }
    render(){
        return(
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        Place Booking
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Order Id</label>
                            <input readOnly name="id" value={this.state.id}
                            className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Hotel Name</label>
                            <input readOnly name="hotel_name" value={this.state.hotel_name}
                            className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Cost</label>
                            <input readOnly name="cost" value={this.state.cost}
                            className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input name="name" value={this.state.name}
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" value={this.state.email}
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input name="phone" value={this.state.phone}
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaceBooking;